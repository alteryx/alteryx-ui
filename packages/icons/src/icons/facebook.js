import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Facebook = React.forwardRef(function Facebook(props, ref) {
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
      <path d="M8.943 8.91V7.056c0-3.345 2.69-6.056 6.01-6.056h2.943c.61 0 1.103.498 1.103 1.112v3.955c0 .615-.494 1.113-1.103 1.113h-2.82v1.73h2.82c.718 0 1.245.68 1.07 1.382l-.98 3.955a1.105 1.105 0 01-1.071.843h-1.84v6.798c0 .614-.494 1.112-1.104 1.112h-3.924c-.61 0-1.104-.498-1.104-1.112V15.09h-1.84C6.495 15.09 6 14.592 6 13.978v-3.956c0-.614.494-1.112 1.104-1.112h1.84zm6.01-5.685c-2.1 0-3.802 1.715-3.802 3.831v2.966c0 .615-.494 1.113-1.104 1.113h-1.84v1.73h1.84c.61 0 1.104.498 1.104 1.113v6.797h1.717v-6.797c0-.615.494-1.113 1.103-1.113h2.082l.43-1.73H13.97c-.61 0-1.103-.498-1.103-1.113V7.056c0-1.16.933-2.1 2.084-2.1h1.84V3.224h-1.84z" />
    </svg>
  );
});

Facebook.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Facebook.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Facebook.name = Facebook.render.name || 'Facebook';

export default Facebook;
