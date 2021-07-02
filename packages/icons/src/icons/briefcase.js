import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Briefcase = React.forwardRef(function Briefcase(props, ref) {
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
      <path d="M5.079 22A4.076 4.076 0 011 17.926v-7.901A4.076 4.076 0 015.079 5.95l1.853-.001v-.864A3.088 3.088 0 0110.023 2h3.956a3.088 3.088 0 013.09 3.086l-.001.864h1.854A4.076 4.076 0 0123 10.026v7.9A4.076 4.076 0 0118.921 22H5.08zM6.932 8.172H5.079c-1.024 0-1.854.83-1.854 1.853v7.9c0 1.024.83 1.853 1.854 1.853l1.853-.001V8.172zm7.91 0H9.157v11.605h5.685V8.172zm4.08 0h-1.855v11.605h1.854c1.024 0 1.854-.828 1.854-1.851v-7.901c0-1.023-.83-1.852-1.854-1.852zm-4.944-3.95h-3.956a.865.865 0 00-.865.864v.864h5.685v-.864a.865.865 0 00-.864-.864z" />
    </svg>
  );
});

Briefcase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Briefcase.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Briefcase.name = Briefcase.render.name || 'Briefcase';

export default Briefcase;
