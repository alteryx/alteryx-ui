import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Share = React.forwardRef(function Share(props, ref) {
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
      <path d="M19.89 10.888c.613 0 1.11.498 1.11 1.112v7.91c0 1.707-1.38 3.09-3.082 3.09H6.082A3.086 3.086 0 013 19.91V12a1.111 1.111 0 112.22 0v7.91c0 .478.386.865.862.865h11.836a.864.864 0 00.863-.865V12c0-.614.497-1.112 1.11-1.112zm-7.768-9.881l.028.003a1.1 1.1 0 01.635.316L16.73 5.28a1.114 1.114 0 010 1.573 1.108 1.108 0 01-1.57 0L13.11 4.797v10.17c0 .614-.496 1.112-1.109 1.112s-1.11-.498-1.11-1.113V4.797L8.84 6.854a1.108 1.108 0 01-1.57 0 1.114 1.114 0 010-1.573l3.945-3.955.02-.02.06-.052-.08.072a1.121 1.121 0 01.635-.316c.09-.012.181-.013.272-.003z" />
    </svg>
  );
});

Share.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Share.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Share.name = Share.render.name || 'Share';

export default Share;
