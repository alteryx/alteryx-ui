import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Pause = React.forwardRef(function Pause(props, ref) {
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
      <path d="M7.21 5.22v13.56h1.72V5.22H7.21zM6.106 3h3.93c.61 0 1.105.497 1.105 1.11v15.78c0 .613-.494 1.11-1.105 1.11h-3.93C5.495 21 5 20.503 5 19.89V4.11C5 3.497 5.495 3 6.105 3zm7.86 0h3.93C18.505 3 19 3.497 19 4.11v15.78c0 .613-.495 1.11-1.105 1.11h-3.93c-.61 0-1.105-.497-1.105-1.11V4.11c0-.613.494-1.11 1.105-1.11zm1.105 15.78h1.72V5.22h-1.72v13.56z" />
    </svg>
  );
});

Pause.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pause.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Pause.name = Pause.render.name || 'Pause';

export default Pause;
