import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Delete = React.forwardRef(function Delete(props, ref) {
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
      <path d="M20.907 3A3.088 3.088 0 0124 6.082v11.836A3.088 3.088 0 0120.907 21H8.041c-.32 0-.626-.138-.838-.379l-6.928-7.89a1.107 1.107 0 010-1.462l6.928-7.89c.212-.24.517-.379.838-.379h12.866zm0 2.22H8.547L2.592 12l5.953 6.78h12.361a.865.865 0 00.866-.862V6.082a.865.865 0 00-.866-.863zm-2.182 3.036a1.107 1.107 0 010 1.57L16.543 12l2.182 2.174a1.107 1.107 0 010 1.57 1.116 1.116 0 01-1.574 0l-2.182-2.175-2.182 2.175a1.116 1.116 0 01-1.574 0 1.107 1.107 0 010-1.57L13.394 12l-2.181-2.174a1.107 1.107 0 010-1.57 1.116 1.116 0 011.574 0l2.182 2.174 2.182-2.174a1.116 1.116 0 011.574 0z" />
    </svg>
  );
});

Delete.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Delete.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Delete.name = Delete.render.name || 'Delete';

export default Delete;
