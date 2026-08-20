import React from 'react';
import { DesignerApi, Context } from '@alteryx/react-comms';
import renderToContainer from '../../test-utils/renderToContainer';
import Button from '../index';

describe('react-comms integration smoke test', () => {
  it('imports @alteryx/react-comms cleanly alongside @alteryx/ui', () => {
    expect(typeof DesignerApi).toBe('function');
    expect(Context).toBeTruthy();
  });

  it('renders a UI component inside a react-comms Context without throwing', () => {
    const container = renderToContainer(
      <Context.Provider value={{}}>
        <Button>Click me</Button>
      </Context.Provider>
    );

    expect(container.querySelector('button')).not.toBeNull();
  });
});
