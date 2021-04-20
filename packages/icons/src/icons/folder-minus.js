import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const FolderMinus = React.forwardRef(function FolderMinus(props, ref) {
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
      <path d="M11.607 4.963h8.303A3.088 3.088 0 0123 8.049v10.865A3.088 3.088 0 0119.91 22H4.09A3.088 3.088 0 011 18.914V5.086A3.088 3.088 0 014.09 2h4.944c.372 0 .719.186.925.495l1.648 2.468zm-3.169-.74H4.09a.865.865 0 00-.865.863v13.828c0 .477.387.864.865.864h15.82a.865.865 0 00.865-.864V8.049a.865.865 0 00-.865-.864h-8.899c-.372 0-.719-.185-.925-.495L8.438 4.222zm.596 10.863a1.112 1.112 0 110-2.222h5.932a1.112 1.112 0 110 2.222H9.034z" />
    </svg>
  );
});

FolderMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FolderMinus.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
FolderMinus.name = FolderMinus.render.name || 'FolderMinus';

export default FolderMinus;
