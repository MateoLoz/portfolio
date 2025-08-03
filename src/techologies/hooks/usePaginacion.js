import { useState, useEffect, useCallback } from "react";
import { tech } from "../../data/tech";
export function usePaginacion() {
  const [page, setPage] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [ItemsPerPage, setItemsPerPage] = useState(8);
  const index = page * ItemsPerPage;
  const totalPages = Math.ceil(tech.length / ItemsPerPage);
  const currentItems = tech.slice(index, index + ItemsPerPage);

  const handleNext = () => {
    if (page < totalPages - 1) {
      setPage((prev) => prev + 1);
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
      setStartIndex((prev) => prev - 1);
    }
  };

  const handleViewItems = useCallback(() => {
    const width = window.innerWidth;
    if (width < 768) return setItemsPerPage(4);
    if (width < 1024) return setItemsPerPage(4);
    if (width < 1240) return setItemsPerPage(6);
    return setItemsPerPage(8);
  }, []);

  useEffect(() => {
    handleViewItems(); // al montar
    window.addEventListener("resize", handleViewItems);
    window.addEventListener("load", handleViewItems);
    return () => {
      window.removeEventListener("resize", handleViewItems);
      window.removeEventListener("load", handleViewItems);
    };
  }, [handleViewItems]);

  return { currentItems, handleNext, handlePrev, startIndex };
}
