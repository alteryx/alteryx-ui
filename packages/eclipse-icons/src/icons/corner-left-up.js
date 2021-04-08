import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const CornerLeftUp = React.forwardRef(function CornerLeftUp(props, ref) {
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
      <path d="M9.163 3.007l.028.003a1.103 1.103 0 01.635.315l4.931 4.931a1.11 1.11 0 01-1.569 1.57L10.15 6.787v9.158a2.836 2.836 0 002.836 2.836h6.904a1.11 1.11 0 010 2.219h-6.904a5.055 5.055 0 01-5.054-5.055L7.93 6.788 4.894 9.826a1.11 1.11 0 01-1.569-1.57l4.931-4.931.02-.02c.017-.016.035-.032.054-.047l-.074.067a1.12 1.12 0 01.625-.313c.093-.014.188-.016.282-.005z" />
    </svg>
  );
});

CornerLeftUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CornerLeftUp.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
CornerLeftUp.name = CornerLeftUp.render.name || 'CornerLeftUp';

export default CornerLeftUp;
