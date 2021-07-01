import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Layout = React.forwardRef(function Layout(props, ref) {
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
      <path d="M17.926 2A4.074 4.074 0 0122 6.074v11.852A4.074 4.074 0 0117.926 22H6.074A4.074 4.074 0 012 17.926V6.074A4.074 4.074 0 016.074 2h11.852zM7.925 10.148H4.222v7.778c0 1.023.83 1.852 1.852 1.852l1.851-.001v-9.629zm11.852 0h-9.629v9.629h7.778c1.023 0 1.852-.828 1.852-1.851l-.001-7.778zm-1.851-5.926H6.074c-1.023 0-1.852.83-1.852 1.852v1.851h15.555v-1.85c0-1.024-.828-1.853-1.851-1.853z" />
    </svg>
  );
});

Layout.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Layout.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Layout.name = Layout.render.name || 'Layout';

export default Layout;
