import React from 'react';
import { Activity } from '@alteryx/icons';
import renderToContainer from '../../test-utils/renderToContainer';
import Button from '../index';

describe('Button smoke test', () => {
  it('renders a button with an icon without throwing', () => {
    const container = renderToContainer(
      <Button startIcon={<Activity />}>Click me</Button>
    );

    expect(container.querySelector('button')).not.toBeNull();
    expect(container.querySelector('svg')).not.toBeNull();
    expect(container.textContent).toContain('Click me');
  });
});
