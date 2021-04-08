import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const OutputTool = React.forwardRef(function OutputTool(props, ref) {
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
      <path d="M18.559 2a4.493 4.493 0 014.486 4.5v11c0 2.485-2.008 4.5-4.486 4.5H6.784L2 12.046 6.784 2h11.775zm0 2.25H8.228l-3.762 7.792 3.756 7.708H18.56a2.247 2.247 0 002.243-2.25v-11a2.247 2.247 0 00-2.243-2.25z" />
    </svg>
  );
});

OutputTool.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

OutputTool.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
OutputTool.name = OutputTool.render.name || 'OutputTool';

export default OutputTool;
