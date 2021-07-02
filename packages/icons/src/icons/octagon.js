import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Octagon = React.forwardRef(function Octagon(props, ref) {
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
      <path d="M8.367 3.225L3.225 8.367v7.266l5.142 5.142h7.266l5.142-5.142V8.367l-5.142-5.142H8.367zM7.907 1h8.186c.295 0 .578.117.787.326l5.794 5.794c.209.209.326.492.326.787v8.186c0 .295-.117.578-.326.787l-5.794 5.794a1.112 1.112 0 01-.787.326H7.907c-.295 0-.578-.117-.787-.326L1.326 16.88A1.112 1.112 0 011 16.093V7.907c0-.295.117-.578.326-.787L7.12 1.326c.209-.209.492-.326.787-.326z" />
    </svg>
  );
});

Octagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Octagon.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Octagon.name = Octagon.render.name || 'Octagon';

export default Octagon;
