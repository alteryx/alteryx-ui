import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Rss = React.forwardRef(function Rss(props, ref) {
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
      <path d="M4.11 12.123a1.11 1.11 0 010-2.219c5.515 0 9.986 4.471 9.986 9.986a1.11 1.11 0 11-2.22 0 7.767 7.767 0 00-7.766-7.767zm0-6.904A1.11 1.11 0 014.11 3C13.438 3 21 10.562 21 19.89a1.11 1.11 0 11-2.22 0c0-8.102-6.568-14.67-14.67-14.67zM5.096 21a2.096 2.096 0 110-4.192 2.096 2.096 0 010 4.192zm0-2.22a.123.123 0 100 .247.123.123 0 000-.246z" />
    </svg>
  );
});

Rss.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Rss.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Rss.name = Rss.render.name || 'Rss';

export default Rss;
