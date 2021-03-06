import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Share2 = React.forwardRef(function Share2(props, ref) {
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
      <path d="M17.926 1A4.076 4.076 0 0122 5.079a4.076 4.076 0 01-4.074 4.078 4.058 4.058 0 01-2.826-1.14l-5.08 2.966a4.09 4.09 0 010 2.033l5.083 2.965a4.058 4.058 0 012.823-1.138A4.076 4.076 0 0122 18.92 4.076 4.076 0 0117.926 23a4.076 4.076 0 01-3.945-5.1L8.9 14.938a4.058 4.058 0 01-2.827 1.14A4.076 4.076 0 012 12a4.076 4.076 0 014.074-4.079c1.098 0 2.094.435 2.826 1.141l5.08-2.967A4.076 4.076 0 0117.926 1zm0 16.067c-1.023 0-1.852.83-1.852 1.854a1.853 1.853 0 101.852-1.854zm-11.852-6.92a1.853 1.853 0 10.002 3.71 1.853 1.853 0 00-.002-3.71zm11.852-6.922c-1.023 0-1.852.83-1.852 1.854a1.853 1.853 0 101.852-1.854z" />
    </svg>
  );
});

Share2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Share2.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Share2.name = Share2.render.name || 'Share2';

export default Share2;
