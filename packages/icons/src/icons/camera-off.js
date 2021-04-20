import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const CameraOff = React.forwardRef(function CameraOff(props, ref) {
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
      <path d="M2.742 1.299l19.96 19.959a1.02 1.02 0 11-1.444 1.443l-1.517-1.516H3.835A2.835 2.835 0 011 18.352V8.37a2.835 2.835 0 012.835-2.835h.257L1.299 2.742A1.02 1.02 0 012.742 1.3zm3.391 6.278H3.835a.794.794 0 00-.794.794v9.98c0 .438.356.793.794.793H17.7l-2.69-2.69a4.65 4.65 0 01-6.556-6.557l-2.321-2.32zm8.589-4.763c.34 0 .66.171.849.455l1.511 2.267h3.083A2.835 2.835 0 0123 8.371v8.474a1.02 1.02 0 01-2.041 0V8.37a.794.794 0 00-.794-.794h-3.629c-.341 0-.66-.17-.85-.454l-1.51-2.267H9.277a1.02 1.02 0 110-2.042h5.444zm-5.297 10.63a2.608 2.608 0 004.134 1.56l-3.655-3.655a2.608 2.608 0 00-.48 2.096z" />
    </svg>
  );
});

CameraOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CameraOff.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
CameraOff.name = CameraOff.render.name || 'CameraOff';

export default CameraOff;
