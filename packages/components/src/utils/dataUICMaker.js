import React from 'react';
import { kebabCase } from 'lodash';

const dataUICMaker = (Component, componentName) => {
  const WrappedComponent = React.forwardRef((props, ref) => (
    <Component ref={ref} {...props} data-uic={kebabCase(componentName)} />
  ));

  WrappedComponent.muiName = Component.muiName ? Component.muiName : componentName;

  WrappedComponent.displayName = Component.displayName;

  return WrappedComponent;
};

export default dataUICMaker;
