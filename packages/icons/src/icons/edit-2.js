import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Edit2 = React.forwardRef(function Edit2(props, ref) {
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
      <path d="M15.95 4.682L4.223 16.411v3.367H7.59L19.318 8.049 15.95 4.682zm.786-2.357l4.939 4.939a1.111 1.111 0 010 1.571l-12.84 12.84A1.111 1.111 0 018.05 22H3.111A1.111 1.111 0 012 20.889V15.95c0-.295.117-.578.325-.786l12.84-12.84a1.111 1.111 0 011.571 0z" />
    </svg>
  );
});

Edit2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Edit2.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Edit2.name = Edit2.render.name || 'Edit2';

export default Edit2;
