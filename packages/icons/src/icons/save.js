import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Save = React.forwardRef(function Save(props, ref) {
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
      <path d="M15.95 2c.295 0 .578.117.786.325l4.939 4.939c.208.208.325.49.325.785v10.865A3.086 3.086 0 0118.914 22H5.086A3.086 3.086 0 012 18.914V5.086A3.086 3.086 0 015.086 2h10.865zm-.46 2.222H8.172v2.716h6.791a1.111 1.111 0 010 2.222H7.062A1.111 1.111 0 015.95 8.05L5.95 4.221h-.864a.864.864 0 00-.864.864v13.828c0 .477.387.864.864.864l.864-.001v-6.79c0-.613.498-1.11 1.112-1.11h9.876c.614 0 1.111.497 1.111 1.11v6.79h.865a.864.864 0 00.864-.863V8.51L15.49 4.222zm.337 9.877H8.173l-.001 5.678h7.655v-5.678z" />
    </svg>
  );
});

Save.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Save.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Save.name = Save.render.name || 'Save';

export default Save;
