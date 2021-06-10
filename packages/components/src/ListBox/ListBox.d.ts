import React from 'react';

export interface IItem {
  disabled?: boolean;
  displayName?: React.ReactNode;
  divider?: boolean;
  name: string;
  selected?: boolean;
  tooltip?: string;
  value: string;
}

export interface IAction {
  selected: boolean;
  itemsIndex: number | 'all';
  value: string;
}

export interface IListBoxProps {
  actions?: React.ReactNode;
  checkAllText?: string;
  classes?: { [key: string]: any };
  dividers?: boolean;
  footerText?: string;
  hideFooter?: boolean;
  items: IItem[];
  ListItemTextComponent?: React.ReactNode;
  maxVisibleItems?: number;
  noOptions?: React.ReactNode;
  noResultsText?: string;
  onChange: (event: React.ChangeEvent<{}>, selectedItems: IItem[], action: IAction) => void;
  searchLimit?: number;
  searchPlaceholderText?: string;
  showCheckAll?: boolean;
  showSearch?: boolean;
  subheader?: string | React.ReactNode;
  title?: string | React.ReactNode;
}

declare const ListBox: React.ComponentType<IListBoxProps>;

export default ListBox;
