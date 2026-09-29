"use client";

import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-gray-200">
      <div className="max-w-7xl mx-auto h-25 px-10 py-4 flex flex-row justify-between items-center">
        <Image
          src="/logo.jpg"
          alt="Logo"
          height={60}
          width={60}
          className="rounded-xl"
        />

        <ul className="flex flex-row gap-6 list-none">
          <li className="font-semibold cursor-pointer hover:text-red-500 hover:underline hover:decoration-2 hover:underline-offset-4 hover:decoration-red-400">
            Home
          </li>

          <li className="font-semibold cursor-pointer hover:text-red-500 hover:underline hover:decoration-2 hover:underline-offset-4 hover:decoration-red-400">
            Blogs
          </li>

          <li className="font-semibold cursor-pointer hover:text-red-500 hover:underline hover:decoration-2 hover:underline-offset-4 hover:decoration-red-400">
            Plans
          </li>
        </ul>

        <div className="flex flex-row gap-2">
          <button className="bg-black font-semibold rounded text-white px-4 py-2 hover:rounded-none transition">
            Login
          </button>

          <button className="bg-red-500 font-semibold text-white rounded px-4 py-2 hover:rounded-none hover:bg-red-600 transition">
            Signup
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
