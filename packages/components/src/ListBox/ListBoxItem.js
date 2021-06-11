import React, { memo } from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import { Checkbox, Grid, ListItem, RootRef, Tooltip, makeStyles } from '../';
import { HelpCircle } from '@alteryx/icons';

const propTypes = {
  disabled: PropTypes.bool,
  displayName: PropTypes.node,
  divider: PropTypes.bool,
  index: PropTypes.number.isRequired,
  itemRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  ListItemTextComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.func]).isRequired,
  name: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  selected: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.any),
  tooltip: PropTypes.string
};
const defaultProps = {
  disabled: false,
  displayName: null,
  divider: false,
  itemRef: () => {},
  onKeyDown: () => {},
  selected: false,
  style: {},
  tooltip: ''
};

const useStyles = makeStyles(({ spacing }) => ({
  itemTextContainer: {
    flexWrap: 'nowrap'
  },
  itemTextContent: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  item: {
    borderRadius: props => (props.divider ? 0 : spacing(1))
  }
}));

function ListBoxItem({
  index,
  itemRef,
  name,
  selected,
  classes,
  disabled,
  ListItemTextComponent: ListItemText,
  onChange,
  onKeyDown,
  style,
  tooltip,
  displayName,
  divider
}) {
  const onClick = disabled ? undefined : event => onChange(event, !selected);
  const hasToolTip = Boolean(tooltip);
  const baseClasses = useStyles({ divider });
  return (
    <RootRef rootRef={itemRef}>
      <ListItem
        button
        classes={{
          root: classes.item
        }}
        className={baseClasses.item}
        component="li"
        data-test={`listbox-item-${index}`}
        dense
        disabled={disabled}
        disableGutters
        divider={divider}
        onClick={onClick}
        onKeyDown={onKeyDown}
        style={style}
      >
        <Checkbox
          checked={selected}
          classes={{
            root: classes.checkbox
          }}
          disabled={disabled}
          tabIndex={-1}
        />
        <ListItemText
          classes={{
            root: classes.itemText
          }}
          disableTypography
          primary={
            <Grid className={baseClasses.itemTextContainer} container>
              <Grid className={baseClasses.itemTextContent} item title={name}>
                {displayName || name}
              </Grid>
              {hasToolTip && (
                <Grid item>
                  <Tooltip arrow className={classes.icon} title={tooltip}>
                    <HelpCircle size="xsmall" />
                  </Tooltip>
                </Grid>
              )}
            </Grid>
          }
        />
      </ListItem>
    </RootRef>
  );
}

ListBoxItem.propTypes = propTypes;
ListBoxItem.defaultProps = defaultProps;

export default flow([memo])(ListBoxItem);
