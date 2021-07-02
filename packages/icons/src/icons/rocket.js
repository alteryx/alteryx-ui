import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Rocket = React.forwardRef(function Rocket(props, ref) {
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
      <path d="M21.945 2.832c.467 2.348.042 4.705-1.25 7.03-1.05 1.89-2.582 3.6-4.588 5.133l-.407.305-.425.302-.067.603a5.575 5.575 0 01-1.693 3.419l-.208.188-.217.178a3.241 3.241 0 01-3.403.36c-1.804 1.439-4.109 1.999-6.843 1.688a1.1 1.1 0 01-.976-1.052c-.093-2.519.584-4.681 2.024-6.435a3.241 3.241 0 01.362-3.396 5.575 5.575 0 013.506-2.08l.279-.039.61-.068c1.66-2.335 3.308-4.072 4.965-5.213l.31-.207.295-.182c2.015-1.21 4.283-1.68 6.765-1.413a1.1 1.1 0 01.961.879zM5.887 16.8l-.539-.54-.18.263c-.538.821-.88 1.747-1.026 2.787l-.041.352-.02.255.242.003c1.262-.007 2.346-.275 3.271-.803l.248-.15.127-.086-.527-.526-.216.218a1.1 1.1 0 01-1.636-1.466l.08-.09.217-.217zM19.902 4.083l-.199-.003c-1.594-.008-3.037.383-4.352 1.172-1.654.992-3.389 2.783-5.18 5.38a1.1 1.1 0 01-.65.445l-.134.023-1.105.123c-.906.1-1.732.563-2.292 1.282a1.04 1.04 0 00.006 1.285l.08.09 4.288 4.288c.371.371.96.408 1.375.086a3.375 3.375 0 001.253-2.084l.03-.208.122-1.105a1.1 1.1 0 01.483-.794c2.357-1.57 4.066-3.328 5.145-5.27.814-1.465 1.195-2.898 1.154-4.318l-.016-.304-.008-.088zm-2.741 2.775a1.406 1.406 0 11-1.99 1.989 1.406 1.406 0 011.99-1.989z" />
    </svg>
  );
});

Rocket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Rocket.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Rocket.name = Rocket.render.name || 'Rocket';

export default Rocket;
