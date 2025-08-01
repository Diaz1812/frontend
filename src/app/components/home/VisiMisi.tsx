import React from 'react';

export default function VisiMisi() {
  const misiList = [
    "Memberikan kualitas layanan terbaik yang didukung dengan berbagai solusi dan inovasi jaringan telekomunikasi dalam meningkatkan pelayanan bagi pelanggan.",
    "Membangun dan mengembangkan infrastruktur jaringan di seluruh kota-kota di Indonesia dengan teknologi terbaru.",
    "Selalu mengembangkan Sumber Daya Manusia secara konsisten untuk mencapai kesuksesan.",
    "Selalu Menciptakan Produk-Produk Terbaru di Bidang Teknologi Informasi.",
  ];

  return (
    <section className="px-[120px] py-16 bg-white text-gray-900">
      <div className="flex gap-[100px]">
        {/* Visi */}
        <div className="flex-1">
          <h2 className="text-xl ml-15 font-serif italic mb-4">Visi</h2>
          <p className="text-sm ml-15 leading-relaxed">
            Memberikan pelanggan solusi layanan jasa dan produk terbaik dengan mengutamakan kepuasan pelanggan, 
            yang menjadikan PT. Micro Data Indonesia sebagai pilihan utama dalam layanan jasa Teknologi Informasi.
          </p>
        </div>

        {/* Misi */}
        <div className="flex-1">
          <h2 className="text-xl font-serif italic mb-4">Misi</h2>
          <div className="space-y-6">
            {misiList.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="min-w-[28px] min-h-[28px] rounded-full bg-orange-400 text-white text-sm font-semibold flex items-center justify-center mt-1">
                  {index + 1}
                </div>
                <p className="text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
