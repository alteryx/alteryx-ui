import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const ArrowLeftCircle = React.forwardRef(function ArrowLeftCircle(props, ref) {
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
      <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2.225a8.775 8.775 0 100 17.55 8.775 8.775 0 000-17.55zm.787 4.033a1.112 1.112 0 010 1.574l-2.056 2.055h5.224a1.112 1.112 0 010 2.225H10.73l2.057 2.056a1.112 1.112 0 01-1.574 1.574l-3.955-3.955-.018-.019a1.119 1.119 0 01-.042-.047l.06.066a1.122 1.122 0 01-.224-.322 1.109 1.109 0 01.224-1.252l3.955-3.955a1.112 1.112 0 011.574 0z" />
    </svg>
  );
});

ArrowLeftCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowLeftCircle.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
ArrowLeftCircle.name = ArrowLeftCircle.render.name || 'ArrowLeftCircle';

export default ArrowLeftCircle;
