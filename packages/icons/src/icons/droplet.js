import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Droplet = React.forwardRef(function Droplet(props, ref) {
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
      <path d="M11.996 3.683L7.207 8.486a6.796 6.796 0 00-1.472 7.4A6.78 6.78 0 0012 20.078a6.78 6.78 0 006.265-4.192 6.796 6.796 0 00-1.472-7.4l-4.797-4.803zm.784-2.358l5.582 5.59a9.02 9.02 0 011.953 9.82A9 9 0 0112 22.3a9 9 0 01-8.315-5.564 9.02 9.02 0 011.952-9.82l5.573-5.59a1.109 1.109 0 011.57 0z" />
    </svg>
  );
});

Droplet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Droplet.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Droplet.name = Droplet.render.name || 'Droplet';

export default Droplet;
