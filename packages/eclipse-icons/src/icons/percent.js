import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Percent = React.forwardRef(function Percent(props, ref) {
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
      <path d="M18.12 4.311a1.11 1.11 0 111.569 1.57L5.88 19.688a1.11 1.11 0 11-1.569-1.57L18.12 4.312zm-11.545 5.84a3.575 3.575 0 110-7.151 3.575 3.575 0 010 7.15zm0-2.22a1.356 1.356 0 100-2.712 1.356 1.356 0 000 2.713zM17.425 21a3.575 3.575 0 110-7.15 3.575 3.575 0 010 7.15zm0-2.22a1.356 1.356 0 100-2.712 1.356 1.356 0 000 2.713z" />
    </svg>
  );
});

Percent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Percent.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Percent.name = Percent.render.name || 'Percent';

export default Percent;
