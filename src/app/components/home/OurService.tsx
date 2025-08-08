"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { Dancing_Script } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const services = [
  {
    id: 1,
    title: "Software Developer",
    description:
      "Menyediakan layanan riset dan pengembangan software yang customize, termasuk perancangan aplikasi, pengembangan, hingga pelatihan operasional.",
  },
  {
    id: 2,
    title: "IT Consulting",
    description:
      "Pendampingan teknis yang rutin untuk menjaga performa sistem tetap stabil, mendeteksi potensi gangguan sejak dini, dan meminimalkan risiko kerugian bagi perusahaan.",
  },
  {
    id: 3,
    title: "IT Infrastructure",
    description:
      "Fondasi teknologi yang menopang sistem operasional, mencakup perangkat fisik dan virtual yang memungkinkan alur data, penyimpanan, pengolahan, hingga analisis berjalan secara efisien.",
  },
  {
    id: 4,
    title: "Multimedia & Graphic Design",
    description:
      "Solusi desain dan multimedia yang strategis untuk membangun identitas merek yang kuat, mendukung pertumbuhan bisnis, dan siap bersaing di era digital yang kompetitif.",
  },
  {
    id: 5,
    title: "UI/UX Design",
    description:
      "Menciptakan antarmuka yang menarik dan pengalaman pengguna yang optimal demi meningkatkan kepuasan dan retensi pelanggan.",
  },
  {
    id: 6,
    title: "Cloud Services",
    description:
      "Penyediaan layanan cloud untuk skalabilitas, fleksibilitas, dan efisiensi infrastruktur TI perusahaan.",
  },
];

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? services : services.slice(0, 4);

  return (
    <section className="py-16 px-6 md:px-16 bg-white text-gray-800">
      {/* Judul bagian atas */}
      <div className="mb-10 md:text-center text-left px-2">
        <span
          className={`text-orange-400 text-2xl italic ${dancingScript.className}`}
        >
          Our Service
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Kami Hadirkan Teknologi yang Membuat <br /> Bisnis Anda Berkembang
        </h2>
      </div>

      {/* Daftar layanan */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 border-gray-200 relative">
        {displayedServices.map((service, index) => (
          <div
            key={service.id}
            className={`p-6 md:p-10 border-b border-gray-200
              ${index % 2 === 0 ? "md:border-r" : ""}
              ${index >= 2 ? "" : "md:border-b"}
            `}
          >
            <div className="text-sm text-gray-400 mb-1">
              {String(service.id).padStart(2, "0")}
            </div>
            <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Tombol Lihat Selengkapnya */}
      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-600 transition"
        >
          {showAll ? "Tutup" : "Lihat Selengkapnya"}
        </button>
      </div>
    </section>
  );
}
