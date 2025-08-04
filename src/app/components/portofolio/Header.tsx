// src/app/components/portofolio/Header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Image as LucideImage, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-gradient-to-r from-orange-100 to-white shadow-md py-4 px-4 sm:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/microdata.png"
              alt="Microdata Logo"
              width={150} // Ukuran logo disesuaikan
              height={60}
              className="w-auto h-10 md:h-12"
              priority
            />
          </Link>
        </div>

        {/* Tombol Hamburger untuk Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#686D76] p-2 focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Tengah - Desktop */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-[#686D76]">
          <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <Link href="/service" className="hover:text-orange-500 transition-colors">Our Service</Link>
          <Link href="/portofolio" className="hover:text-orange-500 transition-colors">Portofolio</Link>
          <Link href="/career" className="hover:text-orange-500 transition-colors">Blog</Link>
        </nav>

        {/* Contact Us - Desktop */}
        <div className="hidden md:block">
          <Link href="/contact" className="px-4 py-2 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
            Contact Us
          </Link>
        </div>
      </header>

      {/* Menu Mobile yang muncul saat diklik */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4 z-50">
          <nav className="flex flex-col space-y-4 text-center text-gray-700 font-medium">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/service" onClick={() => setIsMenuOpen(false)}>Our Service</Link>
            <Link href="/portofolio" onClick={() => setIsMenuOpen(false)}>Portofolio</Link>
            <Link href="/career" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="mt-4 px-4 py-2 border border-gray-400 rounded-lg">
              Contact Us
            </Link>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="w-full h-auto py-12 md:py-24 lg:py-32 bg-gradient-to-r from-orange-100 to-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full px-4 sm:px-6 lg:px-8">
          {/* Konten Kiri */}
          <div className="flex flex-col items-center md:items-start text-gray-900 md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl mb-4 leading-tight text-orange-500">
              Portofolio
            </h1>
            <p
              className="font-poppins font-normal text-sm md:text-base leading-normal text-[#686D76] max-w-sm sm:max-w-md md:max-w-lg"
              style={{ lineHeight: "150%" }}
            >
              Dengan pengalaman 15+ tahun, kami terus menghadirkan produk digital yang relevan, fungsional, dan siap pakai sesuai kebutuhan klien.
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