import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const CreditCard = React.forwardRef(function CreditCard(props, ref) {
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
      <path d="M19.918 3A4.076 4.076 0 0124 7.068v9.864A4.076 4.076 0 0119.918 21H4.082A4.076 4.076 0 010 16.932V7.068A4.076 4.076 0 014.082 3h15.836zm1.855 8.136H2.226v5.796c0 1.02.832 1.849 1.856 1.849h15.836a1.853 1.853 0 001.855-1.85v-5.795zm-1.855-5.917H4.082a1.853 1.853 0 00-1.855 1.85l-.001 1.848h19.547V7.068c0-1.02-.83-1.849-1.855-1.849z" />
    </svg>
  );
});

CreditCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CreditCard.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
CreditCard.name = CreditCard.render.name || 'CreditCard';

export default CreditCard;
