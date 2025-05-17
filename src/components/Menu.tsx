import { memo } from "react";
import type { MenuTreeNode } from "../types/MenuTreeTypes";

import "../styles/Menu.css";
import { MenuItem } from ".";

interface MenuProps {
  items: MenuTreeNode[];
}

export const Menu = memo(({ items }: MenuProps) => {
  return (
    <ul className='menu-wrapper'>
      {items.map((item) => (
        <MenuItem key={item.name} item={item} />
      ))}
    </ul>
  );
});
