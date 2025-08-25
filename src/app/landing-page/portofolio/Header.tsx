"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Image as LucideImage } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Header (Navigasi) */}
      <header
        className="fixed top-0 z-50 w-full bg-white/10 backdrop-blur-sm border-b border-white/20 shadow-lg py-4 px-4 sm:px-6 lg:px-[120px] flex justify-between items-center box-border"
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/microdata1.png"
            alt="Microdata Logo"
            className="w-28 h-auto"
          />
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
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
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-[#686D76]">
          <Link href="/" className="hover:text-orange-500 transition">
            Home
          </Link>
          <Link href="../service" className="hover:text-orange-500 transition">
            Our Service
          </Link>
          <Link href="../portofolio" className="hover:text-orange-500 transition">
            Portofolio
          </Link>
          <Link href="../career" className="hover:text-orange-500 transition">
            Career
          </Link>
          <Link href="../blog" className="hover:text-orange-500 transition">
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
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-orange-500 text-2xl"
          >
            &times;
          </button>

          {/* Menu Items */}
          <nav className="mt-16 flex flex-col space-y-6 px-6">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="bg-orange-500 text-white rounded-full px-6 py-2 text-lg font-medium"
            >
              Home
            </Link>
            <Link
              href="/service"
              onClick={() => setIsMenuOpen(false)}
              className="bg-white text-orange-500 rounded-full px-6 py-2 text-lg font-medium hover:bg-orange-500 hover:text-white transition"
            >
              Our Service
            </Link>
            <Link
              href="/portofolio"
              onClick={() => setIsMenuOpen(false)}
              className="bg-white text-orange-500 rounded-full px-6 py-2 text-lg font-medium hover:bg-orange-500 hover:text-white transition"
            >
              Portofolio
            </Link>
            <Link
              href="/career"
              onClick={() => setIsMenuOpen(false)}
              className="bg-white text-orange-500 rounded-full px-6 py-2 text-lg font-medium hover:bg-orange-500 hover:text-white transition"
            >
              Career
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="bg-white text-orange-500 rounded-full px-6 py-2 text-lg font-medium hover:bg-orange-500 hover:text-white transition"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-white text-orange-500 rounded-full px-6 py-2 text-lg font-medium hover:bg-orange-500 hover:text-white transition font-bold"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="w-full flex items-center justify-center relative md:min-h-[486px]"
        style={{
          background:
            "linear-gradient(to right bottom, #fbe3d6ff 0%, #fbe3d6ff 10%, #ffffff 30%, #ffffff 0%)",
        }}
      >
        <div className="max-w-7xl mx-auto py-[40px] px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center w-full md:justify-between">
          {/* Konten Kiri (Teks) */}
          <div className="flex flex-col text-gray-900 w-full sm:w-[350px] md:w-[448px] mb-8 md:mb-0">
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl mb-4 leading-tight text-orange-500">
              Portofolio
            </h1>
            <p
              className="font-poppins font-normal text-sm md:text-base leading-normal text-[#686D76]"
              style={{ lineHeight: "150%" }}
            >
              Dengan pengalaman 15+ tahun, kami terus menghadirkan produk
              digital yang relevan, fungsional, dan siap pakai sesuai kebutuhan
              klien.
            </p>
          </div>

          {/* Gambar Desktop Placeholder */}
          <div className="hidden md:flex flex-shrink-0 w-[150px] h-[137.69px] rounded-lg items-center justify-center ml-auto">
            <LucideImage className="w-full h-full text-gray-500" />
          </div>
        </div>

        {/* Gambar Mobile Placeholder */}
        <div className="absolute top-[16px] right-4 sm:right-6 lg:hidden w-[50px] h-[45.9px] p-2">
          <LucideImage className="w-full h-full text-gray-500" />
        </div>
      </section>
    </>
  );
};

export default Header;