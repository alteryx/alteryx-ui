import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Book = React.forwardRef(function Book(props, ref) {
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
      <path d="M19.89 1c.613 0 1.11.498 1.11 1.112v19.776c0 .614-.497 1.112-1.11 1.112H6.575A3.58 3.58 0 013 19.416V4.584A3.58 3.58 0 016.575 1H19.89zm-1.11 17.056H6.575c-.705 0-1.284.54-1.35 1.229l-.006.13c0 .752.607 1.36 1.356 1.36h12.206l-.001-2.719zm0-14.831H6.576c-.749 0-1.356.608-1.356 1.36v11.513a3.557 3.557 0 011.356-.267H18.78V3.225z" />
    </svg>
  );
});

Book.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Book.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Book.name = Book.render.name || 'Book';

export default Book;
