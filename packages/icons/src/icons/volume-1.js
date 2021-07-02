import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Volume1 = React.forwardRef(function Volume1(props, ref) {
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
      <path d="M8.66 7.94l4.624-3.695c.725-.58 1.8-.064 1.8.864v13.782c0 .928-1.075 1.444-1.8.864L8.66 16.06H5.108A1.108 1.108 0 014 14.953V9.047c0-.612.496-1.107 1.108-1.107h3.553zm4.208-.526L9.742 9.912a1.11 1.11 0 01-.692.242H6.217v3.692H9.05c.251 0 .495.085.692.242l3.126 2.498V7.414zm4.797 1.884a1.107 1.107 0 010-1.566 1.11 1.11 0 011.568 0 6.025 6.025 0 010 8.526 1.11 1.11 0 01-1.567 0 1.107 1.107 0 010-1.566 3.812 3.812 0 000-5.394z" />
    </svg>
  );
});

Volume1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Volume1.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Volume1.name = Volume1.render.name || 'Volume1';

export default Volume1;
