import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Printer = React.forwardRef(function Printer(props, ref) {
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
      <path d="M17.933 1c.614 0 1.112.498 1.112 1.112l-.001 5.809h.866a3.09 3.09 0 013.09 3.09v4.944a3.09 3.09 0 01-3.09 3.09l-.866-.001v2.844c0 .614-.497 1.112-1.111 1.112H6.067a1.112 1.112 0 01-1.112-1.112v-2.844H4.09A3.09 3.09 0 011 15.956v-4.944a3.09 3.09 0 013.09-3.09h.865V2.112C4.955 1.498 5.453 1 6.067 1h11.866zM16.82 15.09H7.18v5.685h9.64V15.09zm3.09-4.944H4.09a.865.865 0 00-.865.865v4.944c0 .478.387.865.865.865h.865v-2.842c0-.615.498-1.113 1.112-1.113h11.866c.614 0 1.112.498 1.112 1.113l-.001 2.842h.866a.865.865 0 00.865-.865v-4.944a.865.865 0 00-.865-.865zm-3.09-6.921H7.18L7.179 7.92h9.641V3.225z" />
    </svg>
  );
});

Printer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Printer.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Printer.name = Printer.render.name || 'Printer';

export default Printer;
