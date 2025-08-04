"use client";
import { FaTools, FaLock, FaGlobe } from "react-icons/fa";

export default function LiniBisnis() {
  return (
    <section className="pt-[160px] pr-[120px] pb-[160px] pl-[120px] bg-[#fff9f5] min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Lini Bisnis Microdata</h1>
      <p className="text-gray-600 max-w-3xl mb-16">
        Microdata terus berkembang melalui berbagai lini usaha yang saling mendukung untuk memenuhi kebutuhan bisnis dan personal Anda secara terintegrasi.
      </p>

      <div className="flex gap-[120px] flex-wrap">
        {/* Microdata Towing */}
        <div className="max-w-xs space-y-4">
          <div className="flex items-center gap-3">
            <FaTools className="text-xl text-gray-800" />
            <span className="text-lg font-semibold text-gray-900">Microdata Towing</span>
          </div>
          <p className="text-sm text-gray-600">Layanan derek cepat & aman untuk kondisi darurat.</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-5 rounded-full text-sm transition">
            Kunjungi Situs ↗
          </button>
        </div>

        {/* Microdata Retail */}
        <div className="max-w-xs space-y-4">
          <div className="flex items-center gap-3">
            <FaLock className="text-xl text-gray-800" />
            <span className="text-lg font-semibold text-gray-900">Microdata Retail</span>
          </div>
          <p className="text-sm text-gray-600">Produk teknologi terpercaya untuk kebutuhan bisnis & personal.</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-5 rounded-full text-sm transition">
            Kunjungi Situs ↗
          </button>
        </div>

        {/* Microdata GPM Internet */}
        <div className="max-w-xs space-y-4">
          <div className="flex items-center gap-3">
            <FaGlobe className="text-xl text-gray-800" />
            <span className="text-lg font-semibold text-gray-900">Microdata GPM Internet</span>
          </div>
          <p className="text-sm text-gray-600">Internet cepat & stabil untuk rumah dan kantor.</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-5 rounded-full text-sm transition">
            Kunjungi Situs ↗
          </button>
        </div>
      </div>
    </section>
  );
}
