import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Speaker = React.forwardRef(function Speaker(props, ref) {
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
      <path d="M7.068 1h9.864A4.074 4.074 0 0121 5.079V18.92A4.074 4.074 0 0116.932 23H7.068A4.074 4.074 0 013 18.921V5.08A4.074 4.074 0 017.068 1zm0 2.225c-1.02 0-1.849.83-1.849 1.854V18.92c0 1.024.828 1.854 1.85 1.854h9.863c1.02 0 1.849-.83 1.849-1.854V5.08a1.852 1.852 0 00-1.85-1.854H7.069zM12 19.045a5.061 5.061 0 01-5.055-5.067A5.061 5.061 0 0112 8.91a5.061 5.061 0 015.055 5.068A5.061 5.061 0 0112 19.045zm0-2.225a2.84 2.84 0 002.836-2.842A2.84 2.84 0 0012 11.135a2.84 2.84 0 00-2.836 2.843A2.84 2.84 0 0012 16.82z" />
    </svg>
  );
});

Speaker.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Speaker.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Speaker.name = Speaker.render.name || 'Speaker';

export default Speaker;
