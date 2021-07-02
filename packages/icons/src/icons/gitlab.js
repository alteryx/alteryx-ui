import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Gitlab = React.forwardRef(function Gitlab(props, ref) {
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
      <path d="M20.541 10.167L18.788 4.77l-1.746 5.376a1.112 1.112 0 01-1.058.768H7.976c-.481 0-.908-.31-1.057-.767l-1.752-5.38-1.747 5.377-1.145 3.547 9.705 7.054 9.743-7.08-1.182-3.5zm-2.418-7.445a.685.685 0 00.008.025l-.008-.025zm3.769 10.822l.012-.008a.28.28 0 00-.012.008zm-9.258 9.477c-.39.283-.918.283-1.308 0L.793 15.365a1.94 1.94 0 01-.696-2.167L1.303 9.46l2.433-7.482c.086-.223.223-.422.396-.578.587-.537 1.486-.537 2.096.021.187.18.325.406.394.633l2.162 6.637h6.392l2.183-6.713c.086-.223.223-.422.396-.578.587-.537 1.486-.537 2.096.021.187.18.325.406.394.634l2.408 7.412 1.27 3.762a1.943 1.943 0 01-.78 2.154l-10.509 7.638z" />
    </svg>
  );
});

Gitlab.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Gitlab.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Gitlab.name = Gitlab.render.name || 'Gitlab';

export default Gitlab;
