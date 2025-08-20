"use client";

import React, { useEffect, useState } from "react";
import api from "../../lib/api"; // pastikan path sesuai project kamu
import { Info } from "lucide-react";

type Process = {
  id: number;
  icon?: string;
  icon_url?: string;
  title: string;
  description_title: string;
};

const ProcessSection: React.FC = () => {
  const [data, setData] = useState<Process[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get("/process");
      const processData = response.data.data || response.data;
      setData(processData);
    } catch (err) {
      console.error("Error fetching process:", err);
      setError("Gagal memuat data process");
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="bg-orange-50 flex justify-center items-center px-6 sm:px-[120px] py-16">
      <div
        className="flex flex-col justify-center items-start w-full"
        style={{
          maxWidth: "1513px", // width fill
          height: "706px", // fixed height
        }}
      >
        {/* Judul */}
        <div className="mb-16 text-left w-full">
          <p
            className="text-3xl text-orange-500 italic font-medium mb-4"
            style={{ fontFamily: "Dancing Script" }}
          >
            Our Process
          </p>
          <h2 className="text-3xl sm:text-5xl text-gray-800 leading-snug">
            Proses Yang <span className="font-bold">Mudah dan Cepat</span>
          </h2>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-left py-8 w-full">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mb-4"></div>
            <p className="text-lg text-gray-500">Loading process...</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-100 text-red-600 p-6 rounded-lg mb-6 text-left text-lg w-full">
            {error}
          </div>
        )}

        {/* Langkah-langkah */}
        {!loading && !error && (
          <div className="flex flex-col gap-10 sm:grid sm:grid-cols-3 sm:gap-[160px] text-left w-full">
            {data.map((process) => (
              <div
                key={process.id}
                className="flex flex-col items-start gap-4"
              >
                {/* Icon dari API */}
                <div>
                  {process.icon_url ? (
                    <img
                      src={process.icon_url}
                      alt={process.title}
                      className="w-14 h-14 object-contain"
                    />
                  ) : (
                    <Info className="w-10 h-10 text-gray-500" />
                  )}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 text-lg sm:text-xl mb-2">
                    {process.title}
                  </h4>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xs">
                    {process.description_title}
                  </p>
                </div>
              </div>
            ))}

            {data.length === 0 && (
              <p className="text-gray-500 col-span-3 text-lg">
                Belum ada data process.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProcessSection;
