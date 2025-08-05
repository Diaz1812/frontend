"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Image as LucideImage } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Header (Navigasi) */}
      <header className="bg-gradient-to-r from-orange-100 to-white relative z-10">
        {/* Kontainer untuk membatasi lebar dan menerapkan padding sesuai desain Figma */}
        <div className="max-w-[1514px] mx-auto py-[20px] px-[120px] flex justify-between items-center">
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
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
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 bg-white shadow-lg rounded-lg w-48 p-4 flex flex-col space-y-4 md:hidden z-20">
            {[
              { href: "/", text: "Home" },
              { href: "/service", text: "Our Service" },
              { href: "/portofolio", text: "Portofolio" },
              { href: "/career", text: "Career" },
              { href: "/blog", text: "Blog" },
              { href: "/contact", text: "Contact Us", special: true },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  item.special
                    ? "text-orange-600 font-semibold"
                    : "text-gray-700 hover:text-orange-500 font-medium"
                }`}
              >
                {item.text}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="w-full min-h-[486px] py-[100px] bg-gradient-to-r from-orange-100 to-white flex items-center justify-center">
        <div className="max-w-[1512px] mx-auto flex flex-col md:flex-row items-center justify-between w-full px-[120px]">
          {/* Konten Kiri */}
          <div className="flex flex-col items-center md:items-start text-gray-900 pr-0 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl mb-4 leading-tight text-orange-500">
              Portofolio
            </h1>
            <p
              className="font-poppins font-normal text-sm md:text-base leading-normal text-[#686D76] max-w-sm sm:max-w-md md:max-w-lg"
              style={{ lineHeight: "150%" }}
            >
              Dengan pengalaman 15+ tahun, kami terus menghadirkan produk
              digital yang relevan, fungsional, dan siap pakai sesuai kebutuhan
              klien.
            </p>
          </div>
          {/* Konten Kanan: Gambar Placeholder */}
          <div className="flex-shrink-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 bg-gray-200 border border-gray-400 rounded-lg flex items-center justify-center">
            <LucideImage className="w-16 h-16 sm:w-24 sm:h-24 text-gray-500" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;