import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const SkipForward = React.forwardRef(function SkipForward(props, ref) {
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
      <path d="M6.215 6.42v11.16L13.181 12 6.215 6.42zM5.8 3.245l9.846 7.889a1.11 1.11 0 010 1.732L5.8 20.755c-.726.58-1.8.064-1.8-.866V4.11c0-.93 1.074-1.447 1.8-.866zm11.985 1.852a1.109 1.109 0 112.215 0v13.806a1.109 1.109 0 11-2.215 0V5.097z" />
    </svg>
  );
});

SkipForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SkipForward.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
SkipForward.name = SkipForward.render.name || 'SkipForward';

export default SkipForward;
