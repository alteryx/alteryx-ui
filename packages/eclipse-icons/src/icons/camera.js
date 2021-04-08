import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Camera = React.forwardRef(function Camera(props, ref) {
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
      <path d="M9.825 5.041L8.313 7.308a1.02 1.02 0 01-.85.455H3.836a.794.794 0 00-.794.794v9.98c0 .437.356.793.794.793h16.33a.794.794 0 00.794-.794v-9.98a.794.794 0 00-.794-.793h-3.629c-.341 0-.66-.17-.85-.455l-1.51-2.267H9.824zm7.257.68h3.083A2.835 2.835 0 0123 8.558v9.98a2.835 2.835 0 01-2.835 2.834H3.835A2.835 2.835 0 011 18.536v-9.98a2.835 2.835 0 012.835-2.834h3.083l1.511-2.268A1.02 1.02 0 019.28 3h5.443c.34 0 .66.17.849.454l1.511 2.268zM12 17.743a4.65 4.65 0 110-9.299 4.65 4.65 0 010 9.3zm0-2.041a2.608 2.608 0 100-5.216 2.608 2.608 0 000 5.216z" />
    </svg>
  );
});

Camera.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Camera.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Camera.name = Camera.render.name || 'Camera';

export default Camera;
