import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Watch = React.forwardRef(function Watch(props, ref) {
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
      <path d="M14.142 0a3.083 3.083 0 013.077 2.813l.307 3.372A8.038 8.038 0 0120 12c0 2.298-.959 4.37-2.496 5.836l-.305 3.35A3.082 3.082 0 0114.127 24h-4.26a3.083 3.083 0 01-3.076-2.813l-.306-3.362A8.038 8.038 0 014 12c0-2.298.959-4.37 2.496-5.836l.305-3.35A3.083 3.083 0 019.863 0h4.279zm-5.29 19.395l.145 1.59c.04.448.415.79.866.788h4.268a.864.864 0 00.862-.789l.144-1.585a7.94 7.94 0 01-3.137.642 7.939 7.939 0 01-3.148-.646zM12 6.185c-1.4 0-2.683.5-3.684 1.332A5.807 5.807 0 006.216 12c0 3.211 2.59 5.814 5.784 5.814 1.4 0 2.683-.5 3.684-1.33a.917.917 0 01.092-.08l.09-.078A5.813 5.813 0 0017.784 12c0-3.211-2.59-5.814-5.785-5.814zm0 1.733a1.11 1.11 0 011.108 1.113v2.508l1.152 1.158c.433.435.433 1.14 0 1.575a1.104 1.104 0 01-1.566 0l-1.477-1.485a1.116 1.116 0 01-.325-.787V9.03A1.11 1.11 0 0112 7.919zm2.146-5.691H9.864a.864.864 0 00-.857.789l-.144 1.585A7.94 7.94 0 0112 3.959c1.122 0 2.19.232 3.158.65l-.146-1.594a.864.864 0 00-.866-.788z" />
    </svg>
  );
});

Watch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Watch.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Watch.name = Watch.render.name || 'Watch';

export default Watch;
