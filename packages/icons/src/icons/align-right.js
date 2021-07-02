import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const AlignRight = React.forwardRef(function AlignRight(props, ref) {
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
      <path d="M20.9 17.9a1.1 1.1 0 01.12 2.194l-.12.006H7.1a1.1 1.1 0 01-.12-2.194l.12-.006h13.8zm0-4.75a1.1 1.1 0 01.12 2.194l-.12.006H3.1a1.1 1.1 0 01-.12-2.194l.12-.006h17.8zm0-4.5a1.1 1.1 0 01.12 2.194l-.12.006H7.1a1.1 1.1 0 01-.12-2.194l.12-.006h13.8zm0-4.75a1.1 1.1 0 01.12 2.194l-.12.006H3.1a1.1 1.1 0 01-.12-2.194L3.1 3.9h17.8z" />
    </svg>
  );
});

AlignRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AlignRight.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
AlignRight.name = AlignRight.render.name || 'AlignRight';

export default AlignRight;
