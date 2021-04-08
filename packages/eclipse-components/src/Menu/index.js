// import Menu from '@material-ui/core/Menu';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { isFragment } from 'react-is';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import setRef from '@material-ui/core/utils/setRef';

import { withStyles, useTheme } from '../styles';
import Popover from '../Popover';
import MenuList from '../MenuList';
import { dataUICMaker } from '../utils';

const RTL_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};

const LTR_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
};

export const styles = {
  /* Styles applied to the `Paper` component. */
  paper: {
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tapable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: 'calc(100% - 96px)',
    // Add iOS momentum scrolling.
    WebkitOverflowScrolling: 'touch'
  },
  /* Styles applied to the `List` component via `MenuList`. */
  list: {
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  },
  /* Styles applied to sub`Menu`s to prevent the Modal from capturing mouse events */
  disablePointerEvents: {
    pointerEvents: 'none'
  },
  /* Styles applied to sub`MenuItems` to re-enable mouse events */
  enablePointerEvents: {
    pointerEvents: 'auto' // To enable capturing hover events on MenuList
  }
};

const Menu = React.forwardRef(function Menu(props, ref) {
  const {
    autoFocus = true,
    children,
    classes,
    disableAutoFocusItem = false,
    MenuListProps = {},
    onClose,
    onEnter,
    onEntering,
    onEntered,
    open,
    PaperProps = {},
    PopoverClasses,
    setParentOpenSubMenuIndex,
    transitionDuration = 'auto',
    variant = 'selectedMenu',
    ...other
  } = props;
  const theme = useTheme();

  const [openSubMenuIndex, setOpenSubMenuIndex] = React.useState(null);
  const [entering, setEntering] = React.useState(false);
  const isSubMenu = typeof setParentOpenSubMenuIndex !== 'undefined';

  const atLeastOneSubMenu = React.useMemo(() => {
    return (
      isSubMenu ||
      React.Children.toArray(children).some(child => React.isValidElement(child) && child.props && child.props.subMenu)
    );
  }, [children, isSubMenu]);

  const autoFocusItem = autoFocus && !disableAutoFocusItem && open;

  const menuListActionsRef = React.useRef(null);
  const contentAnchorRef = React.useRef(null);

  const getContentAnchorEl = () => contentAnchorRef.current;

  const handleEnter = (element, isAppearing) => {
    if (atLeastOneSubMenu) {
      setEntering(true);
      setOpenSubMenuIndex(null);
    }

    if (onEnter) {
      onEnter(element, isAppearing);
    }
  };

  const handleEntering = (element, isAppearing) => {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
    }

    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };

  const handleEntered = (element, isAppearing) => {
    if (atLeastOneSubMenu) setEntering(false);

    if (onEntered) {
      onEntered(element, isAppearing);
    }
  };

  const handleOnClose = event => {
    event.preventDefault();
    setOpenSubMenuIndex(null);
    if (onClose) {
      onClose(event, `${event.key.toLowerCase()}KeyDown`);
    }
  };

  const handleListKeyDown = event => {
    if (event.key === 'Tab' || event.key === 'Escape') {
      handleOnClose(event);
    }

    if (event.key === 'ArrowLeft' && isSubMenu) {
      // Tell the parent Menu to close the sub Menu that you're in, but
      // don't trigger the sub Menu onClose cascade.
      event.stopPropagation();
      event.preventDefault();
      setParentOpenSubMenuIndex(null);
    }
  };

  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */
  let activeItemIndex = -1;
  // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback
  React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return;
    }

    if (process.env.NODE_ENV !== 'production') {
      if (isFragment(child)) {
        console.error(
          [
            "Material-UI: the Menu component doesn't accept a Fragment as a child.",
            'Consider providing an array instead.'
          ].join('\n')
        );
      }
    }

    if (!child.props.disabled) {
      if ((variant === 'selectedMenu' && child.props.selected) || activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });

  const handleSetOpenSubMenuIndex = value => {
    if (value === null) {
      if (contentAnchorRef.current.parentElement) {
        contentAnchorRef.current.parentElement.children[openSubMenuIndex].focus();
      }
    }
    setOpenSubMenuIndex(value);
  };

  const isValidSubElement = element => {
    const validMuiSubElements = ['Menu', 'MenuItem', 'MenuList', 'Popover', 'Popper'];
    return element && element.type && element.type.muiName && validMuiSubElements.includes(element.type.muiName);
  };

  const items = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return;
    }

    const { subMenu, onMouseMove: onMouseMoveChildProp } = child.props;
    const { anchorEl } = other;

    const hasSubMenu = Boolean(subMenu);
    const parentMenuOpen = Boolean(anchorEl);

    let additionalPropsAdded = false;
    const additionalProps = {};

    // This is the original purpose of this React.Children.map and is basically unchanged.
    if (index === activeItemIndex) {
      additionalPropsAdded = true;

      Object.assign(additionalProps, {
        ref: instance => {
          // #StrictMode ready
          // eslint-disable-next-line react/no-find-dom-node
          contentAnchorRef.current = ReactDOM.findDOMNode(instance);
          setRef(child.ref, instance);
        }
      });
    }

    // If the current Menu item in this map has a subMenu,
    // we need the parent Menu to orchestrate its subMenu
    if (hasSubMenu && parentMenuOpen) {
      additionalPropsAdded = true;

      const handleArrowRightKeydown = event => {
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          setOpenSubMenuIndex(index);
        }
      };

      Object.assign(additionalProps, {
        handleArrowRightKeydown,
        openSubMenu: index === openSubMenuIndex && !entering,
        setParentOpenSubMenuIndex: handleSetOpenSubMenuIndex
      });
    }

    // If there are ANY children with subMenus, then ALL
    // of the children need to know how to close any open subMenus
    // and reset the state that controls which subMenu is open.
    if (atLeastOneSubMenu) {
      additionalPropsAdded = true;

      Object.assign(additionalProps, {
        onMouseMove: e => {
          setOpenSubMenuIndex(index);
          if (onMouseMoveChildProp) {
            onMouseMoveChildProp(e);
          }
        }
      });
      // if it is a menu component, add the handleParentClose control
      if (isValidSubElement(child)) {
        Object.assign(additionalProps, {
          handleParentClose: handleOnClose
        });
      }
    }

    // Using a semaphore instead of inspecting addtionalProps
    // directly to avoid performance hits at scale. Might be
    // fine to just do Object.keys(additionalProps).length > 0,
    // but that seems like iterations we can avoid.
    if (additionalPropsAdded) {
      // eslint-disable-next-line consistent-return
      return React.cloneElement(child, {
        ...additionalProps
      });
    }

    // eslint-disable-next-line consistent-return
    return child;
  });

  return (
    <Popover
      anchorOrigin={theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN}
      classes={PopoverClasses}
      className={clsx({
        [classes.disablePointerEvents]: isSubMenu
      })}
      getContentAnchorEl={getContentAnchorEl}
      onClose={onClose}
      onEnter={handleEnter}
      onEntered={handleEntered}
      onEntering={handleEntering}
      open={open}
      PaperProps={{
        ...PaperProps,
        classes: {
          ...PaperProps.classes,
          root: classes.paper
        },
        className: clsx(PaperProps.className, { [classes.enablePointerEvents]: isSubMenu })
      }}
      ref={ref}
      transformOrigin={theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN}
      transitionDuration={transitionDuration}
      {...other}
    >
      <MenuList
        actions={menuListActionsRef}
        autoFocus={autoFocus && (activeItemIndex === -1 || disableAutoFocusItem)}
        autoFocusItem={autoFocusItem}
        data-mui-test="Menu"
        onKeyDown={handleListKeyDown}
        variant={variant}
        {...MenuListProps}
        className={clsx(classes.list, MenuListProps.className)}
      >
        {items}
      </MenuList>
    </Popover>
  );
});

Menu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The DOM element used to set the position of the menu.
   */
  anchorEl: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element)
  ]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   */
  autoFocus: PropTypes.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   */
  disableAutoFocusItem: PropTypes.bool,
  /**
   * Props applied to the [`MenuList`](/api/menu-list/) element.
   */
  MenuListProps: PropTypes.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: PropTypes.func,
  /**
   * Callback fired before the Menu enters.
   */
  onEnter: PropTypes.func,
  /**
   * Callback fired when the Menu has entered.
   */
  onEntered: PropTypes.func,
  /**
   * Callback fired when the Menu is entering.
   */
  onEntering: PropTypes.func,
  /**
   * Callback fired before the Menu exits.
   */
  onExit: PropTypes.func,
  /**
   * Callback fired when the Menu has exited.
   */
  onExited: PropTypes.func,
  /**
   * Callback fired when the Menu is exiting.
   */
  onExiting: PropTypes.func,
  /**
   * If `true`, the menu is visible.
   */
  open: PropTypes.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: PropTypes.object,
  /**
   * `classes` prop applied to the [`Popover`](/api/popover/) element.
   */
  PopoverClasses: PropTypes.object,
  /**
   * @ignore
   */
  setParentOpenSubMenuIndex: PropTypes.func,
  /**
   * The length of the transition in `ms`, or 'auto'
   */
  transitionDuration: PropTypes.oneOfType([
    PropTypes.oneOf(['auto']),
    PropTypes.number,
    PropTypes.shape({
      appear: PropTypes.number,
      enter: PropTypes.number,
      exit: PropTypes.number
    })
  ]),
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   */
  variant: PropTypes.oneOf(['menu', 'selectedMenu'])
};

export default dataUICMaker(withStyles(styles, { name: 'MuiMenu' })(Menu), 'Menu');
