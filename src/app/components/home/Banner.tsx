'use client';

import Link from 'next/link';
import React from 'react';

const HeroBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f] to-orange-900 text-white py-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl leading-tight mb-6">
          Membangun <span className="text-500 italic" style={{ fontFamily: 'Dancing Script' }}>Solusi Digital</span><br />
          yang mendukung perkembangan bisnis <span className="text-white">Anda.</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mb-8">
          Layanan konsultasi IT dan pengembangan sistem terintegrasi yang dirancang untuk efisiensi, inovasi, dan dampak nyata
        </p>

        <div className="flex gap-4">
          <Link href="/contact">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-5 rounded-full transition">
              Hubungi Kami
            </button>
          </Link>
          <Link href="/portofolio">
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium py-2 px-5 rounded-full transition">
              Lihat Portofolio
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
