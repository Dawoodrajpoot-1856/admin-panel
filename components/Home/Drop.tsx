"use client";

import { useState } from "react";
import { useClickOutside } from "@/app/hooks/useClickOutside";

const Drop = () => {
  const [open, setOpen] = useState(false);

  const menuRef = useClickOutside(function () {
    setOpen(false);
  });

  return (
    <div className="p-10">
      <button
        onClick={function () {
          setOpen(!open);
        }}
        className="bg-black text-white px-5 py-2 rounded"
      >
        Open Menu
      </button>

      {open && (
        <div ref={menuRef} className="mt-3 w-64 border rounded-lg p-5 shadow">
          <h2 className="font-bold text-xl">My Menu</h2>

          <p className="mt-3">Home</p>

          <p className="mt-3">About</p>

          <p className="mt-3">Contact</p>
        </div>
      )}
    </div>
  );
};

export default Drop;
