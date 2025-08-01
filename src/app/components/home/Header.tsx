"use client";

import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f] to-orange-900 text-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/microdata.png" alt="Logo" className="w-30 h-12" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6  text-sm font-medium text-[#686D76]">
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

        {/* Contact Us */}
        <div>
          <Link
            href="/contact"
            className="text-[#686D76] hover:text-orange-500 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
