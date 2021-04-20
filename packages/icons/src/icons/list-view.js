import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const ListView = React.forwardRef(function ListView(props, ref) {
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
      <path d="M3.429 17.5c.789 0 1.428.627 1.428 1.4 0 .773-.64 1.4-1.428 1.4-.79 0-1.429-.627-1.429-1.4 0-.773.64-1.4 1.429-1.4zm17.471.3a1.1 1.1 0 01.12 2.194L20.9 20H7.416a1.1 1.1 0 01-.12-2.194l.12-.006H20.9zM3.429 12.75c.789 0 1.428.627 1.428 1.4 0 .773-.64 1.4-1.428 1.4-.79 0-1.429-.627-1.429-1.4 0-.773.64-1.4 1.429-1.4zm17.471.3a1.1 1.1 0 01.12 2.194l-.12.006H7.416a1.1 1.1 0 01-.12-2.194l.12-.006H20.9zM3.429 8.25c.789 0 1.428.627 1.428 1.4 0 .773-.64 1.4-1.428 1.4-.79 0-1.429-.627-1.429-1.4 0-.773.64-1.4 1.429-1.4zm17.471.3a1.1 1.1 0 01.12 2.194l-.12.006H7.416a1.1 1.1 0 01-.12-2.194l.12-.006H20.9zM3.429 3.5c.789 0 1.428.627 1.428 1.4 0 .773-.64 1.4-1.428 1.4C2.639 6.3 2 5.673 2 4.9c0-.773.64-1.4 1.429-1.4zm17.471.3a1.1 1.1 0 01.12 2.194L20.9 6H7.416a1.1 1.1 0 01-.12-2.194l.12-.006H20.9z" />
    </svg>
  );
});

ListView.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ListView.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
ListView.name = ListView.render.name || 'ListView';

export default ListView;
