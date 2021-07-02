import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const UploadCloud = React.forwardRef(function UploadCloud(props, ref) {
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
      <path d="M12.004 10.888a1.114 1.114 0 01.658.214l.004.003.028.022a1.117 1.117 0 01.08.069h-.001l.018.017 3.959 3.951a1.11 1.11 0 01-.666 1.89l-.122.007a1.11 1.11 0 01-.787-.325l-2.058-2.055v6.208a1.112 1.112 0 01-2.226 0l-.001-6.207-1.493 1.489-.564.565a1.11 1.11 0 01-.665.319l-.122.006a1.11 1.11 0 01-.787-1.897l3.958-3.95.017-.018a1.12 1.12 0 01.05-.044l.03-.025.028-.022a1.117 1.117 0 01.186-.111l.013-.006a1.107 1.107 0 01.463-.1zm-1.95-8.83a9.027 9.027 0 017.46 5.866h.428a6.06 6.06 0 015.87 4.558 6.046 6.046 0 01-2.972 6.804 1.114 1.114 0 01-1.51-.443 1.11 1.11 0 01.444-1.508 3.825 3.825 0 00-1.832-7.188h-1.247c-.508 0-.951-.343-1.078-.833a6.8 6.8 0 00-5.815-5.047 6.806 6.806 0 00-6.805 3.608 6.781 6.781 0 00.935 7.635 1.11 1.11 0 01-.097 1.569 1.115 1.115 0 01-1.571-.097A9 9 0 011.022 6.848a9.034 9.034 0 019.032-4.79z" />
    </svg>
  );
});

UploadCloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UploadCloud.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
UploadCloud.name = UploadCloud.render.name || 'UploadCloud';

export default UploadCloud;
