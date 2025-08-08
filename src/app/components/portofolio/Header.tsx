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
        className="w-full relative z-20"
        style={{
          background:
            "linear-gradient(135deg, #fbe3d6 0%, #fbe3d6 14%, #ffffff 70%, #ffffff 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto py-[14px] px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/microdata.png"
              alt="Microdata Logo"
              width={112}
              height={42}
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
            <Link
              href="/portofolio"
              className="hover:text-orange-500 transition"
            >
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
              <span className="text-gray-700 hover:text-orange-500 transition font-medium">
                Contact Us
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-[68px] right-4 bg-white shadow-lg rounded-lg w-48 p-4 flex flex-col space-y-4 md:hidden z-10">
            {[
              { href: "/", text: "Home" },
              { href: "/service", text: "Our Service" },
              { href: "/portofolio", text: "Portofolio" },
              { href: "/career", text: "Career" },
              { href: "/blog", text: "Blog" },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                {item.text}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-orange-600 font-semibold mt-4 pt-4 border-t border-gray-200"
            >
              Contact Us
            </Link>
          </div>
        )}
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

          {/* Placeholder Gambar Desktop */}
          <div className="hidden md:flex flex-shrink-0 w-[150px] h-[137.69px] rounded-lg items-center justify-center ml-auto">
            <LucideImage className="w-full h-full text-gray-500" />
          </div>
        </div>

        {/* Gambar mobile (absolute) */}
        <div className="absolute top-[16px] right-4 sm:right-6 lg:hidden w-[50px] h-[45.9px] p-2">
          <LucideImage className="w-full h-full text-gray-500" />
        </div>
      </section>
    </>
  );
};

export default Header;
