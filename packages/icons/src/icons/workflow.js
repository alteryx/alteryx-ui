import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Workflow = React.forwardRef(function Workflow(props, ref) {
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
      <path d="M16.533 2.065a2.1 2.1 0 012.97 0l2.467 2.468a2.1 2.1 0 010 2.97L19.503 9.97c-.13.13-.273.239-.424.328v3.6a4.396 4.396 0 01-1.1 8.65 4.394 4.394 0 01-1.1-8.65l-.001-3.649a2.108 2.108 0 01-.345-.279l-2.468-2.468c-.13-.13-.239-.272-.327-.423h-3.68a4.401 4.401 0 01-3.154 3.154l-.001 3.892h.829a2.1 2.1 0 012.094 1.95l.006.15v3.856a2.1 2.1 0 01-2.1 2.1H3.876a2.1 2.1 0 01-2.1-2.1v-3.855c0-1.16.94-2.1 2.1-2.1l.827-.001v-3.892a4.396 4.396 0 01-3.288-4.042L1.41 5.98a4.394 4.394 0 018.649-1.101h3.727c.079-.122.172-.238.28-.345zm1.446 13.895a2.194 2.194 0 100 4.387 2.194 2.194 0 000-4.387zm-10.348.365H3.975v3.656h3.656v-3.656zM18.018 3.69l-2.326 2.326 2.326 2.326 2.326-2.327-2.326-2.325zm-12.214.094a2.194 2.194 0 100 4.387 2.194 2.194 0 000-4.387z" />
    </svg>
  );
});

Workflow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Workflow.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Workflow.name = Workflow.render.name || 'Workflow';

export default Workflow;
