import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Unlink = React.forwardRef(function Unlink(props, ref) {
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
      <path d="M15.745 19.974c.61 0 1.104.494 1.104 1.104v1.819a1.103 1.103 0 01-2.207 0v-1.82c0-.609.494-1.103 1.103-1.103zM7.438 9.482a1.1 1.1 0 01.085 1.46l-.085.096-3.187 3.186a3.9 3.9 0 00.048 5.467 3.898 3.898 0 005.293.207l.16-.146 3.21-3.21a1.1 1.1 0 011.641 1.46l-.085.096-3.224 3.223a6.1 6.1 0 01-8.786-8.45l.174-.189 3.2-3.2a1.1 1.1 0 011.556 0zm11.307 7.702l3.051 3.052a1.103 1.103 0 11-1.56 1.56l-3.052-3.051a1.103 1.103 0 011.56-1.56zm4.152-2.542a1.103 1.103 0 110 2.207h-1.82a1.103 1.103 0 010-2.207h1.82zm-1.64-11.889a6.103 6.103 0 01.235 8.377l-.174.188-3.2 3.2a1.1 1.1 0 01-1.641-1.46l.085-.096 3.187-3.186a3.9 3.9 0 00-.048-5.467 3.898 3.898 0 00-5.294-.206l-.16.146-3.22 3.21a1.1 1.1 0 01-1.64-1.462l.086-.096 3.233-3.222a6.1 6.1 0 018.55.074zM2.922 7.151a1.103 1.103 0 010 2.207H1.103a1.103 1.103 0 010-2.207h1.82zm.842-4.947l3.052 3.051a1.103 1.103 0 11-1.56 1.56l-3.052-3.05a1.103 1.103 0 011.56-1.561zM8.254 0c.61 0 1.104.494 1.104 1.103v1.82a1.103 1.103 0 01-2.207 0v-1.82C7.151.494 7.645 0 8.255 0z" />
    </svg>
  );
});

Unlink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Unlink.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Unlink.name = Unlink.render.name || 'Unlink';

export default Unlink;
