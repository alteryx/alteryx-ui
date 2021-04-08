import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Bookmark = React.forwardRef(function Bookmark(props, ref) {
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
      <path d="M17.826 5.086a.864.864 0 00-.864-.864H7.086a.864.864 0 00-.864.864v13.642l5.156-3.683a1.111 1.111 0 011.292 0l5.156 3.683V5.086zm-5.802 12.229L5.757 21.79c-.736.525-1.757 0-1.757-.904v-15.8A3.086 3.086 0 017.086 2h9.876a3.086 3.086 0 013.086 3.086v15.801c0 .904-1.022 1.43-1.757.904l-6.267-4.476z" />
    </svg>
  );
});

Bookmark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bookmark.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Bookmark.name = Bookmark.render.name || 'Bookmark';

export default Bookmark;
