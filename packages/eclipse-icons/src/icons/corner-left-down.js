import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const CornerLeftDown = React.forwardRef(function CornerLeftDown(props, ref) {
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
      <path d="M19.89 3a1.11 1.11 0 010 2.22h-6.904a2.836 2.836 0 00-2.835 2.835l-.001 9.157 3.038-3.038a1.11 1.11 0 011.57 1.57l-4.932 4.931-.02.02a1.116 1.116 0 01-.054.047l.074-.067a1.12 1.12 0 01-.67.32A1.106 1.106 0 019.04 21l-.114-.006a1.115 1.115 0 01-.67-.319l-4.932-4.931a1.11 1.11 0 111.57-1.57l3.036 3.037V8.055A5.055 5.055 0 0112.987 3h6.904z" />
    </svg>
  );
});

CornerLeftDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CornerLeftDown.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
CornerLeftDown.name = CornerLeftDown.render.name || 'CornerLeftDown';

export default CornerLeftDown;
