import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const MaximizeVertical = React.forwardRef(function MaximizeVertical(
  props,
  ref
) {
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
      <path d="M12 10.345c-.61 0-1.103-.489-1.103-1.093V3.731L7.884 6.716a1.11 1.11 0 01-1.56 0 1.086 1.086 0 010-1.546L11.294.252l.101-.074.156-.084.118-.044.176-.04L12 0l.106.005.147.024.112.032.105.043.155.088.104.08 4.948 4.898c.43.427.43 1.119 0 1.546a1.11 1.11 0 01-1.56 0l-3.012-2.983-.002 5.52c0 .603-.494 1.092-1.103 1.092zm5.677 8.485l-4.897 4.85-.075.068-.101.074-.156.084-.118.044-.176.04L12 24l-.106-.005-.147-.024-.112-.032-.105-.043-.155-.088-.155-.128-4.897-4.85a1.086 1.086 0 010-1.546 1.11 1.11 0 011.56 0l3.014 2.985v-5.521c0-.604.494-1.093 1.103-1.093.61 0 1.103.489 1.103 1.093l.002 5.52 3.011-2.984a1.11 1.11 0 011.56 0c.432.427.432 1.12 0 1.546z" />
    </svg>
  );
});

MaximizeVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MaximizeVertical.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
MaximizeVertical.name = MaximizeVertical.render.name || 'MaximizeVertical';

export default MaximizeVertical;
