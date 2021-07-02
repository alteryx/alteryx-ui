import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const RotateRight90 = React.forwardRef(function RotateRight90(props, ref) {
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
      <path
        d="M15,11.25 C15.8284271,11.25 16.5,11.9215729 16.5,12.75 L16.5,21.75 C16.5,22.5784271 15.8284271,23.25 15,23.25 L3,23.25 C2.17157288,23.25 1.5,22.5784271 1.5,21.75 L1.5,12.75 C1.5,11.9215729 2.17157288,11.25 3,11.25 L15,11.25 Z M14.25,13.5 L3.75,13.5 L3.75,21 L14.25,21 L14.25,13.5 Z M13.2462074,7.26021781 C13.6452493,7.65997529 13.6809985,8.28500309 13.3538224,8.72512741 L13.2447822,8.85120743 C12.8450247,9.25024932 12.2199969,9.2859985 11.7798726,8.95882241 L11.6537926,8.84978219 L8.27984291,5.46978219 C7.88088854,5.07011238 7.8450559,4.44524973 8.17204136,4.0051246 L8.28102124,3.87903912 L11.6549709,0.509039119 C12.094568,0.0699566692 12.8068784,0.0703738402 13.2459609,0.509970896 C13.6451267,0.909604584 13.6810698,1.53462127 13.3540302,1.97484705 L13.2450291,2.10096088 L11.6655,3.6765 L13.1916664,3.675 C17.8443443,3.675 21.6365719,7.35902578 21.8104382,11.9691664 L21.8166664,12.3 L21.8166664,15.2072172 C21.8166664,15.8285375 21.3129867,16.3322172 20.6916664,16.3322172 C20.1221227,16.3322172 19.6514299,15.9089864 19.5769363,15.359873 L19.5666664,15.2072172 L19.5666664,12.3 C19.5666664,8.88273811 16.8779059,6.09346989 13.5005409,5.9323514 L13.1916664,5.925 L11.913,5.925 L13.2462074,7.26021781 Z"
        transform="matrix(-1 0 0 1 23.317 0)"
      />
    </svg>
  );
});

RotateRight90.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RotateRight90.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
RotateRight90.name = RotateRight90.render.name || 'RotateRight90';

export default RotateRight90;
