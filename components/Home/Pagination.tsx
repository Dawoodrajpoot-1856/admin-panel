"use client";

import { usePagination } from "@/app/hooks/usePagination";

const products = [
  "iPhone",
  "Samsung",
  "Laptop",
  "AirPods",
  "iPad",
  "MacBook",
  "Watch",
  "Camera",
];

export default function Pagination() {
  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    nextPage,
    previousPage,
  } = usePagination(products.length, 5);

  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Products</h1>

      <div className="space-y-3">
        {currentProducts.map(function (product) {
          return (
            <div key={product} className="border p-4 rounded">
              {product}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-5 mt-5">
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
          className="border px-4 py-2 rounded"
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="border px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
