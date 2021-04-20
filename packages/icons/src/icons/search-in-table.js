import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const SearchInTable = React.forwardRef(function SearchInTable(props, ref) {
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
      <path d="M14.3175,1.995 C19.1845094,1.995 23.13,5.94049064 23.13,10.8075 C23.13,13.0423364 22.2981058,15.0828735 20.9270885,16.63634 L23.6168161,19.3258259 C24.056156,19.7651657 24.056156,20.4774763 23.6168161,20.9168161 C23.2174163,21.316216 22.5924208,21.352525 22.1520035,21.0257434 L22.0258259,20.9168161 L19.2319332,18.1235403 C17.8279514,19.0685033 16.1371302,19.62 14.3175,19.62 C9.45049064,19.62 5.505,15.6745094 5.505,10.8075 C5.505,5.94049064 9.45049064,1.995 14.3175,1.995 Z M14.3175,4.245 C10.6931313,4.245 7.755,7.18313133 7.755,10.8075 C7.755,14.4318687 10.6931313,17.37 14.3175,17.37 C17.9418687,17.37 20.88,14.4318687 20.88,10.8075 C20.88,7.18313133 17.9418687,4.245 14.3175,4.245 Z M4.5,15 C5.12132034,15 5.625,15.5036797 5.625,16.125 C5.625,16.6945436 5.20176918,17.1652364 4.65265584,17.2397301 L4.5,17.25 L1.125,17.25 C0.503679656,17.25 4.54747351e-13,16.7463203 4.54747351e-13,16.125 C4.54747351e-13,15.5554564 0.423230822,15.0847636 0.972344164,15.0102699 L1.125,15 L4.5,15 Z M3.075,10.125 C3.69632034,10.125 4.2,10.6286797 4.2,11.25 C4.2,11.8195436 3.77676918,12.2902364 3.22765584,12.3647301 L3.075,12.375 L1.125,12.375 C0.503679656,12.375 4.54747351e-13,11.8713203 4.54747351e-13,11.25 C4.54747351e-13,10.6804564 0.423230822,10.2097636 0.972344164,10.1352699 L1.125,10.125 L3.075,10.125 Z M3.825,5.25 C4.44632034,5.25 4.95,5.75367966 4.95,6.375 C4.95,6.94454365 4.52676918,7.41523644 3.97765584,7.48973008 L3.825,7.5 L1.125,7.5 C0.503679656,7.5 4.54747351e-13,6.99632034 4.54747351e-13,6.375 C4.54747351e-13,5.80545635 0.423230822,5.33476356 0.972344164,5.26026992 L1.125,5.25 L3.825,5.25 Z" />
    </svg>
  );
});

SearchInTable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SearchInTable.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
SearchInTable.name = SearchInTable.render.name || 'SearchInTable';

export default SearchInTable;
