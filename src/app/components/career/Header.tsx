"use client";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-100 to-white shadow-md py-4 px-8 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/images/logo_microdata.png"
          alt="Microdata Logo"
          className="h-25 mb-10 md:mb-0"
        />
      </div>

      {/* Menu Tengah */}
      <nav className="hidden md:flex space-x-6 text-gray-700">
        <Link href="/home">Home</Link>
        <Link href="/service">Our Service</Link>
        <Link href="/portofolio">Portfolio</Link>
        <Link href="/career" className="border-b-2 border-gray-400">
          Carrier
        </Link>
        <Link href="/blog">Blog</Link>
      </nav>

      {/* Contact Us */}
      <div className="hidden md:block">
        <Link href="/contact">
          <span className="text-gray-700">Contact Us</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
