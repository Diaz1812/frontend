"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Dancing_Script } from "next/font/google";
import api from "../../lib/api";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["600"] });

type Category = {
  id: number;
  name: string;
};

type Portofolio = {
  id: number;
  title: string;
  name_project: string;
  company_name: string;
  image_portofolio_url?: string;
  category?: Category;
};

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Semua");
  const [projects, setProjects] = useState<Portofolio[]>([]);
  const [filters, setFilters] = useState<string[]>(["Semua"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/portofolios");
        const data: Portofolio[] = res.data.data || res.data;
        setProjects(data);

        // Ambil kategori unik dari API
        const categories = Array.from(
          new Set(data.map((p) => p.category?.name).filter(Boolean))
        ) as string[];
        setFilters(["Semua", ...categories]);
      } catch (err) {
        console.error("Gagal fetch data portofolio", err);
      }
    };
    fetchData();
  }, []);

  const filteredProjects =
    activeFilter === "Semua"
      ? projects
      : projects.filter((p) => p.category?.name === activeFilter);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[10px] pb-[100px] bg-white">
      {/* Title + Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 sm:mb-8 gap-4 items-start">
        <h2
          className={`${dancingScript.className} text-3xl text-gray-800 font-semibold`}
        >
          Selected Project
        </h2>

        <div className="flex gap-1 overflow-x-auto sm:overflow-visible scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-1.5 text-sm rounded-full font-small border transition
                ${
                  activeFilter === filter
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-orange-500 border-orange-300 hover:bg-orange-50"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-[40px] justify-items-center">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.name_project}
            company={project.company_name}
            image={project.image_portofolio_url}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
