import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const PauseCircle = React.forwardRef(function PauseCircle(props, ref) {
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
      <path d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2.225a8.775 8.775 0 100-17.55 8.775 8.775 0 000 17.55zm-.865-5.809a1.112 1.112 0 11-2.225 0V9.034a1.112 1.112 0 112.225 0v5.932zm3.955 0a1.112 1.112 0 11-2.225 0V9.034a1.112 1.112 0 012.225 0v5.932z" />
    </svg>
  );
});

PauseCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PauseCircle.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
PauseCircle.name = PauseCircle.render.name || 'PauseCircle';

export default PauseCircle;
