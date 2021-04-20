import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const DataTypeInteger = React.forwardRef(function DataTypeInteger(props, ref) {
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
      <path d="M19.4 12a3.6 3.6 0 013.6 3.6c0 .821-.264 1.494-.72 2 .455.505.72 1.178.72 2a3.6 3.6 0 01-3.6 3.6c-1.451 0-2.935-.879-3.504-2.151a1.1 1.1 0 011.954-1.005l.054.107.055.102c.25.404.872.747 1.441.747a1.4 1.4 0 001.4-1.4c0-.587-.432-.9-1.4-.9a1.1 1.1 0 01-.12-2.194l.12-.006c.968 0 1.4-.313 1.4-.9a1.4 1.4 0 00-1.4-1.4c-.587 0-1.201.325-1.443.712l-.053.098a1.1 1.1 0 11-2.008-.898C16.464 12.842 17.94 12 19.4 12zM4.85 6l.09.004.076.008a1.224 1.224 0 01.218.057 1.03 1.03 0 01.246.13l.023.016a.892.892 0 01.134.117 1.156 1.156 0 01.064.071l.017.022c.015.019.03.039.043.059l-.012-.017.037.055a1.087 1.087 0 01.09.18l.006.015.012.035.01.032c.03.1.045.202.046.305V16.6a1.1 1.1 0 01-2.194.12l-.006-.12V9.42l-.953.781a1.1 1.1 0 01-1.488-1.615l.094-.087 2.75-2.25.001-.002.024-.018.027-.02.007-.005-.006.004.014-.01.052-.034c.025-.016.05-.03.077-.044l.025-.012c.026-.012.052-.024.079-.034l.014-.005.035-.013a1.091 1.091 0 01.225-.05h.003L4.84 6h.011zm7.252-5a3.6 3.6 0 013.6 3.6c0 1.342-1.023 2.999-3.068 5.12l-.276.28h2.744a1.1 1.1 0 011.094.98l.006.12a1.1 1.1 0 01-.98 1.094l-.12.006h-5.5c-1.008 0-1.485-1.243-.736-1.918l.562-.512c2.716-2.516 4.074-4.334 4.074-5.17a1.4 1.4 0 00-2.655-.622l-.053.12a1.1 1.1 0 11-2.054-.787A3.6 3.6 0 0112.102 1z" />
    </svg>
  );
});

DataTypeInteger.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DataTypeInteger.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
DataTypeInteger.name = DataTypeInteger.render.name || 'DataTypeInteger';

export default DataTypeInteger;
