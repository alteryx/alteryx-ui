import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Volume = React.forwardRef(function Volume(props, ref) {
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
      <path d="M11.205 7.94l4.17-3.695C16.03 3.665 17 4.18 17 5.109v13.782c0 .928-.97 1.444-1.625.864l-4.17-3.695H8c-.552 0-1-.495-1-1.107V9.047c0-.612.448-1.107 1-1.107h3.205zM15 7.414l-2.82 2.498a.941.941 0 01-.624.242H9v3.692h2.556c.227 0 .447.085.624.242L15 16.586V7.414z" />
    </svg>
  );
});

Volume.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Volume.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Volume.name = Volume.render.name || 'Volume';

export default Volume;
