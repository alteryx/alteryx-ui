import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Award = React.forwardRef(function Award(props, ref) {
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
      <path d="M12 0c4.418 0 8 3.6 8 8.04a8.041 8.041 0 01-3.082 6.343l1.103 8.355c.122.924-.872 1.58-1.668 1.1L12 21.215l-4.353 2.625c-.796.48-1.79-.177-1.668-1.101l1.104-8.354A8.041 8.041 0 014 8.04C4 3.6 7.582 0 12 0zm0 16.08c-1 0-1.956-.183-2.838-.52l-.684 5.181 2.952-1.78c.35-.212.79-.212 1.14 0l2.953 1.78-.684-5.181a7.946 7.946 0 01-2.839.52zm0-13.853c-3.195 0-5.785 2.602-5.785 5.813s2.59 5.814 5.785 5.814a5.736 5.736 0 003.06-.879.97.97 0 01.133-.089 5.807 5.807 0 002.592-4.846c0-3.21-2.59-5.813-5.785-5.813z" />
    </svg>
  );
});

Award.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Award.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Award.name = Award.render.name || 'Award';

export default Award;
