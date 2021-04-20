import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Connection = React.forwardRef(function Connection(props, ref) {
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
      <path d="M20.9 2a1.1 1.1 0 011.094.98L22 3.1V14a1.1 1.1 0 01-2.194.12L19.8 14l-.001-8.245-9.522 9.523c.362.609.583 1.311.618 2.063l.005.209a4.45 4.45 0 11-2.178-3.827L18.244 4.2H10a1.1 1.1 0 01-.12-2.194L10 2h10.9zM6.45 15.3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
    </svg>
  );
});

Connection.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Connection.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Connection.name = Connection.render.name || 'Connection';

export default Connection;
