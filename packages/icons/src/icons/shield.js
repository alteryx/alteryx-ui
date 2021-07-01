import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Shield = React.forwardRef(function Shield(props, ref) {
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
      <path d="M12.496 22.883c-.312.156-.68.156-.992 0a17.176 17.176 0 01-1.325-.763 22.282 22.282 0 01-2.855-2.114C4.641 17.652 3 14.979 3 12V5.079c0-.464.287-.88.72-1.042l7.89-2.966c.252-.095.528-.095.78 0l7.89 2.966c.433.163.72.578.72 1.042V12c0 2.979-1.641 5.652-4.324 8.006-.911.799-1.883 1.505-2.855 2.114-.587.368-1.048.624-1.325.763zm.149-2.65a20.09 20.09 0 002.57-1.902C17.463 16.36 18.78 14.212 18.78 12V5.85L12 3.3 5.22 5.85V12c0 2.212 1.317 4.359 3.565 6.331A20.09 20.09 0 0012 20.622c.184-.106.401-.236.645-.388z" />
    </svg>
  );
});

Shield.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Shield.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Shield.name = Shield.render.name || 'Shield';

export default Shield;
