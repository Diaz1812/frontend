// components/ClientExperience.tsx

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ClientExperience: React.FC = () => {
  return (
    <section className="flex justify-center items-center bg-white">
      <div className="w-[1200px] h-[500px] px-12 py-16 flex flex-col justify-between">
        {/* Header */}
        <div>
          <p className="italic text-gray-600 mb-1">Our Client</p>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            Pengalaman Klien
            <br />
            <span className="font-normal">Bersama Kami</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {[1, 2].map((_, index: number) => (
            <div key={index} className="space-y-6 border-b pb-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Arcu justo dolor
                curabitur facilisis. Malesuada fames magna cursus ultrices sit
                amet ultricies.
              </p>
              <div>
                <p className="font-bold text-sm text-gray-900">Udin Kasbon</p>
                <p className="text-sm text-gray-900">Jabatan</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigasi Panah */}
        <div className="flex justify-end space-x-4 mt-10">
          <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
            <ArrowLeft size={16} />
          </button>
          <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientExperience;
