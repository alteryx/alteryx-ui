import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const HelpCircle = React.forwardRef(function HelpCircle(props, ref) {
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
      <path d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2.225a8.775 8.775 0 100-17.55 8.775 8.775 0 000 17.55zM10.172 9.403a1.112 1.112 0 01-2.099-.738A4.079 4.079 0 0116 10.022c0 1.316-.774 2.348-1.979 3.15a7.607 7.607 0 01-1.748.872 1.112 1.112 0 01-.704-2.11 5.513 5.513 0 001.218-.612c.65-.433.988-.885.988-1.301a1.854 1.854 0 00-3.603-.618zM12 17.933a1.483 1.483 0 100-2.967 1.483 1.483 0 000 2.967z" />
    </svg>
  );
});

HelpCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HelpCircle.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
HelpCircle.name = HelpCircle.render.name || 'HelpCircle';

export default HelpCircle;
