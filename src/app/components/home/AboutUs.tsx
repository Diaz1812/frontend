'use client';

import React from 'react';

const AboutAction: React.FC = () => {
  return (
    <section className="px-6 md:px-[120px] py-16 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Content */}
        <div>
          <h4 className="text-2xl text-orange-500 italic" style={{ fontFamily: 'Dancing Script' }}>
            About Us
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
            Kami Ada untuk Membantu Bisnis <br />
            Anda Bertumbuh
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Microdata Indonesia adalah perusahaan teknologi informasi yang berfokus pada integrasi sistem, konsultasi IT, dan pengembangan perangkat lunak untuk berbagai perusahaan dan sektor industri. Kami hadir untuk membantu bisnis Anda lebih efisien dan bertumbuh melalui layanan profesional, mulai dari perancangan hingga pengembangan software yang tepat dan inovatif.
          </p>
        </div>

        {/* Right Content - Statistik Sebaris */}
        {/*grid grid-cols-2 gap-6 md:flex md:flex-wrap md:items-center md:justify-between*/}
        <div className="flex flex-wrap justify-between md:items-center gap-6 w-full">
          <div className="text-center min-w-[120px] flex-1">
            <p className="text-2xl text-orange-500 font-bold">15+</p>
            <p className="text-sm text-gray-600">Tahun Pengalaman</p>
          </div>
          <div className="text-center min-w-[120px] flex-1">
            <p className="text-2xl text-orange-500 font-bold">50+</p>
            <p className="text-sm text-gray-600">Klien Puas</p>
          </div>
          <div className="text-center min-w-[120px] flex-1">
            <p className="text-2xl text-orange-500 font-bold">100+</p>
            <p className="text-sm text-gray-600">Proyek Tuntas</p>
          </div>
          <div className="text-center min-w-[120px] flex-1">
            <p className="text-2xl text-orange-500 font-bold">20</p>
            <p className="text-sm text-gray-600">Tim Profesional</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAction;
