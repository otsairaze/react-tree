import { useEffect, useState } from "react";
import data from "../api/data.json";
import type { MenuTreeNode } from "../components/types/MenuTreeTypes";

export const useMenuData = () => {
  const [tree, setTree] = useState<MenuTreeNode[]>([]);

  useEffect(() => {
    setTree(data);
  }, []);

  return tree;
};
