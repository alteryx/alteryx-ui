import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Activity = React.forwardRef(function Activity(props, ref) {
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
      <path d="M16.877 11.66c.152-.455.577-.761 1.056-.761h3.955a1.112 1.112 0 110 2.225h-3.154l-2.712 8.138c-.338 1.014-1.773 1.014-2.111 0L9.034 6.63l-1.911 5.733c-.152.454-.577.76-1.056.76H2.112a1.112 1.112 0 110-2.224h3.154L7.978 2.76c.338-1.015 1.773-1.015 2.111 0l4.877 14.632 1.911-5.734z" />
    </svg>
  );
});

Activity.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Activity.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Activity.name = Activity.render.name || 'Activity';

export default Activity;
