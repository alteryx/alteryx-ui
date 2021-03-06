import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Procedure = React.forwardRef(function Procedure(props, ref) {
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
      <path d="M17.926 2A4.074 4.074 0 0122 6.074v11.852A4.074 4.074 0 0117.926 22H6.074A4.074 4.074 0 012 17.926V6.074A4.074 4.074 0 016.074 2h11.852zM7.925 4.222h-1.85c-1.024 0-1.853.83-1.853 1.852v11.852c0 1.023.83 1.852 1.852 1.852l1.851-.001V4.222zm9.972 7.1a1.177 1.177 0 01.15.267c.104.266.102.564-.007.828l-.018.042a1.078 1.078 0 01-.205.302l-3.97 3.97a1.111 1.111 0 11-1.57-1.571l2.052-2.055-4.181.001v6.671h7.778c1.023 0 1.852-.828 1.852-1.851V6.074c0-1.023-.83-1.852-1.852-1.852h-7.778v6.661h4.181L12.276 8.83a1.111 1.111 0 111.571-1.571l3.97 3.969.019.022-.038-.04.064.069.035.044z" />
    </svg>
  );
});

Procedure.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Procedure.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Procedure.name = Procedure.render.name || 'Procedure';

export default Procedure;
