import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const FolderMove = React.forwardRef(function FolderMove(props, ref) {
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
      <path d="M9.034 2c.372 0 .719.186.925.495l1.648 2.468h8.303A3.088 3.088 0 0123 8.049v10.865A3.088 3.088 0 0119.91 22H4.09A3.088 3.088 0 011 18.914V5.086A3.088 3.088 0 014.09 2h4.944zm-.596 2.222H4.09a.865.865 0 00-.865.864v13.828c0 .477.387.864.865.864h15.82a.865.865 0 00.865-.864V8.049a.865.865 0 00-.865-.864h-8.899c-.372 0-.719-.185-.925-.495L8.438 4.222zM16.1 14.564l-.012.019c-.064.118-.147.23-.248.33l-2.397 2.395c-.497.496-1.251.546-1.686.112-.434-.434-.384-1.187.113-1.683l.65-.651H9.034a1.112 1.112 0 110-2.222h3.452l-.617-.617c-.497-.496-.547-1.25-.113-1.684.435-.433 1.19-.383 1.686.113l2.397 2.394c.102.102.185.214.249.333.11.173.162.376.159.585.003.21-.046.407-.148.576z" />
    </svg>
  );
});

FolderMove.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FolderMove.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
FolderMove.name = FolderMove.render.name || 'FolderMove';

export default FolderMove;
