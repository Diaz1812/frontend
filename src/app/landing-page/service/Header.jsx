"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      } text-white py-4 px-4 sm:px-6 lg:px-[120px] flex justify-between items-center`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={isScrolled ? "/microdata.png" : "/microdata.png"}
          alt="Microdata Logo"
          className="w-28 h-auto transition-all duration-300"
        />
      </div>

      {/* Hamburger Icon (mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="text-white focus:outline-none"
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
      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        <Link
          href="/"
          className="text-gray-300 hover:text-orange-500 transition"
        >
          Home
        </Link>
        <Link
          href="../service"
          className="text-gray-300 hover:text-orange-500 transition"
        >
          Our Service
        </Link>
        <Link
          href="../portofolio"
          className="text-gray-300 hover:text-orange-500 transition"
        >
          Portofolio
        </Link>
        <Link
          href="../career"
          className="text-gray-300 hover:text-orange-500 transition"
        >
          Career
        </Link>
        <Link
          href="../blog"
          className="text-gray-300 hover:text-orange-500 transition"
        >
          Blog
        </Link>
      </nav>

      {/* Contact Us (Desktop) */}
      <div className="hidden md:block">
        <Link href="/contact">
          <span className="text-gray-300 hover:text-orange-500 transition">
            Contact Us
          </span>
        </Link>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-orange-500 text-2xl"
        >
          &times;
        </button>

        <nav className="mt-16 flex flex-col space-y-6 px-6">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="bg-orange-500 text-white rounded-full px-6 py-2 text-lg font-medium text-center"
          >
            Home
          </Link>
          <Link
            href="/service"
            onClick={() => setIsOpen(false)}
            className="bg-white text-orange-500 rounded-full px-6 py-2 text-lg font-medium hover:bg-orange-500 hover:text-white transition text-center"
          >
            Our Service
          </Link>
          <Link
            href="/portofolio"
            onClick={() => setIsOpen(false)}
            className="bg-white text-orange-500 rounded-full px-6 py-2 text-lg font-medium hover:bg-orange-500 hover:text-white transition text-center"
          >
            Portofolio
          </Link>
          <Link
            href="/career"
            onClick={() => setIsOpen(false)}
            className="bg-white text-orange-500 rounded-full px-6 py-2 text-lg font-medium hover:bg-orange-500 hover:text-white transition text-center"
          >
            Career
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsOpen(false)}
            className="bg-white text-orange-500 rounded-full px-6 py-2 text-lg font-medium hover:bg-orange-500 hover:text-white transition text-center"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-white text-orange-500 rounded-full px-6 py-2 text-lg font-medium hover:bg-orange-500 hover:text-white transition text-center font-bold"
          >
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Overlay ketika menu mobile terbuka */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
