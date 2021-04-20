import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Inbox = React.forwardRef(function Inbox(props, ref) {
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
      <path d="M23 17.918A3.086 3.086 0 0119.91 21H4.09A3.086 3.086 0 011 17.918V12c0-.085.01-.168.028-.248l.01-.037a.981.981 0 01.07-.194l.01-.018 3.41-6.794A3.09 3.09 0 017.293 3h9.414a3.09 3.09 0 012.764 1.708l3.411 6.795.01.018c.01.022.02.044.028.066l-.038-.084a1.108 1.108 0 01.081.212l.009.037c.018.08.028.163.028.248v5.918zm-19.775 0c0 .476.387.863.865.863h15.82a.864.864 0 00.865-.863v-4.809H16.55l-1.647 2.465a1.113 1.113 0 01-.925.494h-3.956c-.371 0-.719-.185-.925-.494L7.45 13.11l-4.226-.001v4.809zM16.707 5.219H7.294a.865.865 0 00-.774.48L3.913 10.89h4.132c.372 0 .72.186.925.495l1.648 2.464h2.764l1.648-2.464c.206-.31.553-.495.925-.495h4.131L17.48 5.698a.865.865 0 00-.773-.479z" />
    </svg>
  );
});

Inbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Inbox.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Inbox.name = Inbox.render.name || 'Inbox';

export default Inbox;
