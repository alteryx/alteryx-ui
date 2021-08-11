import React, { useCallback, useMemo, useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, get } from 'lodash';
import { FixedSizeList as List } from 'react-window';
import { Grid, ListItem, ListItemText } from '../';

import ListBoxItem from './ListBoxItem';

export const ListContainerPropTypes = {
  'aria-describedby': PropTypes.string,
  'aria-label': PropTypes.string,
  'aria-labelledby': PropTypes.string,
  dividers: PropTypes.bool,
  filteredItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  gutter: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      selected: PropTypes.bool
    })
  ).isRequired,
  ListItemTextComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.func]).isRequired,
  noResultsRowHeight: PropTypes.number.isRequired,
  noResultsText: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  role: PropTypes.string,
  virtualizationProps: PropTypes.objectOf(PropTypes.any)
};

const ListContainerDefaultProps = {
  'aria-describedby': undefined,
  'aria-label': undefined,
  'aria-labelledby': undefined,
  dividers: false,
  role: undefined,
  virtualizationProps: {}
};

const ListBoxItemRendererPropTypes = {
  data: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        disabled: PropTypes.bool,
        displayName: PropTypes.node,
        divider: PropTypes.bool,
        name: PropTypes.string,
        selected: PropTypes.bool,
        tooltip: PropTypes.string,
        value: PropTypes.string
      })
    ),
    setItemRef: PropTypes.func.isRequired,
    ListItemTextComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.func]).isRequired,
    handleKeyDown: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    dividers: PropTypes.Boolean,
    gutter: PropTypes.number.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.objectOf(PropTypes.any)
};

const ListBoxItemRendererDefaultProps = {
  style: {}
};

function ListBoxItemRenderer({ classes, data, index, style }) {
  const { dividers: listBoxDividers, items, setItemRef, ListItemTextComponent, handleKeyDown, onSelect, gutter } = data;

  const { disabled, displayName, divider: itemDivider, name, selected, tooltip, value } = items[index];
  const { itemRef, onKeyDown, onChange } = useMemo(
    () => ({
      itemRef: setItemRef(index),
      onKeyDown: handleKeyDown(index),
      onChange: onSelect(value)
    }),
    [index, setItemRef, handleKeyDown, onSelect, value]
  );

  const divider = typeof itemDivider === 'undefined' ? listBoxDividers : itemDivider;

  return (
    <ListBoxItem
      classes={classes}
      disabled={disabled}
      displayName={displayName}
      divider={divider} // Material will style the last child's border to be transparent
      index={index}
      itemRef={itemRef}
      ListItemTextComponent={ListItemTextComponent}
      name={name}
      onChange={onChange}
      onKeyDown={onKeyDown}
      selected={Boolean(selected)}
      style={{
        ...style,
        top: `${parseFloat(style.top) + gutter}px`
      }}
      tooltip={tooltip}
    />
  );
}

ListBoxItemRenderer.propTypes = ListBoxItemRendererPropTypes;
ListBoxItemRenderer.defaultProps = ListBoxItemRendererDefaultProps;

const InnerElementType = gutter =>
  // eslint-disable-next-line react/prop-types
  forwardRef(({ style, ...rest }, ref) => (
    <div
      ref={ref}
      style={{
        ...style,
        // eslint-disable-next-line react/prop-types
        height: `${parseFloat(style.height) + gutter * 2}px`
      }}
      {...rest}
    />
  ));

function ListBoxContainer({
  classes,
  dividers,
  filteredItems,
  gutter,
  items,
  ListItemTextComponent,
  noResultsText,
  onSelect,
  noResultsRowHeight,
  virtualizationProps,
  ...props
}) {
  const itemsRef = useRef({});
  const setItemRef = useCallback(
    index => el => {
      if (el) {
        itemsRef.current[index] = el;
      }
    },
    [itemsRef]
  );

  const handleKeyDown = useCallback(
    index => event => {
      const { key } = event;

      const handleKeys = ['ArrowDown', 'Down', 'ArrowUp', 'Up'];
      const captureKeys = [' '];

      if (handleKeys.includes(key)) {
        // Run focusing onto the next
        event.stopPropagation();
        event.preventDefault();

        const nextIndex = ['ArrowUp', 'Up'].includes(key) ? index - 1 : index + 1;
        const item = get(itemsRef, `current.${nextIndex}`);

        // break if not exist
        if (isEmpty(item)) {
          return;
        }

        item.focus();
      }

      if (captureKeys.includes(key)) {
        event.preventDefault();
      }
    },
    [itemsRef]
  );
  const wrapper = WrappedComponent => wrapperProps => <WrappedComponent classes={classes} {...wrapperProps} />;

  const NewListBoxItemRenderer = wrapper(ListBoxItemRenderer);

  return (
    <Grid item xs>
      {/* react-window currently does not allow putting aria tags on its components, // so an additional wrapping div is
      required. */}
      <div
        aria-describedby={props['aria-describedby']}
        aria-label={props['aria-label']}
        aria-labelledby={props['aria-labelledby']}
        role={props.role}
      >
        {filteredItems.length === 0 ? (
          // Only adding dense and disableGutters here for consistency's sake. They are not necessary or terribly useful here.
          <ListItem dense disableGutters style={{ height: noResultsRowHeight }}>
            <ListItemText
              primary={noResultsText}
              primaryTypographyProps={{ variant: 'body1', className: classes.noResultsTypography }}
            />
          </ListItem>
        ) : (
          <List
            {...virtualizationProps}
            className={classes.container}
            innerElementType={InnerElementType(gutter)} // Handle additional top and bottom gutter on the list
            itemData={{
              items,
              setItemRef,
              ListItemTextComponent,
              handleKeyDown,
              classes: classes.item,
              onSelect,
              dividers,
              gutter
            }}
            style={{
              outline: 'none'
            }}
          >
            {NewListBoxItemRenderer}
          </List>
        )}
      </div>
    </Grid>
  );
}

ListBoxContainer.propTypes = ListContainerPropTypes;
ListBoxContainer.defaultProps = ListContainerDefaultProps;

export default ListBoxContainer;
