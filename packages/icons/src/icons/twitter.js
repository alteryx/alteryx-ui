import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Twitter = React.forwardRef(function Twitter(props, ref) {
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
      <path d="M22.243 2.214c.84-.593 1.967.173 1.723 1.172A8.746 8.746 0 0122 7.132c.012.146.018.293.019.441C22.019 19.4 10.589 25.48.575 19.92c-1.025-.569-.587-2.13.585-2.084a10.41 10.41 0 004.556-.852c-2.093-1.344-3.445-3.102-4.118-5.17-.716-2.2-.612-4.506-.016-6.695.18-.663.364-1.163.495-1.458a1.113 1.113 0 011.928-.188 9.436 9.436 0 006.882 3.974 5.543 5.543 0 013.568-5.081 5.55 5.55 0 015.619.997 9.674 9.674 0 002.169-1.148zM20.099 5.7a1.114 1.114 0 01-1.161-.335 3.321 3.321 0 00-5.825 2.237v.989c0 .603-.48 1.097-1.084 1.112A11.665 11.665 0 013.566 6.38c-.339 1.598-.343 3.234.149 4.745.659 2.024 2.168 3.668 4.78 4.828.797.354.895 1.447.172 1.937a12.632 12.632 0 01-3.195 1.563c7.366 1.678 14.32-3.286 14.32-11.875 0-.207-.02-.413-.059-.616-.07-.364.047-.74.312-1 .112-.112.22-.226.324-.345-.09.03-.18.058-.27.085z" />
    </svg>
  );
});

Twitter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Twitter.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Twitter.name = Twitter.render.name || 'Twitter';

export default Twitter;
