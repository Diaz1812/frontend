"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="q-full bg-[#1A1A1A] shadow-md py-4 px-6 flex justify-between items-center">
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
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {/* Icon Hamburger */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu (Desktop) */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium text-[#686D76]">
        <Link href="/">Home</Link>
        <Link href="/service">Our Service</Link>
        <Link href="/portofolio">Portofolio</Link>
        <Link href="/career">Career</Link>
        <Link href="/blog">Blog</Link>
      </nav>

      {/* Contact Us (Desktop) */}
      <div className="hidden md:block">
        <Link href="/contact">
          <span className="text-gray-700">Contact Us</span>
        </Link>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-6 bg-white shadow-lg rounded-lg w-48 p-4 flex flex-col space-y-4 md:hidden">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            Home
          </Link>
          <Link
            href="/service"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            Our Service
          </Link>
          <Link
            href="/portofolio"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            Portofolio
          </Link>
          <Link
            href="/career"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            Career
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-orange-600 font-semibold"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
