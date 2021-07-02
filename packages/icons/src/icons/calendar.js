import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Calendar = React.forwardRef(function Calendar(props, ref) {
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
      <path d="M15.95 1c.614 0 1.112.498 1.112 1.112l-.001.865h.865A4.076 4.076 0 0122 7.058V18.92A4.076 4.076 0 0117.926 23H6.074A4.076 4.076 0 012 18.921V7.056a4.076 4.076 0 014.074-4.078l.864-.001v-.865a1.112 1.112 0 112.222 0v.865h5.679v-.865c0-.614.498-1.112 1.112-1.112zm3.827 10.134H4.222v7.787c0 1.024.83 1.854 1.852 1.854h11.852c1.023 0 1.852-.83 1.852-1.854l-.001-7.787zM6.938 5.202h-.864c-1.023 0-1.852.83-1.852 1.854V8.91h15.555V7.056c0-1.024-.828-1.854-1.851-1.854h-.865v.865a1.112 1.112 0 11-2.221 0l-.001-.865H9.16v.865a1.112 1.112 0 11-2.222 0v-.865z" />
    </svg>
  );
});

Calendar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Calendar.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Calendar.name = Calendar.render.name || 'Calendar';

export default Calendar;
