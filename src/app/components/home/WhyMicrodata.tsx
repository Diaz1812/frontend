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
    <section className="bg-black flex justify-center items-center px-4 py-16">
      <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Kiri: Judul dan tombol */}
        <div className="flex flex-col justify-center text-left md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-orange-500 mb-2">
            Mengapa Microdata
          </h2>
          <h3 className="text-2xl md:text-4xl font-medium text-white mb-4">
            Jadi Pilihan Tepat
          </h3>
          <p className="text-sm text-gray-400 mb-6">
            Microdata hadir sebagai partner teknologi yang mengutamakan
            kualitas, ketepatan waktu, dan solusi yang benar-benar sesuai
            kebutuhan Anda.
          </p>
          <div className="flex md:justify-start justify-left">
            <button className="text-white border border-white rounded-full px-6 py-2 text-sm hover:bg-orange-500 transition">
              Hubungi Kami
            </button>
          </div>
        </div>

        {/* Kanan: List Alasan */}
        <div className="flex flex-col justify-center space-y-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 border-b border-gray-700 pb-4"
            >
              <div className="text-xl font-medium text-white w-6">
                {index + 1}
              </div>
              <div>
                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
