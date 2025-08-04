'use client';

import Link from 'next/link';
import React from 'react';

const HeroBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f] to-orange-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-snug mb-6">
            Membangun{' '}
            <span className="text-white italic" style={{ fontFamily: 'Dancing Script' }}>
              Solusi Digital
            </span>
            <br />
            yang mendukung perkembangan bisnis <span className="text-white">Anda.</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mb-8 text-base md:text-lg">
            Layanan konsultasi IT dan pengembangan sistem terintegrasi yang dirancang untuk efisiensi, inovasi, dan dampak nyata
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-5 rounded-full transition w-full sm:w-auto">
                Hubungi Kami
              </button>
            </Link>
            <Link href="/portofolio">
              <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium py-2 px-5 rounded-full transition w-full sm:w-auto">
                Lihat Portofolio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
