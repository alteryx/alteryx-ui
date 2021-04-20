import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Mail = React.forwardRef(function Mail(props, ref) {
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
      <path d="M19.91 3A3.092 3.092 0 0123 6.082v11.836A3.092 3.092 0 0119.91 21H4.09A3.092 3.092 0 011 17.918V6.082A3.092 3.092 0 014.09 3h15.82zm.865 5.213l-8.137 5.682a1.115 1.115 0 01-1.276 0L3.224 8.213v9.705a.87.87 0 00.866.863h15.82a.87.87 0 00.865-.863V8.213zm-.865-2.994H4.09a.87.87 0 00-.72.388L12 11.632l8.63-6.025a.87.87 0 00-.72-.388z" />
    </svg>
  );
});

Mail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mail.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Mail.name = Mail.render.name || 'Mail';

export default Mail;
