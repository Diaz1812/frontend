"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import api from "../../lib/api"; 

type Technology = {
  id: number;
  name: string;
  image_url?: string;
};

const TechnologySection: React.FC = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTechnologies = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get("/technologies");
      const data = res.data.data || res.data;
      setTechnologies(data);
    } catch (err) {
      console.error("Error fetching technologies:", err);
      setError("Gagal memuat data teknologi");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTechnologies();
  }, []);

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-poppins font-light text-base sm:text-xl text-gray-900 text-center mt-8 mb-8 sm:mt-10 sm:mb-10 leading-normal">
          Teknologi Yang Digunakan
        </h2>

        {loading && (
          <p className="text-center text-gray-500">Memuat teknologi...</p>
        )}
        {error && (
          <p className="text-center text-red-500">{error}</p>
        )}

        {!loading && !error && (
          <div className="flex flex-wrap justify-center items-center gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className="flex flex-col items-center group cursor-pointer w-20"
              >
                <div className="w-16 h-16 flex items-center justify-center">
                  {tech.image_url ? (
                    <Image
                      src={tech.image_url}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  )}
                </div>
                <span className="mt-2 text-sm text-gray-600 group-hover:text-gray-900 transition-colors text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TechnologySection;
