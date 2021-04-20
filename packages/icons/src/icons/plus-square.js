import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const PlusSquare = React.forwardRef(function PlusSquare(props, ref) {
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
      <path d="M17.926 2A4.074 4.074 0 0122 6.074v11.852A4.074 4.074 0 0117.926 22H6.074A4.074 4.074 0 012 17.926V6.074A4.074 4.074 0 016.074 2h11.852zm0 2.222H6.074c-1.023 0-1.852.83-1.852 1.852v11.852c0 1.023.83 1.852 1.852 1.852h11.852c1.023 0 1.852-.83 1.852-1.852V6.074c0-1.023-.83-1.852-1.852-1.852zM12 6.938c.614 0 1.111.498 1.111 1.111v2.839h2.84a1.111 1.111 0 010 2.223h-2.84v2.84a1.111 1.111 0 01-2.222 0l-.001-2.84H8.049a1.111 1.111 0 110-2.222l2.839-.001V8.049c0-.613.498-1.11 1.112-1.11z" />
    </svg>
  );
});

PlusSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PlusSquare.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
PlusSquare.name = PlusSquare.render.name || 'PlusSquare';

export default PlusSquare;
