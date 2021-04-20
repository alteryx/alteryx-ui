import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const FileText = React.forwardRef(function FileText(props, ref) {
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
      <path d="M12.826 1c.398 0 .78.157 1.061.436l6.674 6.616c.281.279.439.657.439 1.05v10.925C21 21.669 19.657 23 18 23H6c-1.657 0-3-1.331-3-2.973V3.973C3 2.331 4.343 1 6 1h6.826zm-.959 2.229H6a.747.747 0 00-.75.744v16.054c0 .41.336.743.75.743h12c.414 0 .75-.332.75-.743l-.001-9.903h-4.256c-1.828 0-2.625-.776-2.625-2.601l-.001-4.294zM16 15.84c.621 0 1.125.5 1.125 1.115A1.12 1.12 0 0116 18.07H8a1.12 1.12 0 01-1.125-1.115A1.12 1.12 0 018 15.84h8zm0-3.964c.621 0 1.125.5 1.125 1.115A1.12 1.12 0 0116 14.106H8a1.12 1.12 0 01-1.125-1.115A1.12 1.12 0 018 11.876h8zm-6-3.964c.621 0 1.125.5 1.125 1.115A1.12 1.12 0 0110 10.142H8a1.12 1.12 0 01-1.125-1.115A1.12 1.12 0 018 7.912h2zm7.22-.018l-3.103-3.077v2.706c0 .205.168.372.376.372l2.727-.001z" />
    </svg>
  );
});

FileText.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileText.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
FileText.name = FileText.render.name || 'FileText';

export default FileText;
