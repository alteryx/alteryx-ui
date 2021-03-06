import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const ShieldOff = React.forwardRef(function ShieldOff(props, ref) {
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
      <path d="M1.9.326l3.686 3.685.016.016L23.674 22.1a1.113 1.113 0 01-1.575 1.575l-4.517-4.518a21.194 21.194 0 01-5.062 3.726 1.113 1.113 0 01-1.018.01c-.277-.138-.74-.394-1.33-.762a22.355 22.355 0 01-2.864-2.117C4.616 17.658 2.97 14.981 2.97 12V5.072c0-.154.032-.303.09-.438L.326 1.9A1.113 1.113 0 111.901.326zM5.196 6.77V12c0 2.214 1.323 4.363 3.58 6.337a20.157 20.157 0 003.223 2.292 18.967 18.967 0 004.01-3.047L5.195 6.769zm7.196-5.708l7.917 2.969c.435.163.723.578.723 1.042v6.935a7.943 7.943 0 01-.357 2.302 1.113 1.113 0 11-2.127-.66A5.704 5.704 0 0018.804 12V5.844L12 3.292 9.262 4.314a1.113 1.113 0 11-.779-2.086l3.128-1.168c.251-.094.528-.094.78 0z" />
    </svg>
  );
});

ShieldOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ShieldOff.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
ShieldOff.name = ShieldOff.render.name || 'ShieldOff';

export default ShieldOff;
