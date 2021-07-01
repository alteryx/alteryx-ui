import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const InputTool = React.forwardRef(function InputTool(props, ref) {
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
      <path d="M5.018 4.25l3.506 7.8-3.494 7.7h12.2c1.317 0 2.385-1.007 2.385-2.25v-11c0-1.243-1.068-2.25-2.386-2.25H5.02zM1.5 2h15.73C19.863 2 22 4.015 22 6.5v11c0 2.485-2.136 4.5-4.77 4.5H1.5l4.455-9.954L1.5 2z" />
    </svg>
  );
});

InputTool.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InputTool.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
InputTool.name = InputTool.render.name || 'InputTool';

export default InputTool;
