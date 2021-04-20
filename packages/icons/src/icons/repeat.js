import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Repeat = React.forwardRef(function Repeat(props, ref) {
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
      <path d="M20.889 11.876c.614 0 1.111.499 1.111 1.114v1.98a5.067 5.067 0 01-5.062 5.071H5.794l2.053 2.058c.434.435.434 1.14 0 1.575a1.11 1.11 0 01-1.57 0l-3.952-3.959-.023-.024a1.12 1.12 0 01-.038-.043l.061.067a1.123 1.123 0 01-.163-.208 1.11 1.11 0 01.147-1.35l.016-.016 3.951-3.96a1.11 1.11 0 011.571 0c.434.436.434 1.14 0 1.575l-2.054 2.058h11.145a2.842 2.842 0 002.84-2.845v-1.98c0-.614.497-1.113 1.11-1.113zM17.724.326l3.95 3.959.024.024.038.043-.061-.067a1.123 1.123 0 01.267.431 1.113 1.113 0 01-.267 1.143l-3.951 3.96a1.11 1.11 0 01-1.571 0 1.115 1.115 0 010-1.575l2.053-2.059H7.062a2.842 2.842 0 00-2.84 2.846v1.98a1.112 1.112 0 11-2.222 0V9.03a5.067 5.067 0 015.062-5.072l11.143-.001-2.052-2.057a1.115 1.115 0 010-1.575 1.11 1.11 0 011.57 0z" />
    </svg>
  );
});

Repeat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Repeat.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Repeat.name = Repeat.render.name || 'Repeat';

export default Repeat;
