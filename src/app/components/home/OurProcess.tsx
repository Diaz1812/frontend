// components/ProcessSection.tsx

import React from "react";
import { ImageIcon } from "lucide-react";

interface Step {
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    title: "Perencanaan & Pemesanan",
    desc: "Hubungi Kami atau dapat langsung ke alamat kantor kami",
  },
  {
    title: "Design & Produksi",
    desc: "Design kebutuhan project dan proses developing project.",
  },
  {
    title: "Testing & Implementasi",
    desc: "Proses Testing, Pembayaran dan Implementasi",
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section className="bg-orange-50 flex justify-center items-center">
      <div className="w-[1200px] h-[600px] flex flex-col justify-center items-left text-left px-10">
        {/* Judul */}
        <div className="mb-16">
          <p className="italic text-orange-600 mb-1">Our Process</p>
          <h2 className="text-3xl text-gray-800">
            Proses Yang <span className="font-bold">Mudah dan Cepat</span>
          </h2>
        </div>

        {/* Langkah-langkah */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="space-y-4 max-w-xs">
              <div className="flex justify-left">
                <div className="w-10 h-10 rounded-md flex items-center justify-center">
                  <ImageIcon className="w-30 h-30 text-gray-400" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  {step.title}
                </h4>
                <p className="text-xs text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
