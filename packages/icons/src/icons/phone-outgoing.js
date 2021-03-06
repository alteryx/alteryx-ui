import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const PhoneOutgoing = React.forwardRef(function PhoneOutgoing(props, ref) {
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
      <path d="M6.34 1.035A3.243 3.243 0 019.583 3.83c.12.907.342 1.798.661 2.652a3.234 3.234 0 01-.734 3.42l-.67.668a15.416 15.416 0 004.573 4.566l.675-.674a3.244 3.244 0 013.417-.729c.859.32 1.75.542 2.67.663a3.238 3.238 0 012.788 3.268v3.09a3.234 3.234 0 01-1.05 2.397 3.256 3.256 0 01-2.504.836 21.705 21.705 0 01-9.452-3.354A21.364 21.364 0 013.38 14.07 21.652 21.652 0 01.013 4.563 3.233 3.233 0 01.847 2.09 3.245 3.245 0 013.24 1.035h3.1zm.011 2.33h-3.11a.908.908 0 00-.905.97 19.319 19.319 0 003.009 8.476 19.056 19.056 0 005.873 5.86 19.362 19.362 0 008.422 2.997.909.909 0 00.989-.91V17.65c.012-.488-.324-.884-.77-.947a14.511 14.511 0 01-3.172-.789.906.906 0 00-.953.2l-1.318 1.314c-.371.371-.945.449-1.402.19a17.748 17.748 0 01-6.66-6.65 1.164 1.164 0 01.189-1.4l1.312-1.31a.906.906 0 00.204-.96 14.415 14.415 0 01-.789-3.153.91.91 0 00-.919-.78zM22.833 0a1.167 1.167 0 01.825.341l.02.02c.018.02.035.038.051.058L23.66.34a1.176 1.176 0 01.28.451c.04.118.061.243.061.373v6.213a1.166 1.166 0 01-2.334 0V3.977l-5.269 5.26a1.168 1.168 0 01-1.65 0 1.164 1.164 0 010-1.647l5.269-5.261H16.61a1.166 1.166 0 110-2.329h6.223z" />
    </svg>
  );
});

PhoneOutgoing.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PhoneOutgoing.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
PhoneOutgoing.name = PhoneOutgoing.render.name || 'PhoneOutgoing';

export default PhoneOutgoing;
