import React from 'react';
import { render, screen } from '@testing-library/react';

import AyxAppWrapper from '../../AyxAppWrapper';
import Tooltip from '../index';
import Button from '../../Button';

describe('Tooltip', () => {
  it('displays an arrow when the title prop is an element', () => {
    const props = {
      arrow: true,
      // eslint-disable-next-line ui-core/no-empty-divs
      title: <div>Arrow</div>,
      open: true
    };
    const expected = true;
    render(
      <AyxAppWrapper>
        <Tooltip {...props}>
          <Button>Arrow</Button>
        </Tooltip>
      </AyxAppWrapper>
    );
    const actual = screen.getByRole('tooltip').className.includes('MuiTooltip-popperArrow');
    expect(actual).toBe(expected);
  });

  it('does not display an arrow when the arrow prop is false', () => {
    const props = {
      arrow: false,
      title: 'Arrow',
      open: true
    };

    render(
      <AyxAppWrapper>
        <Tooltip {...props}>
          <Button>Arrow</Button>
        </Tooltip>
      </AyxAppWrapper>
    );
    const expected = false;
    const actual = screen.getByRole('tooltip').className.includes('MuiTooltip-popperArrow');
    expect(actual).toBe(expected);
  });

  it('does not display a tooltip when the arrow prop is true and title is empty', () => {
    const props = {
      arrow: true,
      title: '',
      open: true
    };
    render(
      <AyxAppWrapper>
        <Tooltip {...props}>
          <Button>Arrow</Button>
        </Tooltip>
      </AyxAppWrapper>
    );
    const actual = screen.queryByRole('tooltip');
    expect(actual).toBe(null);
  });
});
