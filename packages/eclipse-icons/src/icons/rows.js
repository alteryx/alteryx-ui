import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Rows = React.forwardRef(function Rows(props, ref) {
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
      <path d="M22 17.926A4.074 4.074 0 0117.926 22H6.074A4.074 4.074 0 012 17.926V6.074A4.074 4.074 0 016.074 2h11.852A4.074 4.074 0 0122 6.074v11.852zm-2.222-10V6.073c0-1.023-.83-1.852-1.852-1.852H6.074c-1.023 0-1.852.83-1.852 1.852v1.851h15.556zm0 5.926v-3.705H4.223v3.705h15.555zm0 4.074v-1.852H4.223v1.852c0 1.023.828 1.852 1.851 1.852h11.852c1.023 0 1.852-.83 1.852-1.852z" />
    </svg>
  );
});

Rows.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Rows.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Rows.name = Rows.render.name || 'Rows';

export default Rows;
