import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Status = React.forwardRef(function Status(props, ref) {
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
      <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11a10.954 10.954 0 01-6.921-2.45 1.1 1.1 0 111.385-1.71l.269.21A8.755 8.755 0 0012 20.8a8.8 8.8 0 100-17.6A1.1 1.1 0 0112 1zM3.473 14.186c.187.73.466 1.43.83 2.084a1.1 1.1 0 01-1.922 1.07 10.936 10.936 0 01-1.04-2.61 1.1 1.1 0 012.132-.544zm-.718-5.903a1.1 1.1 0 01.765 1.355 8.758 8.758 0 00-.27 1.416 1.1 1.1 0 11-2.187-.234c.064-.601.177-1.193.338-1.771a1.1 1.1 0 011.354-.766zM5.45 4.496a1.1 1.1 0 01.066 1.554 8.85 8.85 0 00-.635.775A1.1 1.1 0 113.103 5.53c.246-.337.51-.66.793-.968a1.1 1.1 0 011.554-.066zm3.259-1.9a1.1 1.1 0 01-.515 1.467c-.131.063-.26.13-.388.198a1.1 1.1 0 01-1.05-1.933c.16-.086.321-.17.485-.248a1.1 1.1 0 011.468.515z" />
    </svg>
  );
});

Status.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Status.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Status.name = Status.render.name || 'Status';

export default Status;
