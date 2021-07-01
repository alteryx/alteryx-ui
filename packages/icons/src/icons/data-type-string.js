import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const DataTypeString = React.forwardRef(function DataTypeString(props, ref) {
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
      <path d="M19.37 12c1.18 0 2.3.403 3.2 1.129a1.1 1.1 0 01-1.276 1.787l-.105-.075a2.9 2.9 0 10-.16 4.638l.175-.133a1.1 1.1 0 111.393 1.703A5.1 5.1 0 1119.37 12zM5.6 7l.053.001a1.04 1.04 0 01.28.051 1.135 1.135 0 01.108.04l.002.001.069.034.04.021c.156.09.292.22.39.383l.066.128 3.5 8 .042.113a1.1 1.1 0 01-2.004.876l-.053-.107-.456-1.041H3.563l-.455 1.041a1.1 1.1 0 01-2.058-.77l.043-.112 3.5-8c.048-.109.111-.207.19-.295l.081-.082a1.1 1.1 0 01.183-.133l.041-.022.069-.034-.054.026-.025.013A1.106 1.106 0 015.6 7zm0 3.845L4.526 13.3h2.148L5.6 10.845zM14.1 2a3.1 3.1 0 012.587 4.808 3.1 3.1 0 01-1.912 5.387l-.175.005h-3.5a1.1 1.1 0 01-1.094-.98L10 11.1v-8A1.1 1.1 0 0111.1 2h3zm.5 6.2l-2.4-.001V10h2.4a.9.9 0 00.113-1.793L14.6 8.2zm-.5-4l-1.9-.001V6h1.9a.9.9 0 00.113-1.793L14.1 4.2z" />
    </svg>
  );
});

DataTypeString.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DataTypeString.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
DataTypeString.name = DataTypeString.render.name || 'DataTypeString';

export default DataTypeString;
