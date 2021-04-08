import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const ZapOff = React.forwardRef(function ZapOff(props, ref) {
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
      <path d="M1.9.326L23.675 22.1a1.113 1.113 0 01-1.575 1.575l-6.066-6.067-4.167 5.003c-.712.854-2.098.252-1.96-.851l.833-6.666H3.093c-.944 0-1.46-1.101-.856-1.826l4.298-5.158L.326 1.901A1.113 1.113 0 111.901.326zm11.142 14.29l-.456 3.65 1.866-2.24-1.41-1.41zm7.865-5.709c.945 0 1.46 1.102.855 1.827l-2.405 2.88a1.113 1.113 0 11-1.71-1.427l.88-1.053h-2.905a1.113 1.113 0 010-2.227h5.285zm-9.616 3.958L8.116 9.69 5.47 12.866l5.821-.001zM14.095 2.24l-.584 4.701a1.113 1.113 0 01-2.21-.274l.116-.934A1.113 1.113 0 019.729 4.28l2.405-2.89c.711-.855 2.098-.254 1.96.85z" />
    </svg>
  );
});

ZapOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ZapOff.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
ZapOff.name = ZapOff.render.name || 'ZapOff';

export default ZapOff;
