import * as React from 'react';
import { StandardProps } from './index';

export interface ListItemProps extends StandardProps {
  /** Primary content */
  children?: React.ReactNode;

  /* Index of list item */
  index: number;

  /* Symbol of collection*/
  collection?: Array<number | string>;

  /* disable drag */
  disabled?: boolean;
}

declare const ListItem: React.ComponentType<ListItemProps>;

export default ListItem;