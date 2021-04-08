import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Hash = React.forwardRef(function Hash(props, ref) {
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
      <path d="M16.068 2.007a1.11 1.11 0 01.98 1.227l-.521 4.691 3.363.001a1.11 1.11 0 010 2.222h-3.609l-.411 3.703h4.02a1.11 1.11 0 010 2.223h-4.267l-.548 4.938a1.11 1.11 0 11-2.205-.246l.52-4.692H9.705l-.547 4.938a1.11 1.11 0 11-2.206-.246l.52-4.692H4.11a1.11 1.11 0 010-2.222l3.608-.001.411-3.703h-4.02a1.11 1.11 0 010-2.222l4.267-.001.549-4.937a1.11 1.11 0 112.205.246l-.521 4.691h3.685l.548-4.937a1.11 1.11 0 011.226-.981zM13.636 13.85l.411-3.703h-3.684l-.411 3.703h3.684z" />
    </svg>
  );
});

Hash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Hash.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Hash.name = Hash.render.name || 'Hash';

export default Hash;
