import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Command = React.forwardRef(function Command(props, ref) {
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
      <path d="M17.926 2a4.074 4.074 0 110 8.148h-1.852v3.703h1.852a4.074 4.074 0 11-4.074 4.075l-.001-1.852h-3.703v1.852a4.074 4.074 0 11-4.074-4.074l1.851-.001v-3.703h-1.85a4.074 4.074 0 114.073-4.074v1.851h3.703v-1.85A4.074 4.074 0 0117.927 2zm-10 14.074H6.074a1.852 1.852 0 101.852 1.852v-1.852zm10 0h-1.852v1.852a1.852 1.852 0 101.852-1.852zm-4.074-5.926h-3.704v3.704h3.704v-3.704zM6.074 4.222a1.852 1.852 0 000 3.704h1.852V6.074c0-1.023-.83-1.852-1.852-1.852zm11.852 0c-1.023 0-1.852.83-1.852 1.852v1.852h1.852a1.852 1.852 0 100-3.704z" />
    </svg>
  );
});

Command.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Command.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Command.name = Command.render.name || 'Command';

export default Command;
