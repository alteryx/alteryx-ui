import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const ArrowRight = React.forwardRef(function ArrowRight(props, ref) {
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
      <path d="M19.834 11.417l.007.01.008.014.045.086a1.102 1.102 0 010 .946l-.045.086a1.107 1.107 0 01-.015.024l-.048.071a1.112 1.112 0 01-.11.13l-6.893 6.892a1.108 1.108 0 11-1.566-1.567l5.001-5.002H5.108a1.108 1.108 0 110-2.215h11.109l-5-5.001a1.108 1.108 0 111.566-1.567l6.893 6.893.016.017c.02.02.038.04.055.062l-.071-.08a1.118 1.118 0 01.11.13l.048.071z" />
    </svg>
  );
});

ArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowRight.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
ArrowRight.name = ArrowRight.render.name || 'ArrowRight';

export default ArrowRight;
