import React from "react";
import { BriefcaseIcon } from "lucide-react"; // pastikan lucide-react sudah diinstall
import Link from "next/link";

const jobs = Array(4).fill({
  title: "Software Developer",
  description:
    "Bertanggung jawab dalam merancang, mengembangkan, dan memelihara aplikasi berbasis web maupun mobile sesuai kebutuhan klien. Anda akan bekerja dengan teknologi terkini, berkolaborasi dengan tim profesional, dan berkontribusi menciptakan solusi digital yang inovatif dan andal.",
  link: "#",
});

const CareerOpportunities = () => {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Kiri - Deskripsi */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-medium italic text-gray-800 mb-4">
            Peluang Karier
          </h2>
          <p className="text-sm text-gray-600">
            Kami membuka kesempatan bagi para profesional berbakat untuk
            bergabung dan berkontribusi dalam membangun solusi digital yang
            berdampak. Lihat posisi yang tersedia dan jadilah bagian dari tim
            kami.
          </p>
        </div>

        {/* Kanan - Grid lowongan */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white shadow-sm p-6 rounded-lg border border-gray-200"
            >
              <div className="mb-4">
                <BriefcaseIcon className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{job.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{job.description}</p>
              <Link
                href={job.link}
                className="text-sm font-semibold text-gray-900 underline hover:text-orange-500"
              >
                Lihat lebih banyak
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunities;
