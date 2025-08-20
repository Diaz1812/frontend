"use client";

import React, { useEffect, useState } from "react";
import type { ReactElement } from "react";
import api from "../../lib/api";

interface MicrodataOptionItem {
  id: number;
  name_title: string;
  description: string;
}

export default function WhyMicrodata(): ReactElement {
  const [reasons, setReasons] = useState<MicrodataOptionItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchReasons = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get("/microdata-options");
      const data = response.data.data || response.data;
      if (Array.isArray(data)) {
        setReasons(data);
      } else {
        setReasons([]);
      }
    } catch (err: unknown) {
      console.error("Error fetching microdata options:", err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Gagal memuat data microdata options");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReasons();
  }, []);

  return (
    <section className="bg-black flex justify-center items-center px-4 py-16">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Kiri: Judul dan tombol */}
        <div className="flex flex-col justify-center text-left md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-orange-500 mb-2">
            Mengapa Microdata
          </h2>
          <h3 className="text-2xl md:text-4xl font-medium text-white mb-4">
            Jadi Pilihan Tepat
          </h3>
          <p className="text-sm text-gray-400 mb-6">
            Microdata hadir sebagai partner teknologi yang mengutamakan
            kualitas, ketepatan waktu, dan solusi yang benar-benar sesuai
            kebutuhan Anda.
          </p>
          <div className="flex md:justify-start justify-left">
            <button className="text-white border border-white rounded-full px-6 py-2 text-sm hover:bg-orange-500 transition">
              Hubungi Kami
            </button>
          </div>
        </div>

        {/* Kanan: List Alasan */}
        <div className="flex flex-col justify-center space-y-8">
          {loading && <p className="text-gray-400">Memuat alasan...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && reasons.length > 0 ? (
            reasons.map((item, index) => (
              <div
                key={item.id}
                className="flex items-start space-x-4 border-b border-gray-700 pb-4"
              >
                <div className="text-xl font-medium text-white w-6">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{item.name_title}</h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </div>
            ))
          ) : (
            !loading && !error && (
              <p className="text-gray-400">Belum ada data alasan</p>
            )
          )}
        </div>
      </div>
    </section>
  );
}
