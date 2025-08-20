import React, { JSX } from "react";

interface WhyItem {
  title: string;
  description: string;
}

export default function WhyMicrodata(): JSX.Element {
  const reasons: WhyItem[] = [
    {
      title: "Berpengalaman & Terpercaya",
      description:
        "Bertahun–tahun menangani berbagai proyek di sektor industri berbeda dengan hasil yang teruji.",
    },
    {
      title: "Tim Profesional",
      description:
        "Didukung profesional berpengalaman di bidang integrasi sistem, software development, dan konsultasi IT.",
    },
    {
      title: "Komitmen Pada Kualitas",
      description:
        "Setiap proyek dikerjakan dengan standar terbaik untuk mendukung pertumbuhan bisnis klien.",
    },
  ];

  return (
    <section className="bg-black flex justify-center items-center px-6 md:px-[120px] py-16 md:py-[120px]">
      <div className="w-full max-w-[1513px] min-h-[673px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[80px]">
        {/* Kiri: Judul dan tombol */}
        <div className="flex flex-col justify-center text-left md:text-left">
          <h2 className="text-2xl md:text-5xl font-bold text-orange-500 mb-3 leading-tight">
            Mengapa Microdata
          </h2>
          <h3 className="text-xl md:text-4xl font-semibold text-white mb-5 leading-snug">
            Jadi Pilihan Tepat
          </h3>
          <p className="text-sm md:text-lg text-gray-400 mb-7 max-w-[90%]">
            Microdata hadir sebagai partner teknologi yang mengutamakan
            kualitas, ketepatan waktu, dan solusi yang benar-benar sesuai
            kebutuhan Anda.
          </p>
          <div className="flex md:justify-start">
            <button className="text-sm md:text-base font-medium text-white border border-white rounded-full px-6 py-2.5 hover:bg-orange-500 transition">
              Hubungi Kami
            </button>
          </div>
        </div>

        {/* Kanan: List Alasan */}
        <div className="flex flex-col justify-center space-y-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-5 border-b border-gray-700 pb-5"
            >
              <div className="text-lg md:text-2xl font-bold text-orange-500 w-7">
                {index + 1}
              </div>
              <div>
                <h4 className="text-base md:text-xl font-semibold text-white mb-1.5">
                  {item.title}
                </h4>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
