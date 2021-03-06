import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Sunset = React.forwardRef(function Sunset(props, ref) {
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
      <path d="M22.887 20.775a1.113 1.113 0 110 2.225H1.113a1.113 1.113 0 110-2.225h21.774zM12 11.876a6.059 6.059 0 016.062 6.057 1.113 1.113 0 01-2.227 0A3.833 3.833 0 0012 14.1a3.833 3.833 0 00-3.835 3.832 1.113 1.113 0 01-2.227 0A6.059 6.059 0 0112 11.876zM3.093 16.82a1.113 1.113 0 110 2.225h-1.98a1.113 1.113 0 110-2.225h1.98zm19.794 0a1.113 1.113 0 110 2.225h-1.98a1.113 1.113 0 110-2.225h1.98zm-17.8-7.367l1.406 1.404a1.112 1.112 0 010 1.574 1.114 1.114 0 01-1.575 0l-1.405-1.404a1.112 1.112 0 010-1.574 1.114 1.114 0 011.575 0zm15.4 0a1.112 1.112 0 010 1.574l-1.405 1.404a1.114 1.114 0 01-1.575 0 1.112 1.112 0 010-1.574l1.405-1.404a1.114 1.114 0 011.575 0zM12 1c.615 0 1.113.498 1.113 1.112v4.235l2.058-2.055a1.114 1.114 0 011.575 0 1.112 1.112 0 010 1.573L12.787 9.82l-.024.024a1.12 1.12 0 01-.042.038l.066-.062a1.123 1.123 0 01-.54.299l.03-.007a1.107 1.107 0 01-.038.008l-.117.02-.122.006a1.118 1.118 0 01-.276-.034l.03.007a1.106 1.106 0 01-.541-.299l-3.96-3.955a1.112 1.112 0 010-1.573 1.114 1.114 0 011.576 0l2.057 2.056V2.112c0-.614.5-1.112 1.114-1.112z" />
    </svg>
  );
});

Sunset.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sunset.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Sunset.name = Sunset.render.name || 'Sunset';

export default Sunset;
