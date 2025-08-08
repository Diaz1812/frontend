"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["600"] });

type Project = {
  id: number;
  title: string;
  company: string;
  category: string;
};

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Semua");

  const filters: string[] = ["Semua", "Mobile", "Web", "Graphic Design"];

  const projects: Project[] = [
    {
      id: 1,
      title: "Application Name",
      company: "Company Name",
      category: "Mobile",
    },
    {
      id: 2,
      title: "Application Name",
      company: "Company Name",
      category: "Web",
    },
    {
      id: 3,
      title: "Application Name",
      company: "Company Name",
      category: "Mobile",
    },
    {
      id: 4,
      title: "Application Name",
      company: "Company Name",
      category: "Graphic Design",
    },
    {
      id: 5,
      title: "Application Name",
      company: "Company Name",
      category: "Web",
    },
    {
      id: 6,
      title: "Application Name",
      company: "Company Name",
      category: "Mobile",
    },
    {
      id: 7,
      title: "Application Name",
      company: "Company Name",
      category: "Graphic Design",
    },
    {
      id: 8,
      title: "Application Name",
      company: "Company Name",
      category: "Web",
    },
  ];

  const filteredProjects =
    activeFilter === "Semua"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[10px] pb-[100px] bg-white">
      {/* Title + Filter Buttons */}
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
            title={project.title}
            company={project.company}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
