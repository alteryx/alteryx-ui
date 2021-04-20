import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Link = React.forwardRef(function Link(props, ref) {
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
      <path d="M9.117 13.665a1.12 1.12 0 011.79-1.34 3.85 3.85 0 005.809.416l2.968-2.97a3.857 3.857 0 00-.047-5.404 3.846 3.846 0 00-5.387-.058l-1.71 1.7a1.118 1.118 0 11-1.577-1.586l1.721-1.713a6.085 6.085 0 018.535.074c2.348 2.35 2.381 6.15.06 8.555l-2.982 2.984a6.085 6.085 0 01-9.18-.658zm5.766-3.33a1.12 1.12 0 01-1.79 1.34 3.85 3.85 0 00-5.809-.416l-2.968 2.97a3.857 3.857 0 00.047 5.404c1.485 1.487 3.888 1.508 5.385.06l1.7-1.7a1.118 1.118 0 111.581 1.582l-1.713 1.715a6.085 6.085 0 01-8.535-.074c-2.348-2.35-2.381-6.15-.06-8.555l2.982-2.984a6.085 6.085 0 019.18.658z" />
    </svg>
  );
});

Link.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Link.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Link.name = Link.render.name || 'Link';

export default Link;
