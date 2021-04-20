import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const GridView = React.forwardRef(function GridView(props, ref) {
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
      <path d="M20.9 12.9A1.1 1.1 0 0122 14v6.9a1.1 1.1 0 01-1.1 1.1H14a1.1 1.1 0 01-1.1-1.1V14a1.1 1.1 0 011.1-1.1zm-10.9 0a1.1 1.1 0 011.1 1.1v6.9A1.1 1.1 0 0110 22H3.1A1.1 1.1 0 012 20.9V14a1.1 1.1 0 011.1-1.1zm9.8 2.2h-4.7v4.7h4.7v-4.7zm-10.9 0H4.2v4.7h4.7v-4.7zM10 2a1.1 1.1 0 011.1 1.1V10a1.1 1.1 0 01-1.1 1.1H3.1A1.1 1.1 0 012 10V3.1A1.1 1.1 0 013.1 2zm10.9 0A1.1 1.1 0 0122 3.1V10a1.1 1.1 0 01-1.1 1.1H14a1.1 1.1 0 01-1.1-1.1V3.1A1.1 1.1 0 0114 2zm-12 2.2H4.2v4.7h4.7V4.2zm10.9 0h-4.7v4.7h4.7V4.2z" />
    </svg>
  );
});

GridView.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GridView.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
GridView.name = GridView.render.name || 'GridView';

export default GridView;
