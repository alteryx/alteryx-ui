import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Blocks = React.forwardRef(function Blocks(props, ref) {
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
      <path d="M11.545 1.339a1.1 1.1 0 01.91 0l5.45 2.477a1.1 1.1 0 01.645 1.001l-.001 5.237 4.806 2.185a1.1 1.1 0 01.638.873l.007.128v5.945a1.1 1.1 0 01-.645 1.002l-5.45 2.477a1.1 1.1 0 01-.91 0L12 20.393l-4.995 2.271a1.1 1.1 0 01-.784.048l-.126-.048-5.45-2.477A1.1 1.1 0 010 19.185V13.24a1.1 1.1 0 01.645-1.001l4.804-2.185.001-5.237a1.1 1.1 0 01.531-.941l.114-.06zm-.646 14.104l-3.894 1.771a1.1 1.1 0 01-.784.048l-.126-.048L2.2 15.443v3.034l4.35 1.977 4.35-1.977-.001-3.034zm10.901 0l-3.895 1.771a1.1 1.1 0 01-.784.048l-.126-.048-3.895-1.771v3.034l4.35 1.977 4.35-1.977v-3.034zM6.55 11.971l-3.337 1.517 3.337 1.516 3.336-1.517-3.336-1.516zm10.9 0l-3.337 1.517 3.337 1.516 3.337-1.517-3.337-1.516zm-1.101-4.95l-3.894 1.77a1.1 1.1 0 01-.784.049l-.126-.049-3.896-1.77.001 3.033L12 12.031l.131-.06 4.219-1.917-.001-3.033zM12 3.548L8.662 5.064 12 6.581l3.336-1.516L12 3.548z" />
    </svg>
  );
});

Blocks.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Blocks.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Blocks.name = Blocks.render.name || 'Blocks';

export default Blocks;
