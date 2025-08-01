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
    <section className="bg-grey-500 flex justify-center items-center">
      <div className="w-[1512px] h-[687px] bg-black px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Kiri */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-bold text-orange-500 mb-2">
            Mengapa <span className="text-orange-500">Microdata</span>
          </h2>
          <h3 className="text-4xl font-medium text-orange-500 mb-4">
            Jadi Pilihan Tepat
          </h3>
          <p className="text-sm text-gray-400 mb-6">
            Microdata hadir sebagai partner teknologi yang mengutamakan kualitas,
            ketepatan waktu, dan solusi yang benar-benar sesuai kebutuhan Anda.
          </p>
          <button className="text-white border border-white rounded-full px-6 py-2 text-sm hover:bg-orange-50 transition w-max">
            Hubungi Kami
          </button>
        </div>

        {/* Kanan */}
        <div className="flex flex-col justify-center space-y-8">
          {reasons.map((item, index) => (
            <div key={index} className="flex items-start space-x-6 border-b pb-6">
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
