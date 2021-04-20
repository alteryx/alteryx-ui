import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Type = React.forwardRef(function Type(props, ref) {
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
      <path d="M19.89 3c.613 0 1.11.497 1.11 1.11v2.958a1.11 1.11 0 11-2.22 0V5.22H13.11V18.78h1.85a1.11 1.11 0 010 2.22H12l-.017-.001L9.041 21a1.11 1.11 0 110-2.22h1.849V5.219H5.22v1.85a1.11 1.11 0 11-2.22 0v-2.96C3 3.498 3.497 3 4.11 3h15.78z" />
    </svg>
  );
});

Type.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Type.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Type.name = Type.render.name || 'Type';

export default Type;
