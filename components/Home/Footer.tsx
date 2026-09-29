"use client";

import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <Image
              src="/logo.jpg"
              alt="Logo"
              height={40}
              width={60}
              className="rounded-xl"
            />

            <p className="text-sm text-gray-600 max-w-xs">
              Build better experiences with our simple and powerful platform.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>

            <ul className="flex flex-col gap-2 items-center">
              <li className="font-semibold cursor-pointer hover:text-red-500 hover:underline hover:decoration-2 hover:underline-offset-4">
                Home
              </li>

              <li className="font-semibold cursor-pointer hover:text-red-500 hover:underline hover:decoration-2 hover:underline-offset-4">
                Blogs
              </li>

              <li className="font-semibold cursor-pointer hover:text-red-500 hover:underline hover:decoration-2 hover:underline-offset-4">
                Plans
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-end">
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center cursor-pointer hover:bg-blue-600 transition">
                <FaFacebookF />
              </div>

              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center cursor-pointer hover:bg-blue-400 transition">
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>

            <div className="border-t border-gray-300 mt-10 pt-5 text-center">
          <p className="text-sm text-gray-600">
            © 2026 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
