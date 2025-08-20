'use client'
import React, { useState, useEffect } from 'react';
import api from '../../lib/api';

type AboutUsData = {
  id: number;
  vision: string;
  mission: string;
};

export default function VisiMisi() {
  const [tab, setTab] = useState<'visi' | 'misi'>('visi');
  const [data, setData] = useState<AboutUsData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await api.get('/about-us');
      const aboutUsData = response.data.data || response.data;
      // asumsi hanya ada 1 entry about-us
      setData(Array.isArray(aboutUsData) ? aboutUsData[0] : aboutUsData);
    } catch (err) {
      console.error('Error fetching about us:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="px-6 md:px-[120px] py-16 bg-white text-gray-900 text-center">
        <p>Loading visi & misi...</p>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="px-6 md:px-[120px] py-16 bg-white text-gray-900 text-center">
        <p>Data visi & misi belum tersedia.</p>
      </section>
    );
  }

  const misiList = data.mission ? data.mission.split('\n').filter(Boolean) : [];

  return (
    <section className="px-6 md:px-[120px] py-16 bg-white text-gray-900">
      {/* Mobile tab */}
      <div className="md:hidden flex border-b border-orange-200 mb-8">
        {['visi', 'misi'].map((key) => (
          <button
            key={key}
            onClick={() => setTab(key as 'visi' | 'misi')}
            className={`flex-1 text-lg italic font-serif py-2 transition-colors duration-200 ${
              tab === key
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-orange-200'
            }`}
          >
            {key === 'visi' ? 'Visi' : 'Misi'}
          </button>
        ))}
      </div>

      {/* Mobile content */}
      <div className="md:hidden">
        {tab === 'visi' && (
          <p className="text-sm leading-relaxed whitespace-pre-line">
            {data.vision}
          </p>
        )}

        {tab === 'misi' && (
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
        )}
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex gap-[100px]">
        {/* Visi */}
        <div className="flex-1">
          <h2 className="text-xl font-serif italic mb-4">Visi</h2>
          <p className="text-sm leading-relaxed whitespace-pre-line">
            {data.vision}
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
