import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Cast = React.forwardRef(function Cast(props, ref) {
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
      <path d="M1.89 17.13a1.11 1.11 0 11.445-2.174 6.049 6.049 0 014.724 4.712 1.112 1.112 0 01-2.18.443 3.827 3.827 0 00-2.989-2.98zm.1-3.978a1.11 1.11 0 11.246-2.206 9.999 9.999 0 018.843 8.822 1.112 1.112 0 01-2.211.245 7.777 7.777 0 00-6.878-6.861zm1.235-5.097c0 .613-.498 1.11-1.112 1.11A1.111 1.111 0 011 8.054V6.082A3.086 3.086 0 014.09 3h15.82C21.617 3 23 4.38 23 6.082v11.836A3.086 3.086 0 0119.91 21h-5.932a1.111 1.111 0 01-1.113-1.11c0-.613.498-1.11 1.113-1.11h5.932a.864.864 0 00.865-.862V6.082a.864.864 0 00-.865-.863H4.09a.864.864 0 00-.865.863v1.973z" />
    </svg>
  );
});

Cast.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cast.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Cast.name = Cast.render.name || 'Cast';

export default Cast;
