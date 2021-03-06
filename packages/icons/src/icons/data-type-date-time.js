import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const DataTypeDateTime = React.forwardRef(function DataTypeDateTime(
  props,
  ref
) {
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
      <path d="M16 8a8 8 0 110 16 8 8 0 010-16zm-1.83-8c.623 0 1.128.5 1.128 1.117l-.001.868h.879c2.285 0 4.137 1.834 4.137 4.096l.002 1.587c-.627-.338-1.48-.734-2.268-.874V5.89a1.874 1.874 0 00-1.871-1.67l-.88-.001.002.869c0 .617-.505 1.117-1.129 1.117-.623 0-1.128-.5-1.128-1.117l-.001-.87H7.272v.87c0 .617-.505 1.117-1.128 1.117-.623 0-1.128-.5-1.128-1.117v-.87l-.878.001c-1.039 0-1.88.834-1.88 1.862v1.86h8.564c-.916.548-1.9 1.385-2.518 2.234H2.257v7.819c0 1.028.842 1.861 1.88 1.861h2.864c.295.794.999 1.66 1.444 2.234H4.138C1.853 22.09 0 20.255 0 17.994V6.08c0-2.262 1.853-4.095 4.138-4.095l.877-.001v-.868C5.016.5 5.522 0 6.146 0c.622 0 1.128.5 1.128 1.117v.868h5.767v-.868C13.04.5 13.547 0 14.17 0zM16 10.2a5.8 5.8 0 100 11.6 5.8 5.8 0 000-11.6zm-.03 2.1c.594 0 1.084.436 1.161 1.002l.01.157v2.422l1.712 1.355c.505.4.587 1.13.183 1.63a1.18 1.18 0 01-1.503.277l-.143-.097-2.15-1.703a1.156 1.156 0 01-.427-.73l-.013-.175v-2.98c0-.64.524-1.158 1.17-1.158z" />
    </svg>
  );
});

DataTypeDateTime.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DataTypeDateTime.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
DataTypeDateTime.name = DataTypeDateTime.render.name || 'DataTypeDateTime';

export default DataTypeDateTime;
