import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const SearchServer = React.forwardRef(function SearchServer(props, ref) {
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
      <path d="M14.925,8.175 C18.6529221,8.175 21.675,11.1970779 21.675,14.925 C21.675,16.3826373 21.2129692,17.7323614 20.4273695,18.8357106 L23.6704951,22.0795049 C24.109835,22.5188447 24.109835,23.2311553 23.6704951,23.6704951 C23.2710953,24.069895 22.6460998,24.106204 22.2056825,23.7794224 L22.0795049,23.6704951 L18.8357106,20.4273695 C17.7323614,21.2129692 16.3826373,21.675 14.925,21.675 C11.1970779,21.675 8.175,18.6529221 8.175,14.925 C8.175,11.1970779 11.1970779,8.175 14.925,8.175 Z M5.9017296,12.6370982 C6.47525607,12.6370982 6.94019114,13.1020333 6.94019114,13.6755598 C6.94019114,14.2012924 6.54951654,14.635778 6.04264268,14.7045414 L5.9017296,14.7140213 L4.46916222,14.7140213 C4.02181157,14.7140213 3.65069209,15.0404057 3.5809417,15.4680366 L3.56916222,15.6140213 L3.56916222,19.5370982 C3.56916222,19.9844489 3.89554664,20.3555684 4.32317755,20.4253187 L4.46916222,20.4370982 L8.56114379,20.4370982 C9.13467027,20.4370982 9.59960533,20.9020333 9.59960533,21.4755598 C9.59960533,22.0012924 9.20893073,22.435778 8.70205687,22.5045414 L8.56114379,22.5140213 L4.46916222,22.5140213 C2.89978524,22.5140213 1.61404721,21.2996186 1.50040445,19.7592695 L1.49223915,19.5370982 L1.49223915,15.6140213 C1.49223915,14.0446443 2.70664186,12.7589063 4.24699096,12.6452635 L4.46916222,12.6370982 L5.9017296,12.6370982 Z M14.925,10.425 C12.4397186,10.425 10.425,12.4397186 10.425,14.925 C10.425,17.4102814 12.4397186,19.425 14.925,19.425 C17.4102814,19.425 19.425,17.4102814 19.425,14.925 C19.425,12.4397186 17.4102814,10.425 14.925,10.425 Z M6.435,16.44 C7.05321089,16.44 7.55436984,16.9436797 7.55436984,17.565 C7.55436984,18.1298367 7.14018889,18.5974496 6.60041227,18.6778021 L6.435,18.69 C5.80552878,18.69 5.30436984,18.1863203 5.30436984,17.565 C5.30436984,17.0001633 5.71855078,16.5325504 6.2583274,16.4521979 L6.435,16.44 Z M19.5177,1.48960243 C21.0870769,1.48960243 22.372815,2.70400514 22.4864577,4.24435424 L22.494623,4.4665255 L22.494623,8.38960243 C22.494623,8.9631289 22.029688,9.42806396 21.4561615,9.42806396 C20.9304289,9.42806396 20.4959432,9.03738936 20.4271799,8.53051551 L20.4177,8.38960243 L20.4177,4.4665255 C20.4177,4.01917486 20.0913155,3.64805537 19.6636846,3.57830498 L19.5177,3.5665255 L4.47868547,3.5665255 C4.03133482,3.5665255 3.66021534,3.89290992 3.59046495,4.32054083 L3.57868547,4.4665255 L3.57868547,8.38960243 C3.57868547,8.83695307 3.90506988,9.20807256 4.33270079,9.27782295 L4.47868547,9.28960243 L6.98365832,9.28960243 C7.5571848,9.28960243 8.02211986,9.75453749 8.02211986,10.328064 C8.02211986,10.8537966 7.63144526,11.2882822 7.1245714,11.3570456 L6.98365832,11.3665255 L4.47868547,11.3665255 C2.90930849,11.3665255 1.62357046,10.1521228 1.5099277,8.61177369 L1.50176239,8.38960243 L1.50176239,4.4665255 C1.50176239,2.89714852 2.7161651,1.61141049 4.25651421,1.49776773 L4.47868547,1.48960243 L19.5177,1.48960243 Z M6.435,5.31109288 C7.05321089,5.31109288 7.55436984,5.81477254 7.55436984,6.43609288 C7.55436984,7.00092956 7.14018889,7.46854252 6.60041227,7.54889499 L6.435,7.56109288 C5.80552878,7.56109288 5.30436984,7.05741322 5.30436984,6.43609288 C5.30436984,5.87125621 5.71855078,5.40364324 6.2583274,5.32329077 L6.435,5.31109288 Z" />
    </svg>
  );
});

SearchServer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SearchServer.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
SearchServer.name = SearchServer.render.name || 'SearchServer';

export default SearchServer;