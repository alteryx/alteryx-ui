import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const ArrowDownCircle = React.forwardRef(function ArrowDownCircle(props, ref) {
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
      <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2.225a8.775 8.775 0 100 17.55 8.775 8.775 0 000-17.55zm0 3.708c.614 0 1.112.498 1.112 1.112v5.224l2.056-2.056a1.112 1.112 0 011.574 1.574l-3.955 3.955-.019.018-.047.042.066-.06a1.122 1.122 0 01-.666.319l-.121.006c-.04 0-.081-.002-.122-.006l-.117-.02a1.104 1.104 0 01-.548-.3l-3.955-3.954a1.112 1.112 0 011.574-1.574l2.055 2.055V8.045c0-.614.499-1.112 1.113-1.112z" />
    </svg>
  );
});

ArrowDownCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowDownCircle.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
ArrowDownCircle.name = ArrowDownCircle.render.name || 'ArrowDownCircle';

export default ArrowDownCircle;
