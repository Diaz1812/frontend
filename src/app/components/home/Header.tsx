"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900 md:bg-gradient-to-r md:from-[#0f0f0f] md:via-[#0f0f0f] md:to-orange-900 text-white shadow-md py-4 px-4 sm:px-6 lg:px-[110px] flex justify-between items-center border-b border-gray-500 box-border">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/microdata.png"
          alt="Microdata Logo"
          className="w-28 h-auto"
        />
      </div>

      {/* Hamburger Icon (mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Menu (Desktop) */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium text-[#686D76]">
        <Link href="/" className="hover:text-orange-500 transition">
          Home
        </Link>
        <Link href="/service" className="hover:text-orange-500 transition">
          Our Service
        </Link>
        <Link href="/portofolio" className="hover:text-orange-500 transition">
          Portofolio
        </Link>
        <Link href="/career" className="hover:text-orange-500 transition">
          Career
        </Link>
        <Link href="/blog" className="hover:text-orange-500 transition">
          Blog
        </Link>
      </nav>

      {/* Contact Us (Desktop) */}
      <div className="hidden md:block">
        <Link href="/contact">
          <span className="text-gray-700">Contact Us</span>
        </Link>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-orange-500 text-2xl"
        >
          &times;
        </button>

        {/* Menu Items */}
        <nav className="mt-16 flex flex-col space-y-6 px-6 text-orange-500 text-lg">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="hover:bg-orange-500 hover:text-white rounded-full px-4 py-2 transition"
          >
            Home
          </Link>
          <Link
            href="/service"
            onClick={() => setIsOpen(false)}
            className="hover:bg-orange-500 hover:text-white rounded-full px-4 py-2 transition"
          >
            Our Service
          </Link>
          <Link
            href="/portofolio"
            onClick={() => setIsOpen(false)}
            className="hover:bg-orange-500 hover:text-white rounded-full px-4 py-2 transition"
          >
            Portofolio
          </Link>
          <Link
            href="/career"
            onClick={() => setIsOpen(false)}
            className="hover:bg-orange-500 hover:text-white rounded-full px-4 py-2 transition"
          >
            Career
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsOpen(false)}
            className="hover:bg-orange-500 hover:text-white rounded-full px-4 py-2 transition"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:bg-orange-500 hover:text-white rounded-full px-4 py-2 transition font-bold"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
