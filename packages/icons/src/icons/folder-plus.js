import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const FolderPlus = React.forwardRef(function FolderPlus(props, ref) {
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
      <path d="M9.034 2c.372 0 .719.186.925.495l1.648 2.468h8.303A3.088 3.088 0 0123 8.049v10.865A3.088 3.088 0 0119.91 22H4.09A3.088 3.088 0 011 18.914V5.086A3.088 3.088 0 014.09 2h4.944zm-.596 2.222H4.09a.865.865 0 00-.865.864v13.828c0 .477.387.864.865.864h15.82a.865.865 0 00.865-.864V8.049a.865.865 0 00-.865-.864h-8.899c-.372 0-.719-.185-.925-.495L8.438 4.222zM12 9.902c.614 0 1.112.497 1.112 1.11v1.852h1.854a1.112 1.112 0 110 2.222h-1.854v1.852a1.112 1.112 0 01-2.224 0l-.001-1.852H9.034a1.112 1.112 0 110-2.222h1.853v-1.852c0-.613.499-1.11 1.113-1.11z" />
    </svg>
  );
});

FolderPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FolderPlus.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
FolderPlus.name = FolderPlus.render.name || 'FolderPlus';

export default FolderPlus;
