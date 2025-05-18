import type { MenuTreeNode } from "../components/types/MenuTreeTypes";

const FILE_ICONS: Record<string, string> = {
  ".js": "/icons/file-js.png",
  ".scss": "/icons/file-scss.png",
} as const;

const FOLDER_OPEN_ICON = "/icons/folder-flat.svg";
const FOLDER_CLOSED_ICON = "/icons/folder-nested.svg";

export const getIconForItem = (
  item: MenuTreeNode,
  isOpen = false
): string => {
  if (item.subitems?.length) {
    return isOpen ? FOLDER_OPEN_ICON : FOLDER_CLOSED_ICON;
  }

  const extension = Object.keys(FILE_ICONS).find((ext) =>
    item.name.endsWith(ext)
  );

  return extension ? FILE_ICONS[extension] : FOLDER_CLOSED_ICON;
};
