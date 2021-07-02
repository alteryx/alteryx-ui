import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Thermometer = React.forwardRef(function Thermometer(props, ref) {
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
      <path d="M17.763 20.05C17.06 22.395 14.923 24 12.5 24c-2.422 0-4.56-1.604-5.263-3.95a5.61 5.61 0 011.719-5.873V3.587C8.956 1.607 10.543 0 12.5 0s3.544 1.606 3.544 3.587v10.59a5.61 5.61 0 011.719 5.872zm-3.919-5.32V3.588c0-.751-.602-1.36-1.344-1.36-.742 0-1.344.609-1.344 1.36v11.144c0 .371-.184.719-.49.925a3.36 3.36 0 00-1.324 3.747 3.305 3.305 0 003.158 2.37 3.305 3.305 0 003.158-2.37 3.36 3.36 0 00-1.325-3.747 1.117 1.117 0 01-.489-.925z" />
    </svg>
  );
});

Thermometer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Thermometer.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Thermometer.name = Thermometer.render.name || 'Thermometer';

export default Thermometer;
