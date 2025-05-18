import { memo } from "react";
import type { MenuTreeNode } from "../types/MenuTreeTypes";

import MenuItem from "../MenuItem/MenuItem";

interface MenuProps {
  items: MenuTreeNode[];
}

const Menu = memo(({ items }: MenuProps) => {
  return (
    <ul>
      {items.map((item) => (
        <MenuItem key={item.name} item={item} />
      ))}
    </ul>
  );
});

export default Menu;
