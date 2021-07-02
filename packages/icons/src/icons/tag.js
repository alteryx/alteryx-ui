import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Tag = React.forwardRef(function Tag(props, ref) {
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
      <path d="M20.547 12.304L12.45 4.206H4.206v8.243l8.098 8.089a.858.858 0 001.214 0l7.028-7.028a.857.857 0 00.001-1.206zM12.907 2c.292 0 .572.116.779.323l8.423 8.423a3.063 3.063 0 010 4.32l-7.03 7.03a3.063 3.063 0 01-4.335.001l-8.42-8.41a1.103 1.103 0 01-.324-.78V3.102C2 2.493 2.494 2 3.103 2h9.803zM7.881 6.411a1.47 1.47 0 100 2.941 1.47 1.47 0 000-2.94z" />
    </svg>
  );
});

Tag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tag.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Tag.name = Tag.render.name || 'Tag';

export default Tag;
