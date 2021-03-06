import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Image = React.forwardRef(function Image(props, ref) {
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
      <path d="M17.926 2A4.074 4.074 0 0122 6.074v11.852A4.074 4.074 0 0117.926 22H6.074A4.074 4.074 0 012 17.926V6.074A4.074 4.074 0 016.074 2h11.852zm-1.975 9.596l-8.183 8.183 10.158-.001c1.023 0 1.852-.83 1.852-1.852l-.001-2.504-3.826-3.826zm1.975-7.374H6.074c-1.023 0-1.852.83-1.852 1.852v11.852c0 .615.3 1.16.761 1.496L15.165 9.24a1.111 1.111 0 011.571 0l3.041 3.041V6.074c0-1.023-.828-1.852-1.851-1.852zM8.543 5.951a2.593 2.593 0 110 5.185 2.593 2.593 0 010-5.185zm-.01 1.745a.795.795 0 10-.028 1.59.795.795 0 00.028-1.59z" />
    </svg>
  );
});

Image.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Image.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Image.name = Image.render.name || 'Image';

export default Image;
