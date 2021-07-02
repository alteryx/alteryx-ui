import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Youtube = React.forwardRef(function Youtube(props, ref) {
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
      <path d="M23.51 6.233l.017.073a29.69 29.69 0 01.472 5.46 29.715 29.715 0 01-.488 5.461 3.868 3.868 0 01-2.712 2.78c-.764.205-2.236.328-4.31.407a123.123 123.123 0 01-5.893.075c-1.05-.013-2.102-.037-3.085-.075-2.074-.079-3.546-.202-4.316-.408C1.891 19.65.87 18.639.473 17.234a29.684 29.684 0 01-.472-5.459c-.01-1.82.149-3.638.488-5.502a3.868 3.868 0 012.712-2.78c.764-.205 2.236-.328 4.31-.407a123.124 123.124 0 015.891-.076c1.05.012 2.101.034 3.083.068 2.066.072 3.535.185 4.329.379a3.861 3.861 0 012.697 2.776zm-3.263-.626c-.548-.134-1.945-.24-3.84-.307a132.567 132.567 0 00-5.782-.066c-1.034.013-2.067.037-3.029.073-1.887.072-3.28.19-3.804.329-.564.16-1 .608-1.127 1.104-.3 1.658-.446 3.34-.438 5.037-.01 1.697.136 3.392.413 4.955.157.55.59.979 1.137 1.128.538.144 1.932.26 3.819.333a120.964 120.964 0 005.78.073c1.033-.013 2.066-.037 3.028-.073 1.887-.072 3.28-.19 3.804-.329.564-.16 1-.608 1.127-1.104.297-1.645.444-3.314.438-4.997a27.504 27.504 0 00-.43-5.022 1.622 1.622 0 00-1.096-1.134zm-9.923 10.36a1.113 1.113 0 01-1.664-.966V8.539c0-.853.921-1.388 1.664-.967l5.69 3.231a1.11 1.11 0 010 1.933l-5.69 3.231zm2.888-4.197l-2.325-1.32v2.64l2.325-1.32z" />
    </svg>
  );
});

Youtube.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Youtube.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Youtube.name = Youtube.render.name || 'Youtube';

export default Youtube;
