'use client';

import Link from 'next/link';
import React from 'react';

const HeroBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f] to-orange-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-1 pt-[40px] md:pt-[20px] pb-[10px] md:pb-[5 px] flex flex-col gap-[8px] sm:gap-[10px] md:gap-[16px]">

        <div className="max-w-6xl text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-snug mb-6" style={{ fontFamily: 'Poppins' }}>
            Membangun{' '}
            <span className="text-white italic" style={{ fontFamily: 'Dancing Script' }}>
              Solusi Digital
            </span>
            <br />
            yang mendukung perkembangan bisnis <span className="text-white">Anda.</span>
          </h1>

          <p className="text-gray-300 max-w-6xl mb-30 text-base md:text-Z" style={{ fontFamily: 'Poppins' }}>
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
