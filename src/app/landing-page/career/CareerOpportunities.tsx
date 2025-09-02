"use client";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image"; 
import api from "../../lib/api";

type CareerOpportunityItem = {
  id: number;
  title: string;
  description: string;
  requirements?: string | string[] | null;
  _career_requirements?: string | string[] | null;
};

function normalizeRequirements(raw: unknown): string[] {
  if (!raw) return [];
  if (Array.isArray(raw)) {
    return raw.map((x) => String(x).trim()).filter(Boolean);
  }

  const str = String(raw);
  return str
    .split(/[\r\n]+|[•–-]|,|;|\u2022/g)
    .map((s) => s.trim())
    .filter(Boolean);
}

export default function CareerSection() {
  const [data, setData] = useState<CareerOpportunityItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get("/career-opportunities");
      const careerData = res.data?.data ?? res.data ?? [];
      setData(Array.isArray(careerData) ? careerData : []);
    } catch (err) {
      console.error("Error fetching career opportunities:", err);
      setError("Failed to fetch career opportunities.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="w-full bg-black text-white py-20 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(255, 160, 0, 0.3) 0%, rgba(0, 0, 0, 0) 30%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">
          Peluang Karier{" "}
          <span className="text-white font-normal">Di PT. Microdata</span>
        </h2>

        {loading && <p className="text-gray-400">Loading career opportunities...</p>}
        {error && <p className="text-red-400">{error}</p>}
        {!loading && !error && data.length === 0 && (
          <p className="text-gray-400">Belum ada peluang karier tersedia.</p>
        )}

        {data.map((career) => {
          const reqs = normalizeRequirements(
            career.requirements ?? career._career_requirements
          );

          return (
            <div key={career.id} className="mb-12">
              {/* === Desktop Layout === */}
              <div className="hidden md:grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-base text-gray-300 mb-10 max-w-xl">
                    {career.title}
                  </p>

                  <h3 className="text-2xl font-semibold text-orange-500 mb-2">
                    Program Magang
                  </h3>

                  <p className="text-sm text-gray-300 mb-4 max-w-xl">
                    {career.description}
                  </p>

                  {reqs.length > 0 && (
                    <>
                      <h4 className="text-md font-semibold text-orange-400 mb-2">
                        Requirements
                      </h4>
                      <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1 mb-6">
                        {reqs.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full flex items-center gap-2 transition">
                    Daftar Sekarang <ArrowRight size={18} />
                  </button>
                </div>

                {/* Gambar Desktop */}
                <div className="flex justify-center items-center">
                  <Image
                    src="/images/gambar 2.JPG"
                    alt="Gambar Ilustrasi"
                    width={256} // sesuai w-64
                    height={256} // sesuai h-64
                    className="rounded-xl object-contain border border-gray-200"
                  />
                </div>
              </div>

              {/* === Mobile Layout === */}
              <div className="block md:hidden">
                <h2 className="text-3xl font-bold text-orange-500 mb-2">
                  Peluang Karier{" "}
                  <span className="text-white font-normal">Di PT. Microdata</span>
                </h2>
                <p className="text-sm text-gray-300 mb-6">{career.title}</p>

                <div className="flex gap-4 items-start mb-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-orange-500 mb-2">
                      Program Magang
                    </h3>
                    <p className="text-sm text-gray-300 mb-4">
                      {career.description}
                    </p>
                  </div>

                  {/* Gambar Mobile */}
                  <Image
                    src="/images/gambar 2.JPG"
                    alt="Gambar Ilustrasi"
                    width={96} // sesuai w-24
                    height={96} // sesuai h-24
                    className="rounded-lg object-contain border border-gray-200"
                  />
                </div>

                {reqs.length > 0 && (
                  <>
                    <h4 className="text-md font-semibold text-orange-400 mb-2">
                      Requirements
                    </h4>
                    <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1 mb-6">
                      {reqs.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </>
                )}

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full flex items-center gap-2 transition">
                  Daftar Sekarang <ArrowRight size={18} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
