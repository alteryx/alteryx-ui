import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Heart = React.forwardRef(function Heart(props, ref) {
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
      <path d="M23 8.47a6.56 6.56 0 01-1.845 4.576l-8.4 8.632a1.049 1.049 0 01-1.511 0l-8.4-8.632c-2.459-2.527-2.459-6.623 0-9.15a6.177 6.177 0 018.904 0l.252.258.25-.258A6.21 6.21 0 0116.704 2a6.21 6.21 0 014.452 1.896A6.561 6.561 0 0123 8.47zM12 19.349l6.636-6.82 1.008-1.036a4.333 4.333 0 001.218-3.021c0-1.133-.438-2.22-1.218-3.022a4.102 4.102 0 00-2.94-1.252c-1.104 0-2.161.45-2.941 1.252l-1.007 1.035a1.049 1.049 0 01-1.512 0L10.237 5.45a4.08 4.08 0 00-5.881 0c-1.624 1.67-1.624 4.375 0 6.044L12 19.348z" />
    </svg>
  );
});

Heart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Heart.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Heart.name = Heart.render.name || 'Heart';

export default Heart;
