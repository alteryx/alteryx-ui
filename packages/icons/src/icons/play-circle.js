import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const PlayCircle = React.forwardRef(function PlayCircle(props, ref) {
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
      <path d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2.225a8.775 8.775 0 100-17.55 8.775 8.775 0 000 17.55zM10.64 7.12l5.932 3.955c.66.44.66 1.411 0 1.852L10.64 16.88a1.112 1.112 0 01-1.729-.926v-7.91c0-.888.99-1.418 1.73-.926zm.495 3.004v3.754L13.95 12l-2.815-1.877z" />
    </svg>
  );
});

PlayCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PlayCircle.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
PlayCircle.name = PlayCircle.render.name || 'PlayCircle';

export default PlayCircle;
