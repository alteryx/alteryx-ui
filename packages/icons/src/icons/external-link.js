import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const ExternalLink = React.forwardRef(function ExternalLink(props, ref) {
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
      <path d="M11.012 4.963a1.111 1.111 0 010 2.222H5.086a.864.864 0 00-.864.864v10.865c0 .477.387.864.864.864h10.865a.864.864 0 00.864-.864v-5.926a1.111 1.111 0 012.222 0v5.926A3.086 3.086 0 0115.951 22H5.086A3.086 3.086 0 012 18.914V8.049a3.086 3.086 0 013.086-3.086h5.926zm9.999-2.956l.038.004a1.104 1.104 0 01.626.314l.016.018c.02.02.038.04.056.062l-.072-.08a1.122 1.122 0 01.267.43c.038.112.058.232.058.356v5.926a1.111 1.111 0 01-2.222 0l-.001-3.244-8.967 8.968A1.111 1.111 0 119.24 13.19l8.967-8.968h-3.243a1.111 1.111 0 110-2.222h5.926c.04 0 .081.002.122.007z" />
    </svg>
  );
});

ExternalLink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ExternalLink.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
ExternalLink.name = ExternalLink.render.name || 'ExternalLink';

export default ExternalLink;
