import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const XSquare = React.forwardRef(function XSquare(props, ref) {
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
      <path d="M17.926 2A4.074 4.074 0 0122 6.074v11.852A4.074 4.074 0 0117.926 22H6.074A4.074 4.074 0 012 17.926V6.074A4.074 4.074 0 016.074 2h11.852zm0 2.222H6.074c-1.023 0-1.852.83-1.852 1.852v11.852c0 1.023.83 1.852 1.852 1.852h11.852c1.023 0 1.852-.83 1.852-1.852V6.074c0-1.023-.83-1.852-1.852-1.852zm-2.177 4.03a1.111 1.111 0 010 1.57L13.57 12l2.178 2.177a1.111 1.111 0 01-1.572 1.572L12 13.57l-2.177 2.178a1.111 1.111 0 01-1.572-1.572L10.43 12 8.251 9.823A1.111 1.111 0 119.823 8.25L12 10.43l2.177-2.178a1.111 1.111 0 011.572 0z" />
    </svg>
  );
});

XSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

XSquare.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
XSquare.name = XSquare.render.name || 'XSquare';

export default XSquare;
