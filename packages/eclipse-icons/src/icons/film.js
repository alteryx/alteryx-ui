import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Film = React.forwardRef(function Film(props, ref) {
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
      <path d="M18.654 1C21.054 1 23 2.946 23 5.346v13.308c0 2.4-1.946 4.346-4.346 4.346H5.346A4.346 4.346 0 011 18.654V5.346C1 2.946 2.946 1 5.346 1h13.308zM5.943 18.056H3.224v.598c0 1.172.95 2.121 2.122 2.121h.597v-2.719zm9.888-4.944H8.168v7.663h7.663v-7.663zm4.944 4.944h-2.719v2.719h.598a2.12 2.12 0 002.121-2.12v-.599zm0-4.944h-2.719v2.719h2.719v-2.719zm-14.832 0H3.224v2.719h2.719v-2.719zm0-4.944H3.224v2.719h2.719V8.168zm9.888-4.944H8.168v7.663h7.663V3.224zm4.944 4.944h-2.719v2.719h2.719V8.168zm-2.12-4.943l-.599-.001v2.719h2.719v-.597a2.12 2.12 0 00-2.12-2.121zM5.942 3.224h-.597a2.12 2.12 0 00-2.121 2.122l-.001.597h2.719V3.224z" />
    </svg>
  );
});

Film.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Film.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Film.name = Film.render.name || 'Film';

export default Film;
