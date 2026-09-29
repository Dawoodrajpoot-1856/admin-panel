"use client";

import { useState } from "react";

export function usePagination(totalItems: number, itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  function nextPage() {
    setCurrentPage(function (page) {
      return Math.min(page + 1, totalPages);
    });
  }

  function previousPage() {
    setCurrentPage(function (page) {
      return Math.max(page - 1, 1);
    });
  }

  function goToPage(page: number) {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  }

  const startIndex = (currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;

  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    nextPage,
    previousPage,
    goToPage,
  };
}
