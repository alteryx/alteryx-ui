import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const XSmall = React.forwardRef(function XSmall(props, ref) {
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
      <path d="M17.578 6.422a1.1 1.1 0 01.085 1.46l-.085.096L13.555 12l4.023 4.022.085.096a1.1 1.1 0 01-1.64 1.46L12 13.555l-4.022 4.023a1.1 1.1 0 01-1.641-1.46l.085-.096L10.445 12 6.422 7.978l-.085-.096a1.1 1.1 0 011.64-1.46L12 10.445l4.022-4.023a1.1 1.1 0 011.556 0z" />
    </svg>
  );
});

XSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

XSmall.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
XSmall.name = XSmall.render.name || 'XSmall';

export default XSmall;
