import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const RefreshCcw = React.forwardRef(function RefreshCcw(props, ref) {
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
      <path d="M2.227 7.298C5.352 3.793 8.6 2 11.976 2c3.95 0 7.108 2.202 9.385 6.45a1.12 1.12 0 01-.454 1.512 1.111 1.111 0 01-1.507-.454c-1.913-3.568-4.358-5.274-7.424-5.274-2.687 0-5.41 1.518-8.161 4.634h3.172c.615 0 1.114.5 1.114 1.117s-.499 1.117-1.114 1.117H1.113c-.615 0-1.113-.5-1.113-1.117V4.098c0-.617.498-1.117 1.113-1.117s1.114.5 1.114 1.117v3.2zm19.546 9.404C18.648 20.207 15.4 22 12.024 22c-3.95 0-7.108-2.202-9.385-6.45a1.12 1.12 0 01.454-1.512 1.111 1.111 0 011.507.454c1.913 3.568 4.358 5.274 7.424 5.274 2.687 0 5.41-1.518 8.161-4.634h-3.172c-.615 0-1.114-.5-1.114-1.117s.499-1.117 1.114-1.117h5.874c.615 0 1.113.5 1.113 1.117v5.887c0 .617-.498 1.117-1.113 1.117s-1.114-.5-1.114-1.117v-3.2z" />
    </svg>
  );
});

RefreshCcw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RefreshCcw.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
RefreshCcw.name = RefreshCcw.render.name || 'RefreshCcw';

export default RefreshCcw;
