import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Navigation = React.forwardRef(function Navigation(props, ref) {
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
      <path d="M5.394 11.683l4.892 1.223c.398.1.709.41.808.808l1.223 4.892 6.23-13.153-13.153 6.23zM9.1 14.9l-7.257-1.815c-1.012-.253-1.15-1.636-.206-2.083l18.772-8.892c.944-.447 1.928.537 1.48 1.48l-8.891 18.773c-.447.943-1.83.806-2.083-.206L9.099 14.9z" />
    </svg>
  );
});

Navigation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Navigation.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Navigation.name = Navigation.render.name || 'Navigation';

export default Navigation;
