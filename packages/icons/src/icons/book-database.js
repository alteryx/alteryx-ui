import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const BookDatabase = React.forwardRef(function BookDatabase(props, ref) {
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
      <path d="M2.726 14.63c.375-.142.781-.219 1.205-.219h2.875a1.113 1.113 0 010 2.226H3.931a1.206 1.206 0 100 2.411h2.875a1.113 1.113 0 110 2.226H3.931A3.431 3.431 0 01.5 17.843V3.93A3.431 3.431 0 013.931.5h12.52c.615 0 1.114.498 1.114 1.113v3.71a1.113 1.113 0 11-2.226 0V2.726H3.93c-.665 0-1.205.54-1.205 1.205V14.63zm18.548-.861c-1.262.515-2.96.783-4.822.783-1.865 0-3.563-.269-4.823-.786v2.351c.198.101.502.208.889.305 1.008.252 2.414.4 3.934.4 1.519 0 2.926-.148 3.934-.4.386-.097.69-.204.888-.305V13.77zm2.219-2.638c.005.041.007.084.007.127v9.034c0 2.09-3.162 3.208-7.048 3.208-3.887 0-7.049-1.118-7.049-3.208v-9.034c0-.094.012-.185.034-.273.25-1.972 3.3-3.038 7.015-3.038 3.807 0 6.926 1.118 7.04 3.184zm-11.864 7.377v1.784c0-.056.287.185.99.433.975.345 2.347.55 3.833.55 1.485 0 2.857-.205 3.833-.55.702-.248.99-.489.99-.433v-1.784c-1.241.372-2.92.54-4.823.54-1.905 0-3.582-.168-4.823-.54zm1.019-6.747c.965.355 2.327.565 3.804.565 1.477 0 2.842-.21 3.811-.566.704-.258.998-.51 1.007-.51-.009-.001-.303-.253-1.007-.511-.969-.356-2.334-.566-3.811-.566-1.477 0-2.839.21-3.804.565-.703.259-.994.51-1.002.512.008 0 .3.252 1.002.51z" />
    </svg>
  );
});

BookDatabase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BookDatabase.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
BookDatabase.name = BookDatabase.render.name || 'BookDatabase';

export default BookDatabase;
