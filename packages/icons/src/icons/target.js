import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Target = React.forwardRef(function Target(props, ref) {
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
      <path d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2.225a8.775 8.775 0 100-17.55 8.775 8.775 0 000 17.55zm0-1.73a7.045 7.045 0 110-14.09 7.045 7.045 0 010 14.09zm0-2.225a4.82 4.82 0 100-9.64 4.82 4.82 0 000 9.64zm0-1.73a3.09 3.09 0 110-6.18 3.09 3.09 0 010 6.18zm0-2.225a.865.865 0 100-1.73.865.865 0 000 1.73z" />
    </svg>
  );
});

Target.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Target.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Target.name = Target.render.name || 'Target';

export default Target;
