import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Settings = React.forwardRef(function Settings(props, ref) {
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
      <path d="M20.739 8.907h.168a3.093 3.093 0 110 6.186h-.084a.52.52 0 00-.476.315.52.52 0 00.09.575l.06.059a3.093 3.093 0 11-4.375 4.376c-.203-.2-.43-.24-.635-.15a.518.518 0 00-.315.471v.168a3.093 3.093 0 01-6.186 0c-.004-.276-.14-.465-.405-.565a.516.516 0 00-.564.096l-.059.059a3.093 3.093 0 11-4.376-4.375c.2-.203.24-.43.15-.635a.518.518 0 00-.471-.315h-.168a3.093 3.093 0 010-6.186c.276-.004.465-.14.565-.405a.516.516 0 00-.096-.564l-.059-.059a3.093 3.093 0 114.375-4.376c.203.2.43.24.624.155.063-.028.129-.05.196-.066a.516.516 0 00.21-.41v-.168a3.093 3.093 0 116.185 0v.084c0 .208.124.394.326.48a.516.516 0 00.564-.095l.059-.059a3.093 3.093 0 114.376 4.375c-.2.203-.24.43-.155.624.028.063.05.129.066.196.096.13.248.209.41.21zm.08 3.959h.088a.866.866 0 000-1.732h-.172A2.746 2.746 0 0118.22 9.47a1.113 1.113 0 01-.079-.282 2.752 2.752 0 01.642-2.825l.06-.06a.866.866 0 10-1.227-1.225l-.068.068a2.742 2.742 0 01-3.019.554 2.748 2.748 0 01-1.664-2.518v-.09a.866.866 0 00-1.732 0v.173A2.746 2.746 0 019.47 5.78c-.09.038-.185.065-.282.079a2.752 2.752 0 01-2.825-.642l-.06-.06a.866.866 0 10-1.225 1.227l.068.068c.785.803 1.002 2.002.575 2.964a2.755 2.755 0 01-2.54 1.798h-.088a.866.866 0 000 1.732h.172a2.742 2.742 0 012.51 1.654 2.75 2.75 0 01-.559 3.038l-.06.06a.866.866 0 101.227 1.225l.068-.068c.803-.785 2.002-1.002 2.964-.575a2.755 2.755 0 011.798 2.54v.088a.866.866 0 001.732 0v-.172a2.742 2.742 0 011.654-2.51 2.75 2.75 0 013.038.559l.06.06a.866.866 0 101.225-1.227l-.068-.068a2.746 2.746 0 01-.551-3.024 2.748 2.748 0 012.515-1.659zM12 16.082a4.082 4.082 0 110-8.164 4.082 4.082 0 010 8.164zm0-2.226a1.856 1.856 0 100-3.712 1.856 1.856 0 000 3.712z" />
    </svg>
  );
});

Settings.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Settings.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Settings.name = Settings.render.name || 'Settings';

export default Settings;
