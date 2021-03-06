import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Music = React.forwardRef(function Music(props, ref) {
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
      <path d="M22 3.111v13.827a3.086 3.086 0 01-3.086 3.087h-1.976a3.086 3.086 0 110-6.173l2.839-.001V4.423l-9.629 1.605v12.886A3.086 3.086 0 017.062 22H5.086a3.086 3.086 0 110-6.173h2.839V5.087c0-.543.394-1.007.93-1.096l11.851-1.976A1.111 1.111 0 0122 3.111zM7.926 18.05h-2.84a.864.864 0 100 1.729h1.976a.864.864 0 00.864-.864v-.865zm11.852-1.975h-2.84a.864.864 0 100 1.729h1.976a.864.864 0 00.864-.865v-.864z" />
    </svg>
  );
});

Music.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Music.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Music.name = Music.render.name || 'Music';

export default Music;
