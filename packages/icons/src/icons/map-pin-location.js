import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const MapPinLocation = React.forwardRef(function MapPinLocation(props, ref) {
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
      <path d="M17.251 19.817a30.893 30.893 0 01-4.219 3.704c-.193.14-.335.238-.416.292-.373.25-.86.25-1.232 0-.081-.054-.223-.152-.416-.292a30.893 30.893 0 01-4.219-3.703C3.794 16.691 2 13.395 2 10.02 2 4.486 6.477 0 12 0s10 4.486 10 10.02c0 3.376-1.794 6.672-4.749 9.797zm-4.554 1.163a28.695 28.695 0 002.94-2.694c2.602-2.751 4.14-5.579 4.14-8.265 0-4.305-3.481-7.794-7.777-7.794s-7.778 3.49-7.778 7.794c0 2.686 1.54 5.514 4.14 8.265A28.695 28.695 0 0012 21.518c.218-.162.45-.342.697-.538zM12 14.103a4.078 4.078 0 01-4.074-4.082A4.078 4.078 0 0112 5.938a4.078 4.078 0 014.074 4.083A4.078 4.078 0 0112 14.103zm0-2.227c1.023 0 1.852-.83 1.852-1.855S13.022 8.165 12 8.165c-1.023 0-1.852.83-1.852 1.856 0 1.024.83 1.855 1.852 1.855z" />
    </svg>
  );
});

MapPinLocation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MapPinLocation.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
MapPinLocation.name = MapPinLocation.render.name || 'MapPinLocation';

export default MapPinLocation;
