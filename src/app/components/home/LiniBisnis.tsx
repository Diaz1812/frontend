"use client";
import React, { useEffect, useState } from "react";
import api from "../../lib/api";

type BusinessLine = {
  id: number;
  icon?: string;
  icon_url?: string;
  title_business: string;
  description: string;
};

export default function LiniBisnis() {
  const [data, setData] = useState<BusinessLine[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await api.get("/business-lines");
      const resData = response.data.data || response.data;
      setData(resData);
    } catch (err) {
      console.error("Error fetching business lines:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="pt-[160px] pr-6 pb-[160px] pl-6 md:px-[120px] bg-[#fff9f5] min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Lini Bisnis Microdata
      </h1>
      <p className="text-gray-600 max-w-3xl mb-16">
        Microdata terus berkembang melalui berbagai lini usaha yang saling mendukung
        untuk memenuhi kebutuhan bisnis dan personal Anda secara terintegrasi.
      </p>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
  {data.map((item) => (
    <div key={item.id} className="max-w-xs w-full space-y-4 mx-auto">
      <div className="flex flex-col gap-1 items-center md:items-start">
        {item.icon_url ? (
          <img
            src={item.icon_url}
            alt={item.title_business}
            className="w-8 h-8 object-contain"
          />
        ) : (
          <div className="w-8 h-8 bg-gray-300 rounded" />
        )}
        <span className="text-lg font-semibold text-gray-900">
          {item.title_business}
        </span>
      </div>
      <p className="text-sm text-gray-600 text-center md:text-left">
        {item.description}
      </p>
      <div>
        <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white py-2 px-5 rounded-full text-sm transition">
          Kunjungi Situs ↗
        </button>
      </div>
    </div>
  ))}
</div>

      )}
    </section>
  );
}
