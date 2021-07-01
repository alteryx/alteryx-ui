import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Mic = React.forwardRef(function Mic(props, ref) {
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
      <path d="M18.892 8.907A1.11 1.11 0 0120 10.021V12c0 4.063-2.998 7.422-6.892 7.965l-.001 1.808h2.831a1.11 1.11 0 011.108 1.114A1.11 1.11 0 0115.938 24H8.062a1.11 1.11 0 01-1.108-1.113 1.11 1.11 0 011.108-1.114h2.83v-1.808C6.998 19.422 4 16.063 4 12v-1.98a1.11 1.11 0 011.108-1.113 1.11 1.11 0 011.107 1.114V12c0 3.211 2.59 5.814 5.785 5.814 3.195 0 5.785-2.603 5.785-5.814v-1.98a1.11 1.11 0 011.107-1.113zM12 0c2.243 0 4.062 1.828 4.062 4.082V12c0 2.255-1.819 4.082-4.062 4.082-2.243 0-4.062-1.827-4.062-4.082V4.082C7.938 1.828 9.757 0 12 0zm0 2.227a1.85 1.85 0 00-1.846 1.855V12A1.85 1.85 0 0012 13.856 1.85 1.85 0 0013.846 12V4.082A1.85 1.85 0 0012 2.227z" />
    </svg>
  );
});

Mic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mic.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Mic.name = Mic.render.name || 'Mic';

export default Mic;
