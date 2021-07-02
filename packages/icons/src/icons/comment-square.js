import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const CommentSquare = React.forwardRef(function CommentSquare(props, ref) {
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
      <path d="M4.222 18.206l2.054-2.053c.208-.209.491-.326.786-.326h11.852a.864.864 0 00.864-.864V5.086a.864.864 0 00-.864-.864H5.086a.864.864 0 00-.864.864v13.12zm3.3-.157l-3.625 3.626c-.7.7-1.897.204-1.897-.786V5.086A3.086 3.086 0 015.086 2h13.828A3.086 3.086 0 0122 5.086v9.877a3.086 3.086 0 01-3.086 3.086H7.522z" />
    </svg>
  );
});

CommentSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CommentSquare.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
CommentSquare.name = CommentSquare.render.name || 'CommentSquare';

export default CommentSquare;
