import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Font = React.forwardRef(function Font(props, ref) {
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
      <path d="M12.001 1.4l.09.004.071.008.076.014.143.042.062.025.155.084.097.07.084.076.075.083.092.132.054.104.032.078 7 19a1.1 1.1 0 01-2.016.87l-.048-.11-1.578-4.28H7.61l-1.578 4.28a1.1 1.1 0 01-2.1-.645l.036-.115 7-19 .025-.062.084-.156.07-.096.076-.084.083-.075.132-.092.104-.055.078-.032a1.11 1.11 0 01.143-.042l.108-.018.076-.007.054-.001zm0 4.283L8.42 15.4h7.16L12 5.683z" />
    </svg>
  );
});

Font.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Font.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Font.name = Font.render.name || 'Font';

export default Font;
