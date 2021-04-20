import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const EmptyTool = React.forwardRef(function EmptyTool(props, ref) {
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
      <path d="M17.23 2C19.863 2 22 4.015 22 6.5v11c0 2.485-2.136 4.5-4.77 4.5H1.5l4.455-9.954L1.5 2h15.73zm0 2.25H5.017l3.506 7.8-3.494 7.7h12.2c1.317 0 2.385-1.007 2.385-2.25v-11c0-1.243-1.068-2.25-2.386-2.25zm-.502 4.472a1.1 1.1 0 01.085 1.46l-.085.096-1.698 1.696 1.698 1.698a1.1 1.1 0 01-1.46 1.641l-.096-.085-1.698-1.698-1.696 1.698-.096.085a1.1 1.1 0 01-1.545-1.545l.085-.096 1.697-1.698-1.697-1.696a1.1 1.1 0 011.46-1.641l.096.085 1.696 1.697 1.698-1.697.096-.085a1.1 1.1 0 011.46.085z" />
    </svg>
  );
});

EmptyTool.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EmptyTool.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
EmptyTool.name = EmptyTool.render.name || 'EmptyTool';

export default EmptyTool;
