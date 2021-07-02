import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const FileConnection = React.forwardRef(function FileConnection(props, ref) {
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
      <path d="M18.7 13.7a2.5 2.5 0 01-2.5 2.5l-3.101-.001.001 1.492A3.251 3.251 0 0112 24a3.25 3.25 0 01-1.101-6.309V16.2L7.8 16.2a2.5 2.5 0 01-2.495-2.336L5.3 13.7V2.5A2.5 2.5 0 017.8 0h4.9a1.104 1.104 0 01.472.106l.023.012a.999.999 0 01.171.107c.04.03.077.062.112.097l-.07-.065.06.056.01.01 4.9 4.9a1.103 1.103 0 01.205.282l.01.023a.968.968 0 01.08.233c.01.039.016.079.02.12L18.7 6zM6.75 19.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-3.25 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm17 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-3.25 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 19.7a1.05 1.05 0 100 2.1 1.05 1.05 0 000-2.1zm-.4-17.501L7.8 2.2a.3.3 0 00-.3.3v11.2a.3.3 0 00.3.3h8.4a.3.3 0 00.3-.3l-.001-6.601L12.7 7.1a1.1 1.1 0 01-1.094-.98L11.6 6V2.199zm3.344 2.7L13.8 3.754V4.9l1.144-.001z" />
    </svg>
  );
});

FileConnection.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileConnection.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
FileConnection.name = FileConnection.render.name || 'FileConnection';

export default FileConnection;
