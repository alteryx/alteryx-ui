import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Home = React.forwardRef(function Home(props, ref) {
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
      <path d="M5.086 23A3.088 3.088 0 012 19.91V9.034c0-.344.158-.668.429-.878l8.889-6.922a1.11 1.11 0 011.364 0l8.889 6.922c.27.21.429.534.429.878V19.91A3.088 3.088 0 0118.914 23H5.086zM12 3.522L4.222 9.578V19.91c0 .478.387.865.864.865h2.839V12c0-.614.498-1.112 1.112-1.112h5.926c.614 0 1.111.498 1.111 1.112v8.775h2.84a.865.865 0 00.864-.865V9.578L12 3.522zm1.852 9.59h-3.704v7.663h3.703v-7.663z" />
    </svg>
  );
});

Home.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Home.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Home.name = Home.render.name || 'Home';

export default Home;
