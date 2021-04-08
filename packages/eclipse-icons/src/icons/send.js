import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Send = React.forwardRef(function Send(props, ref) {
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
      <path d="M22.519 1.2l.035.025a1.114 1.114 0 01.194.187l-.076-.084a1.09 1.09 0 01.26 1.161l-6.917 19.766c-.333.95-1.657 1.005-2.066.084l-3.781-8.507-8.507-3.78c-.921-.41-.867-1.734.084-2.067L21.51 1.067c.03-.01.059-.02.09-.028l-.083.026a1.177 1.177 0 01.239-.057h.019c.274-.031.534.045.743.192zm-3.294 5.147l-6.889 6.889 2.506 5.636 4.383-12.525zm-1.573-1.573L5.128 9.158l5.635 2.505 6.889-6.889z" />
    </svg>
  );
});

Send.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Send.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Send.name = Send.render.name || 'Send';

export default Send;
