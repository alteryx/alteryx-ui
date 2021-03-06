import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Feedback = React.forwardRef(function Feedback(props, ref) {
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
      <path d="M4.08 13.971c1.314.165 3.13.236 5.293.222 2.26-.015 5.056-.14 6.91-.264-.156-1.133-.485-2.645-.91-4.178-.46-1.664-.994-3.206-1.49-4.292a11.635 11.635 0 00-.19-.397c-.347.223-.754.507-1.205.842-1.311.974-2.9 2.313-4.414 3.718-1.577 1.465-2.96 2.897-3.894 4.044l-.23.288.13.017zM14.496 4.61a1.32 1.32 0 00-.023.01l.023-.01zM1.029 15.121C.34 13.004 12.249 2.42 14.197 2.42c1.948 0 5.383 13.407 4.04 13.57-1.343.164-16.521 1.248-17.208-.869zm3.202 3.335a1.064 1.064 0 011.488.353l2.126 3.494c.316.52.162 1.204-.344 1.528a1.064 1.064 0 01-1.488-.353l-2.126-3.493a1.127 1.127 0 01.344-1.529zM20.843 1.285c.443.41.48 1.111.08 1.566L19.27 4.735a1.06 1.06 0 01-1.525.083 1.13 1.13 0 01-.08-1.567l1.652-1.884a1.06 1.06 0 011.525-.082zm2.61 5.178a1.119 1.119 0 01-.62 1.433l-2.306.908a1.072 1.072 0 01-1.395-.638 1.119 1.119 0 01.621-1.433l2.305-.908a1.072 1.072 0 011.395.638zm.402 7.113c-.298.53-.959.712-1.475.406l-2.138-1.268a1.126 1.126 0 01-.396-1.515c.299-.53.96-.712 1.476-.406l2.138 1.268c.516.306.693.985.395 1.515z" />
    </svg>
  );
});

Feedback.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Feedback.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Feedback.name = Feedback.render.name || 'Feedback';

export default Feedback;
