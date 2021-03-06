import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Slack = React.forwardRef(function Slack(props, ref) {
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
      <path d="M23.055 8.712c2.421 8.04.315 11.912-7.761 14.343-8.044 2.42-11.917.315-14.349-7.759C-1.476 7.255.63 3.383 8.706.952c8.066-2.428 11.925-.342 14.349 7.76zM9.349 3.086C2.446 5.164 1.015 7.796 3.08 14.654c2.078 6.9 4.711 8.331 11.571 6.267 6.903-2.078 8.334-4.71 6.269-11.568-2.072-6.926-4.687-8.339-11.571-6.267zm4.27 2.602l.604 1.758 1.764-.607a1.115 1.115 0 01.725 2.107l-1.763.607.884 2.566 1.759-.605a1.115 1.115 0 01.725 2.108l-1.759.604.608 1.763a1.114 1.114 0 11-2.108.725l-.608-1.762-2.566.883.605 1.759a1.114 1.114 0 11-2.108.725l-.606-1.759-1.762.608a1.115 1.115 0 01-.725-2.108l1.762-.607-.884-2.566-1.758.605a1.115 1.115 0 01-.725-2.107L7.44 9.78l-.607-1.762a1.114 1.114 0 112.108-.726l.607 1.762 2.566-.883-.604-1.758a1.114 1.114 0 112.108-.725zm-.778 4.59l-2.567.883.884 2.567 2.567-.883-.884-2.567z" />
    </svg>
  );
});

Slack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Slack.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Slack.name = Slack.render.name || 'Slack';

export default Slack;
