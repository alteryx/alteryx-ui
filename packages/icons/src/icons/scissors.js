import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Scissors = React.forwardRef(function Scissors(props, ref) {
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
      <path d="M7.071 2a4.073 4.073 0 013.556 6.06l2.366 2.368 7.111-7.115a1.11 1.11 0 111.57 1.571L10.628 15.94A4.073 4.073 0 017.071 22 4.073 4.073 0 013 17.926a4.073 4.073 0 016.056-3.558L11.423 12 9.056 9.632A4.073 4.073 0 013 6.074 4.073 4.073 0 017.071 2zm9.145 11.663l5.458 5.452a1.112 1.112 0 01-1.569 1.573l-5.458-5.452a1.112 1.112 0 011.569-1.573zM7.07 16.074a1.851 1.851 0 101.318.551.03.03 0 01-.01-.007l-.008-.01a1.844 1.844 0 00-1.3-.534zm0-11.852a1.851 1.851 0 101.308 3.16l.01-.007a1.851 1.851 0 00-1.318-3.152z" />
    </svg>
  );
});

Scissors.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Scissors.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Scissors.name = Scissors.render.name || 'Scissors';

export default Scissors;
