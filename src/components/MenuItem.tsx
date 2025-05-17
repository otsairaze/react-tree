import { memo } from "react";
import type { MenuTreeNode } from "../types/MenuTreeTypes";
import { useMenu } from "../hooks/useMenu";
import { getIconForItem } from "../utils/getIconForItem";
import { Menu } from "./Menu";

interface MenuItemProps {
  item: MenuTreeNode;
}

export const MenuItem = memo(({ item }: MenuItemProps) => {
  const { openNodes, toggleNode } = useMenu();
  const hasSubitems = Boolean(item.subitems?.length);
  const isOpen = hasSubitems && openNodes[item.name];

  return (
    <li>
      <div
        className={hasSubitems ? "menu-folder" : "menu-file"}
        onClick={() => hasSubitems && toggleNode(item.name)}
      >
        <img
          src={getIconForItem(item, isOpen)}
          alt='icon'
          className='menu-icon'
        />
        {item.name}
      </div>
      {hasSubitems && isOpen && <Menu items={item.subitems!} />}
    </li>
  );
});
