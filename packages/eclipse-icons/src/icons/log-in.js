import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const LogIn = React.forwardRef(function LogIn(props, ref) {
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
      <path d="M19.605 1A3.395 3.395 0 0123 4.395v15.21A3.395 3.395 0 0119.605 23h-4.346a1.222 1.222 0 110-2.444h4.346a.95.95 0 00.95-.951V4.395a.95.95 0 00-.95-.95h-4.346a1.222 1.222 0 110-2.445h4.346zM10.69 5.704l5.433 5.432c.029.029.056.06.082.091l-.082-.091a1.233 1.233 0 01.347.707 1.16 1.16 0 01.01.157v.042l-.002.042.002-.084a1.234 1.234 0 01-.245.735 1.07 1.07 0 01-.03.037l-.004.005-.078.087-5.433 5.432a1.222 1.222 0 11-1.728-1.728l3.345-3.346H2.222a1.222 1.222 0 110-2.444l10.085-.001-3.344-3.345a1.222 1.222 0 011.728-1.728z" />
    </svg>
  );
});

LogIn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LogIn.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
LogIn.name = LogIn.render.name || 'LogIn';

export default LogIn;
