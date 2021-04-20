import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Instagram = React.forwardRef(function Instagram(props, ref) {
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
      <path d="M9.528 1h4.944A8.528 8.528 0 0123 9.528v4.944A8.528 8.528 0 0114.472 23H9.528A8.528 8.528 0 011 14.472V9.528A8.528 8.528 0 019.528 1zm0 2.225a6.303 6.303 0 00-6.303 6.303v4.944a6.303 6.303 0 006.303 6.303h4.944a6.303 6.303 0 006.303-6.303V9.528a6.303 6.303 0 00-6.303-6.303H9.528zm7.527 7.989A5.067 5.067 0 117.03 12.7a5.067 5.067 0 0110.025-1.487zM12.46 9.145a2.843 2.843 0 10-.834 5.624 2.843 2.843 0 00.834-5.624z" />
    </svg>
  );
});

Instagram.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Instagram.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Instagram.name = Instagram.render.name || 'Instagram';

export default Instagram;
