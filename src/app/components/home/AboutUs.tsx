'use client';

import React, { useEffect, useState } from 'react';
import api from '../../lib/api';

type AboutUsData = {
  id: number;
  title: string;
  description: string;
  vision: string;
  mission: string;
};

const AboutAction: React.FC = () => {
  const [data, setData] = useState<AboutUsData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await api.get('/about-us');
      const aboutUsData = response.data.data || response.data;
      // ambil hanya 1 record (asumsi isi cuma 1 di DB)
      setData(Array.isArray(aboutUsData) ? aboutUsData[0] : aboutUsData);
    } catch (error) {
      console.error('Error fetching about us:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="px-6 md:px-[120px] py-16 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Content */}
        <div>
          <h4
            className="text-2xl text-orange-500 italic"
            style={{ fontFamily: 'Dancing Script' }}
          >
            About Us
          </h4>

          {loading ? (
            <>
              <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
                Loading title...
              </h2>
              <p className="text-gray-600 max-w-2xl">Loading description...</p>
            </>
          ) : data ? (
            <>
              <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4 whitespace-pre-line">
                {data.title}
              </h2>
              <p className="text-gray-600 max-w-2xl whitespace-pre-line">
                {data.description}
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
                Title belum tersedia
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Description belum tersedia
              </p>
            </>
          )}
        </div>

        {/* Right Content - Statistik */}
        <div className="overflow-x-auto flex justify-center">
          <div className="flex items-center gap-10 min-w-[500px]">
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
      </div>
    </section>
  );
};

export default AboutAction;
