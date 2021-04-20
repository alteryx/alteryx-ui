import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Table = React.forwardRef(function Table(props, ref) {
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
      <path d="M17.926 2A4.074 4.074 0 0122 6.074v11.852A4.074 4.074 0 0117.926 22H6.074A4.074 4.074 0 012 17.926V6.074A4.074 4.074 0 016.074 2h11.852zM7.925 4.222h-1.85c-1.024 0-1.853.83-1.853 1.852v11.852c0 1.023.83 1.852 1.852 1.852l1.851-.001V4.222zm5.926 11.852h-3.703v3.703h3.703v-3.703zm5.926 0h-3.703v3.703h1.852c1.023 0 1.852-.828 1.852-1.851l-.001-1.852zm-5.926-5.926h-3.703v3.703h3.703v-3.703zm5.926 0h-3.703v3.703h3.703v-3.703zm-5.926-5.926h-3.703v3.703h3.703V4.222zm4.075 0h-1.852v3.703h3.703v-1.85c0-1.024-.828-1.853-1.851-1.853z" />
    </svg>
  );
});

Table.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Table.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Table.name = Table.render.name || 'Table';

export default Table;
