import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Globe = React.forwardRef(function Globe(props, ref) {
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
      <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zM6.995 13.112h-3.7a8.785 8.785 0 006.174 7.293 16.276 16.276 0 01-2.474-7.293zm13.71 0h-3.697a16.241 16.241 0 01-2.477 7.293 8.785 8.785 0 006.174-7.292zm-5.929 0h-5.55A14.016 14.016 0 0012 20.153a14.004 14.004 0 002.776-7.04zM9.47 3.595l-.196.062a8.785 8.785 0 00-5.978 7.23h3.697A16.241 16.241 0 019.47 3.595zM12 3.85a14.004 14.004 0 00-2.776 7.039h5.55A14.016 14.016 0 0012 3.847zm2.53-.254l.01.014a16.278 16.278 0 012.465 7.279h3.7a8.785 8.785 0 00-6.174-7.293z" />
    </svg>
  );
});

Globe.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Globe.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Globe.name = Globe.render.name || 'Globe';

export default Globe;
