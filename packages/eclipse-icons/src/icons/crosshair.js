import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Crosshair = React.forwardRef(function Crosshair(props, ref) {
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
      <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm1.113 2.295v2.772a1.112 1.112 0 01-2.225 0V3.295a8.78 8.78 0 00-7.593 7.592h2.772a1.112 1.112 0 010 2.225H3.295a8.78 8.78 0 007.592 7.593v-2.772a1.112 1.112 0 012.225 0v2.772a8.78 8.78 0 007.593-7.592h-2.772a1.112 1.112 0 010-2.225h2.772a8.78 8.78 0 00-7.592-7.593z" />
    </svg>
  );
});

Crosshair.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Crosshair.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Crosshair.name = Crosshair.render.name || 'Crosshair';

export default Crosshair;
