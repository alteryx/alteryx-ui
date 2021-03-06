import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Emoji = React.forwardRef(function Emoji(props, ref) {
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
      <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2.2a8.8 8.8 0 100 17.6 8.8 8.8 0 000-17.6zm4.62 9.9a1.1 1.1 0 01.22 1.54c-.247.329-.676.777-1.285 1.22-1.026.746-2.218 1.2-3.555 1.2-1.337 0-2.529-.454-3.555-1.2-.61-.443-1.038-.891-1.285-1.22a1.1 1.1 0 011.677-1.418l.083.098c.125.166.407.46.819.76.675.492 1.432.78 2.261.78.829 0 1.586-.288 2.261-.78.36-.262.622-.52.765-.692l.054-.068a1.1 1.1 0 011.54-.22zM9.01 7.5a1.5 1.5 0 01.144 2.993L9 10.5a1.5 1.5 0 01-.144-2.993L9.01 7.5zm5.99 0a1.5 1.5 0 01.144 2.993l-.154.007a1.5 1.5 0 01-.144-2.993L15 7.5z" />
    </svg>
  );
});

Emoji.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Emoji.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Emoji.name = Emoji.render.name || 'Emoji';

export default Emoji;
