import React from 'react';
import { number } from 'prop-types';

import NumericInputWrapper from './NumericInputWrapper';

// Note: this is for tests
export default class RenderNumericInputWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue
    };
  }

  render() {
    const { value } = this.state;

    return (
      <NumericInputWrapper onChange={newValue => this.setState({ value: newValue })} {...this.props} value={value} />
    );
  }
}

RenderNumericInputWrapper.propTypes = {
  defaultValue: number
};

RenderNumericInputWrapper.defaultProps = {
  defaultValue: 0
};
