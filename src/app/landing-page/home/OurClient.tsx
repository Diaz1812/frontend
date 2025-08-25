"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import api from "../../lib/api"; // pastikan path sesuai project kamu

type ClientItem = {
  id: number;
  name_client: string;
  position_client: string;
  description_client: string;
};

export default function OurClient() {
  const [clients, setClients] = useState<ClientItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchClients = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get("/clients");
      const clientData = response.data.data || response.data;
      setClients(clientData);
    } catch (err) {
      console.error("Error fetching clients:", err);
      setError("Gagal memuat data client.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const isDesktop = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768;
    }
    return false;
  };

  const nextTesti = () => {
    if (clients.length === 0) return;
    setCurrentIndex((prevIndex) =>
      (prevIndex + (isDesktop() ? 2 : 1)) % clients.length
    );
  };

  const prevTesti = () => {
    if (clients.length === 0) return;
    setCurrentIndex((prevIndex) =>
      (prevIndex - (isDesktop() ? 2 : 1) + clients.length) % clients.length
    );
  };

  return (
    <section className="py-24 px-4 md:px-20 text-left">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Title */}
        <div>
          <p className="text-orange-500 italic text-lg">Our Client</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
            Pengalaman Klien
          </h2>
          <p className="text-gray-500 text-xl mt-1">Bersama Kami</p>
        </div>

        {/* Loading / Error */}
        {loading && <p className="text-gray-500">Memuat data client...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* MOBILE: 1 testimonial */}
        {!loading && clients.length > 0 && (
          <div className="block md:hidden">
            <TestimonialCard data={clients[currentIndex]} />
          </div>
        )}

        {/* DESKTOP: 2 testimonial */}
        {!loading && clients.length > 1 && (
          <div className="hidden md:grid md:grid-cols-2 md:gap-12">
            <TestimonialCard data={clients[currentIndex]} />
            <TestimonialCard
              data={clients[(currentIndex + 1) % clients.length]}
            />
          </div>
        )}

        {/* Navigation */}
        {clients.length > 1 && (
          <div className="flex gap-4 mt-6 justify-center">
            <button
              onClick={prevTesti}
              className="w-12 h-12 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 flex items-center justify-center"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={nextTesti}
              className="w-12 h-12 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 flex items-center justify-center"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function TestimonialCard({ data }: { data: ClientItem }) {
  return (
    <div className="text-left">
      <p className="text-md md:text-lg text-gray-800 leading-relaxed mb-4">
        {data.description_client}
      </p>
      <h4 className="text-md md:text-lg font-semibold text-gray-900">
        {data.name_client}
      </h4>
      <p className="text-sm text-gray-500">{data.position_client}</p>
      <hr className="mt-2 w-full border-gray-200" />
    </div>
  );
}
