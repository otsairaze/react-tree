import { useState, useCallback } from "react";

export const useMenu = () => {
  const [openNodes, setOpenNodes] = useState<Record<string, boolean>>(
    {}
  );

  const toggleNode = useCallback((name: string) => {
    setOpenNodes((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  }, []);

  return {
    openNodes,
    toggleNode,
  };
};
