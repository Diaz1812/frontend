"use client";
import React, { useEffect, useState } from "react";
import api from "../../lib/api"; // sesuaikan path dengan struktur project-mu

type Partnership = {
  id: number;
  name: string;
  logo_url?: string;
};

export default function LogoSlide() {
  const [logos, setLogos] = useState<Partnership[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchLogos = async () => {
    setLoading(true);
    try {
      const res = await api.get("/partnerships");
      const data = res.data.data || res.data;
      setLogos(data);
    } catch (err) {
      console.error("Gagal fetch partnership logos:", err);
      setLogos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogos();
  }, []);

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="bg-white w-full py-8 px-4">
      <div className="relative overflow-hidden">
        {loading ? (
          <p className="text-center text-gray-500">Loading logos...</p>
        ) : (
          <div className="carousel-track flex animate-scroll gap-6">
            {duplicatedLogos.map((logo, idx) => (
              <img
                key={`${logo.id}-${idx}`}
                src={logo.logo_url || "/placeholder.png"}
                alt={logo.name}
                className="h-16 w-auto md:h-32 flex-shrink-0 object-contain"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
