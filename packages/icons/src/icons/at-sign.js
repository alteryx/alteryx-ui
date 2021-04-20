import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const AtSign = React.forwardRef(function AtSign(props, ref) {
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
      <path d="M14.5 1.289A11 11 0 0123 12v.989a4.079 4.079 0 01-7.313 2.485 5.067 5.067 0 11-.82-7.653 1.112 1.112 0 012.2.224v4.944a1.854 1.854 0 003.708 0V12a8.775 8.775 0 10-3.44 6.968 1.112 1.112 0 111.353 1.766A11 11 0 1114.5 1.289zM12 9.158a2.843 2.843 0 100 5.685 2.843 2.843 0 000-5.685z" />
    </svg>
  );
});

AtSign.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AtSign.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
AtSign.name = AtSign.render.name || 'AtSign';

export default AtSign;
