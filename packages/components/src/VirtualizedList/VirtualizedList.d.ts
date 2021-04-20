import * as React from 'react';
import { VariableSizeListProps } from 'react-window';

interface IVirtualizedListProps extends Omit<VariableSizeListProps, 'children'> {
  children?: React.ReactNode;
  renderRow?: (props: any) => React.ReactNode;
}

declare const VirtualizedList: React.ComponentType<IVirtualizedListProps>;

export default VirtualizedList;
