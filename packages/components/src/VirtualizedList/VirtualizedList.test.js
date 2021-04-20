import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import VirtualizedList from './index';

describe('VirtualizedList', () => {
  it('renders', () => {
    const { container } = render(<VirtualizedList />);
    expect(container.querySelector('[data-uic="virtualized-list"]')).toBeInTheDocument();
  });

  it('renders data when itemData is array of react nodes', () => {
    const OPTIONS = [<span>Toasty!</span>, <span>Hello World!</span>];
    const { getByText } = render(
      <VirtualizedList height={20} itemCount={OPTIONS.length} itemData={OPTIONS} width={100} />
    );
    expect(getByText('Toasty!')).toBeVisible();
    expect(getByText('Hello World!')).toBeVisible();
  });

  it('renders data when itemData is array of strings', () => {
    const OPTIONS = ['Toasty!', 'Hello World!'];
    const { getByText } = render(
      <VirtualizedList height={20} itemCount={OPTIONS.length} itemData={OPTIONS} width={100} />
    );
    expect(getByText('Toasty!')).toBeVisible();
    expect(getByText('Hello World!')).toBeVisible();
  });

  it('renders data when itemData is array of numbers', () => {
    const OPTIONS = [1, 2, 3, 4, 5];
    const { getByText } = render(
      <VirtualizedList height={20} itemCount={OPTIONS.length} itemData={OPTIONS} width={100} />
    );
    expect(getByText('1')).toBeVisible();
    expect(getByText('2')).toBeVisible();
    expect(getByText('3')).toBeVisible();
    expect(getByText('4')).toBeVisible();
    expect(getByText('5')).toBeVisible();
  });

  it('renders data when itemData is array of booleans', () => {
    const OPTIONS = [true, false];
    const { getByText } = render(
      <VirtualizedList height={20} itemCount={OPTIONS.length} itemData={OPTIONS} width={100} />
    );
    expect(getByText('true')).toBeVisible();
    expect(getByText('false')).toBeVisible();
  });

  it('renders data when itemData is array of undefined', () => {
    const OPTIONS = [undefined];
    const { getByText } = render(
      <VirtualizedList height={20} itemCount={OPTIONS.length} itemData={OPTIONS} width={100} />
    );
    expect(getByText('undefined')).toBeVisible();
  });

  it('fixes the height when the children are greater than 8', () => {
    const { container } = render(
      <VirtualizedList itemCount={11} width={100}>
        <span>Toasty</span>
        <span>Toasty1</span>
        <span>Toasty2</span>
        <span>Toasty3</span>
        <span>Toasty4</span>
        <span>Toasty5</span>
        <span>Toasty6</span>
        <span>Toasty7</span>
        <span>Toasty8</span>
        <span>Toasty9</span>
        <span>Toasty10</span>
      </VirtualizedList>
    );
    expect(container.querySelector('[data-uic="virtualized-list"]').style.height).toEqual('256px');
  });

  it('accepts a custom renderRow function', () => {
    const renderRow = ({ index, style }) => <span style={style}>Row {index}</span>;
    const { getByText } = render(<VirtualizedList height={20} itemCount={3} renderRow={renderRow} width={100} />);
    expect(getByText('Row 0')).toBeVisible();
    expect(getByText('Row 1')).toBeVisible();
    expect(getByText('Row 2')).toBeVisible();
  });
});
