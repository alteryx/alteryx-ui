import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const FastForward = React.forwardRef(function FastForward(props, ref) {
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
      <path d="M13.672 4.235l8.899 6.89a1.104 1.104 0 010 1.75l-8.9 6.89c-.73.565-1.795.047-1.795-.874v-6.194a1.12 1.12 0 01-.182.177l-8.899 6.89c-.73.566-1.795.048-1.795-.873V5.109c0-.921 1.065-1.44 1.795-.874l8.9 6.89c.068.054.129.114.181.178V5.109c0-.921 1.065-1.44 1.796-.874zM3.225 7.374v9.252L9.199 12 3.225 7.374zm10.876 0v9.252L20.076 12 14.1 7.374z" />
    </svg>
  );
});

FastForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FastForward.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
FastForward.name = FastForward.render.name || 'FastForward';

export default FastForward;
