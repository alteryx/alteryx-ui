import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const ArrowUpRight = React.forwardRef(function ArrowUpRight(props, ref) {
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

  console.warn(
    'The icon ArrowUpRight is deprecated and will be removed in a future major release.'
  );

  return (
    <svg
      width={newSize}
      height={newSize}
      viewBox="0 0 24 24"
      {...otherProps}
      fill={color}
      ref={ref}
    >
      <path d="M12.56 4.151l.013.009a1.1 1.1 0 01.01.006l.071.048a1.112 1.112 0 01.13.11l6.892 6.893a1.108 1.108 0 11-1.567 1.566l-5.002-5.002v11.111a1.108 1.108 0 11-2.215 0V7.782l-5.001 5.001a1.108 1.108 0 11-1.567-1.566l6.893-6.893.017-.016c.02-.02.04-.038.062-.055l-.08.071a1.118 1.118 0 01.13-.11l.071-.048a1.1 1.1 0 01.01-.006l.014-.009.086-.045a1.1 1.1 0 01.827-.048 1.169 1.169 0 01.12.048l.085.045z" />
    </svg>
  );
});

ArrowUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpRight.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
ArrowUpRight.name = ArrowUpRight.render.name || 'ArrowUpRight';

export default ArrowUpRight;
