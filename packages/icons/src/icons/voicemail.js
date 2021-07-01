import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Voicemail = React.forwardRef(function Voicemail(props, ref) {
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
      <path d="M18.433 7C21.508 7 24 9.462 24 12.5S21.508 18 18.433 18l-.045-.001H5.611L5.567 18C2.492 18 0 15.538 0 12.5S2.492 7 5.567 7s5.567 2.462 5.567 5.5c0 1.238-.414 2.38-1.113 3.3h3.958a5.433 5.433 0 01-1.113-3.3c0-3.038 2.492-5.5 5.567-5.5zM5.567 9.2c-1.845 0-3.34 1.477-3.34 3.3 0 1.823 1.495 3.3 3.34 3.3 1.845 0 3.34-1.477 3.34-3.3 0-1.823-1.495-3.3-3.34-3.3zm12.866 0c-1.845 0-3.34 1.477-3.34 3.3 0 1.823 1.495 3.3 3.34 3.3 1.845 0 3.34-1.477 3.34-3.3 0-1.823-1.495-3.3-3.34-3.3z" />
    </svg>
  );
});

Voicemail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Voicemail.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Voicemail.name = Voicemail.render.name || 'Voicemail';

export default Voicemail;
