import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const DataTypeBoolean = React.forwardRef(function DataTypeBoolean(props, ref) {
  const { color, size, ...otherProps } = props;
  const variantSizes = {
    xsmall: 12,
    small: 14,
    medium: 16,
    large: 20,
    xlarge: 28,
    xxlarge: 36,
  };

  const newSize = !isNaN(parseInt(size, 10))
    ? size
    : variantSizes[size] !== undefined
    ? variantSizes[size]
    : variantSizes['medium'];

  return (
    <svg
      width={newSize}
      height={newSize}
      viewBox="0 0 24 24"
      {...otherProps}
      fill={color}
      ref={ref}
    >
      <path d="M21.678 10.932a1.1 1.1 0 01.085 1.46l-.085.096-9.193 9.192-.096.086c-.214.17-.478.248-.737.235a1.1 1.1 0 01-.754-.245l-.104-.097-3.5-3.692-.083-.098a1.1 1.1 0 011.586-1.504l.094.088 2.778 2.931 8.453-8.452.096-.085a1.1 1.1 0 011.46.085zm-8.608-8.61a1.1 1.1 0 01.086 1.46l-.086.096-3.819 3.818 3.82 3.819a1.1 1.1 0 01-1.46 1.64l-.096-.085-3.819-3.819-3.818 3.82-.096.085a1.1 1.1 0 01-1.545-1.545l.085-.096L6.14 7.696 2.322 3.878a1.1 1.1 0 011.46-1.641l.096.085L7.696 6.14l3.819-3.818.096-.085a1.1 1.1 0 011.46.085z" />
    </svg>
  );
});

DataTypeBoolean.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DataTypeBoolean.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
DataTypeBoolean.name = DataTypeBoolean.render.name || 'DataTypeBoolean';

export default DataTypeBoolean;
