import { memo } from "react";
import type { MenuTreeNode } from "../types/MenuTreeTypes";
import { useMenu } from "../../hooks/useMenu";
import { getIconForItem } from "../../utils/getIconForItem";
import Menu from "../Menu/Menu";
import styles from "./MenuItem.module.css";

interface MenuItemProps {
  item: MenuTreeNode;
}

const MenuItem = memo(({ item }: MenuItemProps) => {
  const { openNodes, toggleNode } = useMenu();
  const hasSubitems = Boolean(item.subitems?.length);
  const isOpen = hasSubitems && openNodes[item.name];

  return (
    <li className={styles.menuItem}>
      <div
        className={hasSubitems ? styles.menuFolder : styles.menuFile}
        onClick={() => hasSubitems && toggleNode(item.name)}
      >
        <img
          src={getIconForItem(item, isOpen)}
          alt='icon'
          className={styles.menuIcon}
        />
        {item.name}
      </div>
      {hasSubitems && isOpen && <Menu items={item.subitems!} />}
    </li>
  );
});

export default MenuItem;
