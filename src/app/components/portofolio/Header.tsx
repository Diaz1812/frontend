<<<<<<< HEAD
// components/Header.tsx
import Link from "next/link";
import { Button } from "../ui/button";
import type { FC } from "react";
=======
// src/app/components/portofolio/Header.tsx
'use client'; // Penting untuk Next.js App Router jika ada interaktivitas atau client-side hooks
>>>>>>> 507997140d621ab12fe7996390358abaae3e71cf

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import next/image untuk logo
import { Image as LucideImage } from 'lucide-react'; // Import LucideImage untuk placeholder di hero section

const Header: React.FC = () => {
  return (
    // Menggunakan Fragment <> untuk mengelompokkan Header navigasi dan Hero Section
    <>
      {/* Bagian Header Utama (Navigasi) */}
      <header className="bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f] to-orange-900 text-white">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* Pastikan '/microdata.png' ada di folder 'public' */}
            <Image src="/microdata.png" alt="Logo Microdata" width={120} height={48} className="object-contain" />
          </div>

<<<<<<< HEAD
          {/* Navigation Menu */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/home"
                className="text-gray-900 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/service"
                className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Our Service
              </Link>
              <Link
                href="/portofolio"
                className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/career"
                className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Career
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Blog
              </Link>
            </div>
=======
          {/* Navigation */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <Link href="/" className="hover:text-orange-500 transition">Home</Link>
            <Link href="/our-service" className="hover:text-orange-500 transition">Our Service</Link>
            <Link href="/portofolio" className="hover:text-orange-500 transition">Portofolio</Link>
            <Link href="/career" className="hover:text-orange-500 transition">Career</Link>
            <Link href="/blog" className="hover:text-orange-500 transition">Blog</Link>
>>>>>>> 507997140d621ab12fe7996390358abaae3e71cf
          </nav>

          {/* Contact Us */}
          <div>
            <Link href="/contact" className="text-sm text-white hover:text-orange-500 transition">
              Contact Us
            </Link>
          </div>
        </div>
<<<<<<< HEAD
      </div>
    </header>
  );
};

export default Header;
=======
      </header>

      {/* Bagian Hero / Banner untuk halaman Portofolio */}
      <section className="w-full h-[486px] bg-gradient-to-r from-orange-100 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Kontainer internal untuk konten (judul, deskripsi, gambar) */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full h-full">
          {/* Konten Kiri: Judul dan Deskripsi */}
          <div className="flex flex-col items-start text-gray-900 md:w-1/2 lg:w-2/3 pr-0 md:pr-12 text-center md:text-left mb-8 md:mb-0">
            {/* Mengubah warna teks Portofolio menjadi orange-500 */}
            <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-4 leading-tight text-orange-500">
              Portofolio
            </h1>
            <p className="font-poppins font-normal text-base md:text-lg leading-normal text-gray-700 max-w-lg" style={{ lineHeight: '120%' }}>
              Dengan pengalaman 15+ tahun, kami terus menghadirkan produk digital
              yang relevan, fungsional, dan siap pakai sesuai kebutuhan klien.
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
>>>>>>> 507997140d621ab12fe7996390358abaae3e71cf
