import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Search = React.forwardRef(function Search(props, ref) {
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
      <path d="M11.012 2a9.012 9.012 0 017.11 14.55l3.553 3.553a1.111 1.111 0 11-1.572 1.572l-3.552-3.552A9.012 9.012 0 1111.013 2zm0 2.222a6.79 6.79 0 104.707 11.685 1.037 1.037 0 01.188-.189 6.79 6.79 0 00-4.894-11.496z" />
    </svg>
  );
});

Search.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Search.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Search.name = Search.render.name || 'Search';

export default Search;
