import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const RotateCcw = React.forwardRef(function RotateCcw(props, ref) {
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
      <path d="M4.948 8.916h2.97a1.11 1.11 0 010 2.223H2.11A1.11 1.11 0 011 10.028V4.056a1.11 1.11 0 112.221 0v3.458C6.502 3.866 9.754 2 13.004 2 18.524 2 23 6.477 23 12s-4.475 10-9.996 10a9.998 9.998 0 01-9.312-6.359 1.111 1.111 0 012.069-.81A7.777 7.777 0 0020.779 12a7.776 7.776 0 00-7.775-7.778c-2.503 0-5.196 1.538-8.056 4.694z" />
    </svg>
  );
});

RotateCcw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RotateCcw.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
RotateCcw.name = RotateCcw.render.name || 'RotateCcw';

export default RotateCcw;
