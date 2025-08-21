"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
  className={`sticky top-0 z-50 w-full transition-all duration-500 
    ${
      isScrolled
        ? "bg-white/30 backdrop-blur-md border border-white/20 shadow-md"
        : "bg-gray-900 md:bg-gradient-to-r md:from-[#0f0f0f] md:via-[#0f0f0f] md:to-orange-900 border-b border-gray-500"
    }
    text-white py-4 px-4 sm:px-6 lg:px-[110px] flex justify-between items-center box-border`}
>

      {/* Logo */}
      <div className="flex items-center">
        <img src="/microdata.png" alt="Microdata Logo" className="w-28 h-auto" />
      </div>

      {/* Hamburger Icon (mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="text-white-300 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Menu (Desktop) */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium text-[#686D76]">
        <Link href="/" className="hover:text-orange-500 transition">Home</Link>
        <Link href="/service" className="hover:text-orange-500 transition">Our Service</Link>
        <Link href="/portofolio" className="hover:text-orange-500 transition">Portofolio</Link>
        <Link href="/career" className="hover:text-orange-500 transition">Career</Link>
        <Link href="/blog" className="hover:text-orange-500 transition">Blog</Link>
      </nav>

      {/* Contact Us (Desktop) */}
      <div className="hidden md:block">
        <Link href="/contact">
          <span className="text-gray-300 hover:text-orange-500 transition">Contact Us</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
