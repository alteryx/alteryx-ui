import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Radio = React.forwardRef(function Radio(props, ref) {
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
      <path d="M12 15.05c-1.707 0-3.09-1.365-3.09-3.05 0-1.685 1.383-3.05 3.09-3.05 1.707 0 3.09 1.365 3.09 3.05 0 1.685-1.383 3.05-3.09 3.05zm0-2.196a.86.86 0 00.865-.854.86.86 0 00-.865-.854.86.86 0 00-.865.854.86.86 0 00.865.854zm3.407-4.216a1.088 1.088 0 01-.001-1.553 1.123 1.123 0 011.573-.001 6.91 6.91 0 012.067 4.92 6.91 6.91 0 01-2.067 4.922 1.123 1.123 0 01-1.573-.001 1.088 1.088 0 010-1.553 4.728 4.728 0 001.415-3.367 4.728 4.728 0 00-1.414-3.367zm-6.814 6.724a1.088 1.088 0 01.001 1.553c-.434.43-1.139.43-1.573.001a6.91 6.91 0 01-2.067-4.92 6.91 6.91 0 012.067-4.922 1.123 1.123 0 011.573.001c.434.43.434 1.124 0 1.553a4.728 4.728 0 00-1.415 3.367c0 1.263.509 2.474 1.414 3.367zm9.612-9.487a1.088 1.088 0 010-1.553 1.123 1.123 0 011.574 0 10.762 10.762 0 010 15.356 1.123 1.123 0 01-1.574 0 1.088 1.088 0 010-1.553 8.585 8.585 0 000-12.25zm-12.41 12.25a1.088 1.088 0 010 1.553 1.123 1.123 0 01-1.574 0 10.762 10.762 0 010-15.356 1.123 1.123 0 011.574 0 1.088 1.088 0 010 1.553 8.585 8.585 0 000 12.25z" />
    </svg>
  );
});

Radio.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Radio.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Radio.name = Radio.render.name || 'Radio';

export default Radio;
