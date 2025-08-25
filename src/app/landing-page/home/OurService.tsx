"use client";
import React, { useState, useEffect } from "react";
import { Poppins, Dancing_Script } from "next/font/google";
import api from "../../lib/api"; 

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type ServiceItem = {
  id: number;
  name_service: string;
  description: string;
};

export default function ServicesSection() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const response = await api.get("/services-landing-pages");
      const serviceData = response.data.data || response.data;
      setServices(Array.isArray(serviceData) ? serviceData : [serviceData]);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const displayedServices = showAll ? services : services.slice(0, 4);

  return (
    <section className="py-16 px-6 md:px-16 bg-white text-gray-800">
      {/* Judul bagian atas */}
      <div className="mb-10 md:text-center text-left px-2">
        <span
          className={`text-orange-400 text-2xl italic ${dancingScript.className}`}
        >
          Our Service
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Kami Hadirkan Teknologi yang Membuat <br /> Bisnis Anda Berkembang
        </h2>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center text-gray-500">Loading services...</div>
      )}

      {/* Daftar layanan */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 border-gray-200 relative">
        {displayedServices.map((service, index) => (
          <div
            key={service.id}
            className={`p-6 md:p-10 border-b border-gray-200
              ${index % 2 === 0 ? "md:border-r" : ""}
              ${index >= 2 ? "" : "md:border-b"}
            `}
          >
            <div className="text-sm text-gray-400 mb-1">
              {String(service.id).padStart(2, "0")}
            </div>
            <h3 className="font-semibold text-lg mb-2">{service.name_service}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Tombol Lihat Selengkapnya */}
      {services.length > 4 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-600 transition"
          >
            {showAll ? "Tutup" : "Lihat Selengkapnya"}
          </button>
        </div>
      )}
    </section>
  );
}
