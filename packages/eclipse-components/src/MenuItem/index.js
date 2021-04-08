/* eslint-disable complexity */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useForkRef from '@material-ui/core/utils/useForkRef';
import createChainedFunction from '@material-ui/core/utils/createChainedFunction';
import { ChevronRight as KeyboardArrowRight } from '@ayx/icons';

import { withStyles, useTheme } from '../styles';
import { dataUICMaker, filterProps } from '../utils';
import ListItem from '../ListItem';

const RTL_ANCHOR_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
};

const LTR_ANCHOR_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};

const RTL_TRANSFORM_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};

const LTR_TRANSFORM_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
};

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    ...theme.typography.body1,
    minHeight: 48,
    paddingTop: 6,
    paddingBottom: 6,
    boxSizing: 'border-box',
    width: 'auto',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('sm')]: {
      minHeight: 'auto'
    }
  },
  // TODO v5: remove
  /* Styles applied to the root element if `disableGutters={false}`. */
  gutters: {},
  /* Styles applied to the root element if `selected={true}`. */
  selected: {},
  /* Styles applied to the root element if dense. */
  dense: {
    ...theme.typography.body2,
    minHeight: 'auto'
  },
  /* Styles applied to a Menu Item's children when a subMenu is present */
  subMenuItemWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  /* Styles applied to the subMenuIcon when it is present */
  subMenuIcon: {
    marginLeft: theme.spacing(2),
    height: 14,
    width: 14,
    marginTop: theme.spacing(0.75),
    color: theme.palette.action.passive
  },
  /* Styles applied to subMenuIcon when dirction is 'rtl' */
  rtlSubMenuIcon: {
    transform: 'rotate(-180deg)'
  }
});

const MenuItem = React.forwardRef(function MenuItem(props, ref) {
  const theme = useTheme();

  const {
    children,
    classes,
    className,
    component = 'li',
    disableGutters = false,
    handleArrowRightKeydown,
    key,
    ListItemClasses,
    openSubMenu = false,
    onKeyDown,
    role = 'menuitem',
    selected,
    subMenu,
    subMenuIcon: SubMenuIcon = KeyboardArrowRight,
    setParentOpenSubMenuIndex,
    tabIndex: tabIndexProp,
    handleParentClose,
    ...other
  } = props;

  const listItemRef = React.useRef(null);
  const handleOwnRef = React.useCallback(instance => {
    // #StrictMode ready
    // eslint-disable-next-line react/no-find-dom-node
    listItemRef.current = ReactDOM.findDOMNode(instance);
  }, []);
  const handleRef = useForkRef(handleOwnRef, ref);

  let tabIndex;
  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }

  const disallowedProps = ['anchorEl', 'handleParentClose', 'isSubMenu', 'open', 'setParentOpenSubMenuIndex'];
  const subMenuProps = subMenu ? subMenu.props : {};
  const filteredProps = filterProps(subMenuProps, disallowedProps);
  const {
    MenuListProps, // Needs to be spread into subMenu prop
    onClose: subOnClose, // Needs to be combined with parentOnClose on the subMenu
    ...allowedSubMenuProps
  } = filteredProps;

  const listItem = (
    <ListItem
      aria-expanded={subMenu ? openSubMenu : undefined}
      aria-haspopup={subMenu ? true : undefined}
      button
      classes={{ dense: classes.dense, ...ListItemClasses }}
      className={clsx(
        classes.root,
        {
          [classes.selected]: selected,
          [classes.gutters]: !disableGutters
        },
        className
      )}
      component={component}
      disableGutters={disableGutters}
      key={key || (subMenu && 'MenuItem')}
      onKeyDown={createChainedFunction(handleArrowRightKeydown, onKeyDown)}
      ref={handleRef}
      role={role}
      selected={selected}
      tabIndex={tabIndex}
      {...other}
    >
      {subMenu ? (
        <div className={classes.subMenuItemWrapper}>
          {children}
          <SubMenuIcon
            className={clsx(classes.subMenuIcon, {
              [classes.rtlSubMenuIcon]: theme.direction === 'rtl'
            })}
          />
        </div>
      ) : (
        children
      )}
    </ListItem>
  );

  if (!subMenu) return listItem;

  return [
    listItem,
    openSubMenu && listItemRef.current !== null
      ? React.cloneElement(subMenu, {
          key: 'subMenu',
          anchorEl: listItemRef.current,
          anchorOrigin: theme.direction === 'rtl' ? RTL_ANCHOR_ORIGIN : LTR_ANCHOR_ORIGIN,
          MenuListProps: { ...MenuListProps, isSubMenu: true },
          open: openSubMenu,
          onClose: createChainedFunction(handleParentClose, subOnClose),
          setParentOpenSubMenuIndex,
          transformOrigin: theme.direction === 'rtl' ? RTL_TRANSFORM_ORIGIN : LTR_TRANSFORM_ORIGIN,
          ...allowedSubMenuProps
        })
      : undefined
  ];
});

MenuItem.propTypes = {
  /**
   * Menu item contents.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: PropTypes.bool,
  /**
   * @ignore
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: PropTypes.bool,
  /**
   * @ignore
   */
  handleArrowRightKeydown: PropTypes.func,
  /**
   * @ignore
   */
  handleParentClose: PropTypes.func,
  /**
   * @ignore
   */
  key: PropTypes.any,
  /**
   * `classes` prop applied to the [`ListItem`](/api/list-item/) element.
   */
  ListItemClasses: PropTypes.object,
  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,
  /**
   * @ignore
   */
  onMouseEnter: PropTypes.func,
  /**
   * @ignore
   */
  openSubMenu: PropTypes.bool,
  /**
   * @ignore
   */
  role: PropTypes.string,
  /**
   * @ignore
   */
  selected: PropTypes.bool,
  /**
   * @ignore
   */
  setParentJustArrowedLeft: PropTypes.func,
  /**
   * @ignore
   */
  setParentOpenSubMenuIndex: PropTypes.func,
  /**
   * The sub-Menu that a Menu item will render
   */
  subMenu: PropTypes.node,
  /**
   * The icon used to indicate a Menu item has a sub-Menu.
   */
  subMenuIcon: PropTypes.node,
  /**
   * @ignore
   */
  tabIndex: PropTypes.number
};

export default dataUICMaker(withStyles(styles, { name: 'MuiMenuItem' })(MenuItem), 'MenuItem');
