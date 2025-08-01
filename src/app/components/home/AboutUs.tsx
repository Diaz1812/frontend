'use client';

import React from 'react';

const AboutAction: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-16 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
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

        {/* Right Content - Horizontal Statistics */}
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="text-center">
            <p className="text-2xl text-orange-500 font-bold">15+</p>
            <p className="text-sm text-gray-600">Tahun Pengalaman</p>
          </div>
          <div className="text-center">
            <p className="text-2xl text-orange-500 font-bold">50+</p>
            <p className="text-sm text-gray-600">Klien Puas</p>
          </div>
          <div className="text-center">
            <p className="text-2xl text-orange-500 font-bold">100+</p>
            <p className="text-sm text-gray-600">Proyek Tuntas</p>
          </div>
          <div className="text-center">
            <p className="text-2xl text-orange-500 font-bold">20</p>
            <p className="text-sm text-gray-600">Tim Profesional</p>
          </div>
        </div>
      </div>

      {/* Client Logos */}
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {[1, 2, 3, 4, 5].map((i: number) => (
          <div key={i} className="flex items-center space-x-2 text-gray-700">
            <span className="text-xl">🖼️</span>
            <span className="font-semibold">Client Logo</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutAction;
