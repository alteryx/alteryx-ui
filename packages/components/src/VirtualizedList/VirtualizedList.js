import React, { cloneElement, useRef, useEffect, isValidElement, createContext, forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { VariableSizeList } from 'react-window';
import { makeStyles } from '@alteryx/ui';

const useStyles = makeStyles(() => ({
  listbox: {
    '& ul': {
      marginBottom: 0
    }
  }
}));

const LIST_PADDING = 8;
const OuterElementContext = createContext({});

const OuterElementType = forwardRef((props, ref) => {
  const outerProps = useContext(OuterElementContext);
  const { style } = props;
  const newStyle = { ...style, outline: 'none' };
  return <div ref={ref} role="listbox" {...props} {...outerProps} style={newStyle} tabIndex="0" />;
});

OuterElementType.defaultProps = {
  style: {}
};

OuterElementType.propTypes = {
  style: PropTypes.objectOf(PropTypes.any)
};

const renderRow = ({ data, index, style }) => {
  if (!isValidElement(data[index]) && typeof data[index] !== 'object') {
    return <span style={style}>{`${data[index]}`}</span>;
  }

  return cloneElement(data[index], {
    style: {
      ...style,
      top: style.top + LIST_PADDING
    }
  });
};

function useResetCache(data) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

const VirtualizedList = forwardRef((props, ref) => {
  const {
    children,
    itemData: itemDataProp,
    itemCount: itemCountProp,
    itemSize: itemSizeProp,
    renderRow: renderRowProp,
    prevIndex,
    direction,
    ...other
  } = props;

  const DEFAULT_ITEM_HEIGHT = 32;
  const DEFAULT_DISPLAY_COUNT = 8;
  const classes = useStyles();
  const itemData = itemDataProp || React.Children.toArray(children);
  const itemCount = itemCountProp || itemData.length;
  const itemSize = itemSizeProp;
  const getHeight = () => {
    // 32 is our default item height(px), 8 is our default item display amount
    const maxHeight =
      itemSize() * itemCount > DEFAULT_ITEM_HEIGHT * DEFAULT_DISPLAY_COUNT
        ? DEFAULT_ITEM_HEIGHT * DEFAULT_DISPLAY_COUNT
        : itemSize() * itemCount || itemSize();
    return maxHeight;
  };

  const gridRef = useResetCache(itemCount);

  React.useEffect(() => {
    const listbox = document.querySelector('[role="listbox"]');
    if (direction === 'ArrowUp' && prevIndex === 0) {
      // Using the listbox to scroll to the bottom so that a ref isn't removed.if
      if (listbox && listbox.scrollTo) {
        listbox.scrollTo(0, itemCount * itemSize());
        const setLastItemFocused = () => {
          const lastItem = document.querySelector(`[data-option-index="${itemCount - 1}"]`);
          if (lastItem !== null) {
            lastItem.setAttribute('data-focus', 'true');
          }
        };
        const lastFrame = requestAnimationFrame(setLastItemFocused);
        return () => cancelAnimationFrame(lastFrame);
      }
    }

    if (direction === 'ArrowDown' && prevIndex === itemCount - 1) {
      // Using the listbox to scroll to the top so that a ref isn't removed.
      if (listbox && listbox.scrollTo) {
        listbox.scrollTo(0, 0);
        const setFirstItemFocus = () => {
          const firstItem = document.querySelector(`[data-option-index="${0}"]`);
          if (firstItem !== null) {
            firstItem.setAttribute('data-focus', 'true');
          }
        };
        const firstFrame = requestAnimationFrame(setFirstItemFocus);
        return () => cancelAnimationFrame(firstFrame);
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevIndex, direction]);

  return (
    <div className={classes.listbox} ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          height={getHeight()}
          innerElementType="ul"
          itemCount={itemCount}
          itemData={itemData}
          itemSize={itemSize}
          outerElementType={OuterElementType}
          overscanCount={5}
          ref={gridRef}
          width="100%"
          {...other}
        >
          {renderRowProp || renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

VirtualizedList.defaultProps = {
  direction: '',
  itemCount: 0,
  itemData: undefined,
  itemSize: () => 32,
  prevIndex: undefined,
  renderRow
};

VirtualizedList.propTypes = {
  direction: PropTypes.string,
  itemCount: PropTypes.number,
  itemData: PropTypes.arrayOf(PropTypes.any),
  itemSize: PropTypes.func,
  prevIndex: PropTypes.number,
  renderRow: PropTypes.func
};

export default VirtualizedList;
