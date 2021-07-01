import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const HardDrive = React.forwardRef(function HardDrive(props, ref) {
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
      <path d="M23 17.918A3.086 3.086 0 0119.91 21H4.09A3.086 3.086 0 011 17.918V12c0-.085.01-.168.028-.248l.01-.037a.981.981 0 01.07-.194l.01-.018 3.41-6.794A3.09 3.09 0 017.293 3h9.414a3.09 3.09 0 012.764 1.708l3.411 6.795.01.018c.01.022.02.044.028.066l-.038-.084a1.108 1.108 0 01.081.212l.009.037c.018.08.028.163.028.248v5.918zm-2.225-4.809H3.224v4.809c0 .476.388.863.866.863h15.82a.864.864 0 00.865-.863v-4.809zm-4.068-7.89H7.294a.865.865 0 00-.774.48L3.913 10.89h16.173L17.48 5.698a.865.865 0 00-.773-.479z" />
    </svg>
  );
});

HardDrive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HardDrive.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
HardDrive.name = HardDrive.render.name || 'HardDrive';

export default HardDrive;
