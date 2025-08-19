"use client";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import api from "../../lib/api";

type Project = {
  id: number;
  name_project: string;
  company_name: string;
  image_portofolio_url?: string;
  category?: { id: number; name: string };
};

const HomeSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const res = await api.get("/portofolios");
        setProjects(res.data.data || res.data);
      } catch (err) {
        console.error("Gagal fetch project", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div className="flex-1">
            <h2
              className="text-3xl sm:text-4xl text-orange-500 italic"
              style={{ fontFamily: "Dancing Script" }}
            >
              Portofolio
            </h2>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2 text-black">
              Proyek Yang Telah Kami Selesaikan
            </h2>
          </div>

          {!isMobile && (
            <div className="flex-shrink-0">
              <Button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium py-2 px-5 rounded-full transition">
                Lihat lainnya
              </Button>
            </div>
          )}
        </div>

        {/* Konten */}
        {loading ? (
          <p className="text-center text-gray-500">Memuat proyek...</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-500">Belum ada proyek</p>
        ) : isMobile ? (
          <div className="relative max-w-md mx-auto">
            <motion.div
              key={projects[activeIndex].id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-4 rounded-xl shadow-md"
            >
              <div className="aspect-[4/3] bg-gray-100 rounded-md overflow-hidden">
                <img
                  src={projects[activeIndex].image_portofolio_url || "/placeholder.jpg"}
                  alt={projects[activeIndex].name_project}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-base text-gray-800">
                  {projects[activeIndex].name_project}
                </h3>
                <p className="text-sm text-gray-500">
                  {projects[activeIndex].company_name}
                </p>
              </div>
            </motion.div>

            {/* Tombol navigasi */}
            <div className="flex justify-center gap-2 mt-4">
              <Button
                onClick={handlePrev}
                variant="outline"
                className="w-10 h-10 p-0 rounded-full bg-white border border-orange-500 text-orange-500 hover:bg-orange-100"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <Button
                onClick={handleNext}
                variant="outline"
                className="w-10 h-10 p-0 rounded-full bg-white border border-orange-500 text-orange-500 hover:bg-orange-100"
              >
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="mt-8 flex justify-center">
              <Button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium py-2 px-5 rounded-full transition">
                Lihat lainnya
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-square bg-gray-100 rounded-md overflow-hidden">
                  <img
                    src={project.image_portofolio_url || "/placeholder.jpg"}
                    alt={project.name_project}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-base text-gray-800">
                    {project.name_project}
                  </h3>
                  <p className="text-sm text-gray-500">{project.company_name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeSection;
