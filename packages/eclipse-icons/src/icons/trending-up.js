import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const TrendingUp = React.forwardRef(function TrendingUp(props, ref) {
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
      <path d="M23.544 5.213l.017.013a1.115 1.115 0 01.113.098l.012.012c.022.022.042.045.062.069l-.074-.081a1.118 1.118 0 01.191.254c.093.17.138.357.135.544V12a1.11 1.11 0 01-1.113 1.105A1.11 1.11 0 0121.773 12V8.772l-7.501 7.448a1.12 1.12 0 01-1.575 0l-4.16-4.13L1.9 18.675a1.12 1.12 0 01-1.575 0 1.1 1.1 0 010-1.563L7.75 9.745a1.12 1.12 0 011.574 0l4.162 4.13 6.713-6.665h-3.25a1.11 1.11 0 01-1.113-1.105c0-.61.499-1.105 1.113-1.105h5.939a1.128 1.128 0 01.586.165l.071.048z" />
    </svg>
  );
});

TrendingUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TrendingUp.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
TrendingUp.name = TrendingUp.render.name || 'TrendingUp';

export default TrendingUp;
