import React, { JSX } from 'react';

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
      title: "Komitmen pada Kualitas",
      description:
        "Setiap proyek dikerjakan dengan standar terbaik untuk mendukung pertumbuhan bisnis klien.",
    },
  ];

  return (
    <section className="bg-gray-100 flex justify-center items-center">
      <div className="w-[1512px] h-[687px] bg-gray-100 px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Kiri */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Mengapa <span className="text-black">Microdata</span>
          </h2>
          <h3 className="text-2xl font-medium text-gray-800 mb-4">
            Jadi Pilihan Tepat
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Microdata hadir sebagai partner teknologi yang mengutamakan kualitas,
            ketepatan waktu, dan solusi yang benar-benar sesuai kebutuhan Anda.
          </p>
          <button className="text-orange-500 border border-orange-500 rounded-full px-6 py-2 text-sm hover:bg-orange-50 transition w-max">
            Hubungi Kami
          </button>
        </div>

        {/* Kanan */}
        <div className="flex flex-col justify-center space-y-8">
          {reasons.map((item, index) => (
            <div key={index} className="flex items-start space-x-6 border-b pb-6">
              <div className="text-xl font-medium text-gray-500 w-6">
                {index + 1}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
