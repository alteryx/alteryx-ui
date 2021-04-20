import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const ArrowRightCircle = React.forwardRef(function ArrowRightCircle(
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
      <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2.225a8.775 8.775 0 100 17.55 8.775 8.775 0 000-17.55zm.787 4.033l3.955 3.955.015.016.045.05-.06-.066a1.122 1.122 0 01.267.431 1.11 1.11 0 01-.267 1.143l-3.955 3.955a1.112 1.112 0 01-1.574-1.574l2.056-2.056H8.045a1.112 1.112 0 010-2.224l5.223-.001-2.055-2.055a1.112 1.112 0 011.574-1.574z" />
    </svg>
  );
});

ArrowRightCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowRightCircle.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
ArrowRightCircle.name = ArrowRightCircle.render.name || 'ArrowRightCircle';

export default ArrowRightCircle;
