import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const MagicWand = React.forwardRef(function MagicWand(props, ref) {
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
      <path d="M11.852 12.71c.458.458.458 1.2 0 1.657L3 23.219a1.172 1.172 0 01-1.657-1.657l8.852-8.852a1.172 1.172 0 011.657 0zm8.258-1.23a.4.4 0 01.182.182l.496 1.005a.4.4 0 00.3.218l1.11.162a.4.4 0 01.222.682l-.803.782a.4.4 0 00-.115.354l.19 1.105a.4.4 0 01-.58.421l-.993-.521a.4.4 0 00-.372 0l-.992.521a.4.4 0 01-.58-.421l.19-1.105a.4.4 0 00-.116-.354l-.802-.782a.4.4 0 01.221-.682l1.11-.162a.4.4 0 00.3-.218l.496-1.005a.4.4 0 01.536-.182zM16.54 8.024c.457.457.457 1.199 0 1.657l-2.604 2.603a1.172 1.172 0 11-1.657-1.657l2.604-2.603a1.172 1.172 0 011.657 0zM9.943.68a.5.5 0 01.227.227l.583 1.182a.5.5 0 00.377.273l1.303.19a.5.5 0 01.278.853l-.944.92a.5.5 0 00-.144.442l.223 1.298a.5.5 0 01-.725.527L9.955 5.98a.5.5 0 00-.466 0l-1.166.613a.5.5 0 01-.725-.527l.222-1.298a.5.5 0 00-.143-.443l-.944-.92a.5.5 0 01.277-.852l1.304-.19a.5.5 0 00.376-.273L9.274.908a.5.5 0 01.67-.227zm10.904 1.29a.3.3 0 01.136.136l.368.745a.3.3 0 00.226.164l.821.12a.3.3 0 01.167.511l-.595.58a.3.3 0 00-.086.265l.14.819a.3.3 0 01-.435.316l-.735-.386a.3.3 0 00-.28 0l-.735.386a.3.3 0 01-.435-.316l.14-.819a.3.3 0 00-.086-.265l-.594-.58a.3.3 0 01.166-.512l.822-.119a.3.3 0 00.226-.164l.367-.745a.3.3 0 01.402-.136z" />
    </svg>
  );
});

MagicWand.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MagicWand.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
MagicWand.name = MagicWand.render.name || 'MagicWand';

export default MagicWand;
