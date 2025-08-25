"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAlternateLogo, setIsAlternateLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bannerSection = document.querySelector("section.bg-gradient-to-r");
      const whyMicrodataSection = document.querySelector("section.bg-black");
      const scrollTop = window.scrollY;

      if (scrollTop > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (bannerSection && whyMicrodataSection) {
        const bannerSectionTop = bannerSection.getBoundingClientRect().top;
        const bannerSectionBottom = bannerSection.getBoundingClientRect().bottom;
        const whyMicrodataSectionTop = whyMicrodataSection.getBoundingClientRect().top;
        const whyMicrodataSectionBottom = whyMicrodataSection.getBoundingClientRect().bottom;
        const isWithinBanner = bannerSectionTop <= 0 && bannerSectionBottom > 0;
        const isWithinWhyMicrodata = whyMicrodataSectionTop <= 0 && whyMicrodataSectionBottom > 0;
        const isPastBanner = bannerSectionBottom <= 0;
        const isPastWhyMicrodata = whyMicrodataSectionBottom <= 0;

        if (isWithinBanner || isWithinWhyMicrodata || bannerSectionTop > 0) {
          setIsAlternateLogo(false); // Kembali ke microdata.png saat di dalam atau di atas Banner atau WhyMicrodata
        } else if (isPastBanner && !isWithinWhyMicrodata) {
          setIsAlternateLogo(true); // Ganti ke microdata1.png saat melewati Banner dan sebelum WhyMicrodata
        } else if (isPastWhyMicrodata) {
          setIsAlternateLogo(true); // Tetap microdata1.png setelah melewati WhyMicrodata
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 
        ${
          isScrolled
            ? "bg-white/10 backdrop-blur-sm border-b border-white/20 shadow-lg"
            : "bg-transparent"
        }
        text-white py-4 px-4 sm:px-6 lg:px-[110px] flex justify-between items-center box-border`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={isAlternateLogo ? "/microdata1.png" : "/microdata.png"}
          alt="Microdata Logo"
          className="w-28 h-auto"
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
        <Link href="../contact">
          <span className="text-gray-300 hover:text-orange-500 transition">
            Contact Us
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;