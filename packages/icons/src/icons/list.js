import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const List = React.forwardRef(function List(props, ref) {
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
      <path d="M3.429 17.6c.789 0 1.428.627 1.428 1.4 0 .773-.64 1.4-1.428 1.4C2.639 20.4 2 19.773 2 19c0-.773.64-1.4 1.429-1.4zm17.471.3a1.1 1.1 0 01.12 2.194l-.12.006H8.814a1.1 1.1 0 01-.12-2.194l.12-.006H20.9zM3.429 10.6c.789 0 1.428.627 1.428 1.4 0 .773-.64 1.4-1.428 1.4C2.639 13.4 2 12.773 2 12c0-.773.64-1.4 1.429-1.4zm17.471.3a1.1 1.1 0 01.12 2.194l-.12.006H8.814a1.1 1.1 0 01-.12-2.194l.12-.006H20.9zM3.429 3.65c.789 0 1.428.627 1.428 1.4 0 .773-.64 1.4-1.428 1.4C2.639 6.45 2 5.823 2 5.05c0-.773.64-1.4 1.429-1.4zM20.9 3.9a1.1 1.1 0 01.12 2.194l-.12.006H8.814a1.1 1.1 0 01-.12-2.194l.12-.006H20.9z" />
    </svg>
  );
});

List.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

List.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
List.name = List.render.name || 'List';

export default List;
