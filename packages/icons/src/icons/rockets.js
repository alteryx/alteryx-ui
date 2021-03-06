import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Rockets = React.forwardRef(function Rockets(props, ref) {
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
      <path d="M23.277 4.153c.467 2.348.042 4.705-1.25 7.03-1.12 2.016-2.789 3.828-4.995 5.438l-.425.303-.068.603a5.575 5.575 0 01-1.9 3.606l-.218.179a3.241 3.241 0 01-3.402.359c-1.805 1.44-4.11 2-6.844 1.689a1.1 1.1 0 01-.975-1.12l.021-.646.03-.554.02-.255c-.561.018-1.144-.009-1.747-.077a1.1 1.1 0 01-.976-1.052c-.093-2.519.584-4.681 2.024-6.435a3.241 3.241 0 01.362-3.396 5.575 5.575 0 013.506-2.08l.279-.039.61-.068c1.66-2.335 3.308-4.072 4.965-5.213l.31-.207.295-.182C14.914.826 17.182.356 19.664.623a1.1 1.1 0 01.961.879c.115.577.176 1.154.183 1.731l.536.005c.282.005.583.016.906.031a1.1 1.1 0 011.027.884zM4.567 15.471l-.539-.54-.18.263c-.538.821-.88 1.747-1.026 2.787l-.041.352-.02.255.242.003c1.262-.007 2.346-.275 3.271-.803l.248-.15.127-.086-.527-.526-.216.218a1.1 1.1 0 01-1.636-1.466l.08-.09.217-.217zM9.3 20.205L8.225 19.13a7.867 7.867 0 01-2.71 1.332c-.016.119-.03.25-.043.394l-.03.384.213.003c1.436-.008 2.643-.355 3.646-1.038zM21.242 5.493l-.005-.057-.497-.002c-.057 0-.112 0-.166.002-.227 1.036-.628 2.069-1.199 3.096-1.05 1.89-2.582 3.6-4.588 5.133l-.407.305-.425.302-.067.603a5.575 5.575 0 01-1.693 3.419l-.208.188-.217.178a3.248 3.248 0 01-.556.349l.482.48c.371.372.96.408 1.375.086a3.375 3.375 0 001.252-2.084l.03-.207.123-1.105a1.1 1.1 0 01.483-.794c2.356-1.57 4.066-3.328 5.145-5.27.872-1.57 1.247-3.103 1.138-4.622zm-2.66-2.74l-.199-.003c-1.594-.008-3.037.383-4.352 1.172-1.654.992-3.389 2.783-5.18 5.38a1.1 1.1 0 01-.65.445l-.134.023-1.105.123c-.906.1-1.732.563-2.292 1.282a1.04 1.04 0 00.006 1.285l.08.09 4.288 4.288c.371.371.96.408 1.375.086a3.375 3.375 0 001.253-2.084l.03-.208.122-1.105a1.1 1.1 0 01.483-.794c2.357-1.57 4.066-3.328 5.145-5.27.814-1.465 1.195-2.898 1.154-4.318l-.016-.304-.008-.088zm-2.741 2.775a1.406 1.406 0 11-1.99 1.989 1.406 1.406 0 011.99-1.989z" />
    </svg>
  );
});

Rockets.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Rockets.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Rockets.name = Rockets.render.name || 'Rockets';

export default Rockets;
