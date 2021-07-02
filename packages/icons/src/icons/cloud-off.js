import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const CloudOff = React.forwardRef(function CloudOff(props, ref) {
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
      <path d="M2.018.326L20.42 18.831l.018.018 3.232 3.25c.432.435.432 1.14 0 1.575a1.103 1.103 0 01-1.566 0l-2.784-2.8a6.002 6.002 0 01-1.354.157h-8.84c-4.122.067-7.76-2.697-8.822-6.703a9.061 9.061 0 013.13-9.43L.452 1.902a1.118 1.118 0 010-1.575 1.103 1.103 0 011.566 0zm.426 13.428a6.777 6.777 0 006.664 5.05h8.154L5.015 6.488a6.825 6.825 0 00-2.571 7.266zm7.44-10.78a8.99 8.99 0 017.66 5.933h.42a6.02 6.02 0 015.031 2.711 6.091 6.091 0 01.528 5.715c-.239.566-.889.831-1.452.591a1.116 1.116 0 01-.587-1.46 3.853 3.853 0 00-.334-3.615 3.809 3.809 0 00-3.184-1.715h-1.24c-.507 0-.949-.346-1.073-.84A6.777 6.777 0 009.69 5.193a1.112 1.112 0 01-1.005-1.207 1.109 1.109 0 011.2-1.012z" />
    </svg>
  );
});

CloudOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudOff.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
CloudOff.name = CloudOff.render.name || 'CloudOff';

export default CloudOff;
