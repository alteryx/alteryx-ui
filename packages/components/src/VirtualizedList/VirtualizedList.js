import React, { cloneElement, useRef, useEffect, isValidElement, createContext, forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { VariableSizeList } from 'react-window';

const LIST_PADDING = 8;
const OuterElementContext = createContext({});

const OuterElementType = forwardRef((props, ref) => {
  const outerProps = useContext(OuterElementContext);
  const { style } = props;
  const newStyle = { ...style, outline: 'none' };
  return <div ref={ref} {...props} {...outerProps} style={newStyle} />;
});

OuterElementType.defaultProps = {
  style: {}
};

OuterElementType.propTypes = {
  style: PropTypes.objectOf(PropTypes.any)
};

function renderRow(props) {
  const { data, index, style } = props;

  if (!isValidElement(data[index]) && typeof data[index] !== 'object') {
    return <span style={style}>{`${data[index]}`}</span>;
  }

  return cloneElement(data[index], {
    style: {
      ...style,
      top: style.top + LIST_PADDING
    }
  });
}

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
    ...other
  } = props;
  const itemData = itemDataProp || React.Children.toArray(children);
  const itemCount = itemCountProp || itemData.length;
  const itemSize = itemSizeProp;
  const getHeight = () => {
    // 32 is our default item height(px), 8 is our default item display amount
    const maxHeight = itemSize() * itemCount > 32 * 8 ? 32 * 8 : itemSize() * itemCount || itemSize();
    return maxHeight;
  };

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
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
  itemCount: 0,
  itemData: undefined,
  itemSize: () => 32,
  renderRow
};

VirtualizedList.propTypes = {
  itemCount: PropTypes.number,
  itemData: PropTypes.arrayOf(PropTypes.any),
  itemSize: PropTypes.func,
  renderRow: PropTypes.func
};

export default VirtualizedList;
