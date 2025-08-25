"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import api from "../../lib/api";

type JobPosition = {
  id: number;
  position: string;
  description: string;
};

export default function FullTimePositions() {
  const [positions, setPositions] = useState<JobPosition[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPositions = async () => {
    try {
      const res = await api.get("/positions");
      const data = res.data.data || res.data;
      setPositions(data);
    } catch (error) {
      console.error("Error fetching positions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPositions();
  }, []);

  return (
    <section className="w-full bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-orange-500 mb-4">
          Posisi Full-Time
        </h2>
        <p className="text-sm md:text-base text-gray-300 mb-6 max-w-2xl">
          Kami membuka kesempatan bagi profesional yang ingin berkontribusi
          dalam membangun solusi digital berdampak.
        </p>

        {loading ? (
          <p className="text-gray-400">Loading positions...</p>
        ) : positions.length > 0 ? (
          <div className="overflow-x-auto snap-x snap-mandatory md:overflow-visible pb-4">
            <div className="flex gap-4 md:grid md:grid-cols-3 md:gap-6">
              {positions.map((job) => (
                <div
                  key={job.id}
                  className="min-w-[280px] bg-white text-black rounded-xl p-6 shadow hover:shadow-lg transition snap-start"
                >
                  <h4 className="text-lg font-semibold mb-2">{job.position}</h4>
                  <p className="text-sm text-gray-700 mb-4">
                    {job.description}
                  </p>
                  <button className="text-orange-500 hover:underline flex items-center gap-1 text-sm font-semibold">
                    Lihat Detail <ArrowRight size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-400">Tidak ada posisi tersedia</p>
        )}
      </div>
    </section>
  );
}
