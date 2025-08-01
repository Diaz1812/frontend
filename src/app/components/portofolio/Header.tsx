// src/app/components/portofolio/Header.tsx
"use client"; // Penting untuk Next.js App Router jika ada interaktivitas atau client-side hooks

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import next/image untuk logo
import { Image as LucideImage } from "lucide-react"; // Import LucideImage untuk placeholder di hero section

const Header: React.FC = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-orange-100 to-white shadow-md py-4 px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/microdata.png"
            alt="Microdata Logo"
            className="w-30 h-12 mb-10 md:mb-0"
          />
        </div>

        {/* Menu Tengah */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-[#686D76]">
          <Link href="/">Home</Link>
          <Link href="/service">Our Service</Link>
          <Link href="/portofolio">Portofolio</Link>
          <Link href="/career">Carrier</Link>
          <Link href="/blog">Blog</Link>
        </nav>

        {/* Contact Us */}
        <div className="hidden md:block">
          <Link href="/contact">
            <span className="text-gray-700">Contact Us</span>
          </Link>
        </div>
      </header>

      {/* Bagian Hero / Banner untuk halaman Portofolio */}
      <section className="w-full h-[486px] bg-gradient-to-r from-orange-100 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Kontainer internal untuk konten (judul, deskripsi, gambar) */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full h-full">
          {/* Konten Kiri: Judul dan Deskripsi */}
          <div className="flex flex-col items-start text-gray-900 md:w-1/2 lg:w-2/3 pr-0 md:pr-12 text-center md:text-left mb-8 md:mb-0">
            {/* Warna teks Portofolio menjadi orange-500 */}
            <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-4 leading-tight text-orange-500">
              Portofolio
            </h1>
            <p
              className="font-poppins font-normal text-base md:text-lg leading-normal text-gray-700 max-w-lg"
              style={{ lineHeight: "120%" }}
            >
              Dengan pengalaman 15+ tahun, kami terus menghadirkan produk
              digital yang relevan, fungsional, dan siap pakai sesuai kebutuhan
              klien.
            </p>
          </div>

          {/* Konten Kanan: Placeholder Gambar */}
          <div className="flex-shrink-0 w-48 h-48 md:w-60 md:h-60 bg-gray-200 border border-gray-400 rounded-lg flex items-center justify-center">
            <LucideImage className="w-24 h-24 text-gray-500" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
