import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const ArrowUpCircle = React.forwardRef(function ArrowUpCircle(props, ref) {
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
      <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2.225a8.775 8.775 0 100 17.55 8.775 8.775 0 000-17.55zm0 3.708a1.111 1.111 0 01.787.325l3.955 3.955a1.112 1.112 0 01-1.574 1.574l-2.056-2.057v5.225a1.112 1.112 0 01-2.224 0l-.001-5.224-2.055 2.056a1.112 1.112 0 01-1.574-1.574l3.955-3.955.019-.018.047-.042-.066.06a1.122 1.122 0 01.431-.267A1.11 1.11 0 0112 6.933z" />
    </svg>
  );
});

ArrowUpCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpCircle.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
ArrowUpCircle.name = ArrowUpCircle.render.name || 'ArrowUpCircle';

export default ArrowUpCircle;
