"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const testiData = [
  {
    name: "Udin Kasbon",
    job: "Jabatan",
    message:
      "Lorem ipsum dolor sit amet consectetur. Arcu justo dolor curabitur facilisis. Malesuada fames magna cursus ultrices sit amet ultricies.",
  },
  {
    name: "Dian Anggara",
    job: "Staff IT",
    message:
      "Sangat terbantu dengan sistem yang dibangun oleh tim profesional ini. Pekerjaan jadi lebih cepat dan efisien!",
  },
  {
    name: "Eka Prasetya",
    job: "Manajer Proyek",
    message:
      "Kolaborasi yang luar biasa! Tim sangat responsif dan solusi yang diberikan sangat tepat sasaran.",
  },
  {
    name: "Budi Hartono",
    job: "CEO Perusahaan X",
    message:
      "Pengalaman bekerja sama yang sangat menyenangkan. Proyek selesai tepat waktu dan hasil memuaskan.",
  },
];

export default function OurClient() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTesti = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + (isDesktop() ? 2 : 1)) % testiData.length
    );
  };

  const prevTesti = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - (isDesktop() ? 2 : 1) + testiData.length) % testiData.length
    );
  };

  const isDesktop = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768;
    }
    return false;
  };

  return (
    <section className="py-24 px-4 md:px-20 text-left">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Title */}
        <div>
          <p className="text-orange-500 italic text-lg">Our Client</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
            Pengalaman <br className="hidden md:block" />
            Klien
          </h2>
          <p className="text-gray-500 text-xl mt-1">Bersama Kami</p>
        </div>

        {/* MOBILE: 1 testimonial */}
        <div className="block md:hidden">
          <TestimonialCard data={testiData[currentIndex]} />
        </div>

        {/* DESKTOP: 2 testimonial */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-12">
          <TestimonialCard data={testiData[currentIndex]} />
          <TestimonialCard
            data={testiData[(currentIndex + 1) % testiData.length]}
          />
        </div>

        {/* Navigation */}
        <div className="flex gap-4 mt-6 justify-center">

          <button
            onClick={prevTesti}
            className="w-12 h-12 rounded-full border border-o range-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 flex items-center justify-center"
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
      </div>
    </section>
  );
}

function TestimonialCard({ data }: { data: { name: string; job: string; message: string } }) {
  return (
    <div className="text-left">
      <p className="text-md md:text-lg text-gray-800 leading-relaxed mb-4">
        {data.message}
      </p>
      <h4 className="text-md md:text-lg font-semibold text-gray-900">
        {data.name}
      </h4>
      <p className="text-sm text-gray-500">{data.job}</p>
      <hr className="mt-2 w-full border-gray-200" />
    </div>
  );
}
