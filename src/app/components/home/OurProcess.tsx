import React from "react";
import { Building2, MonitorPlay, Rocket } from "lucide-react";

interface Step {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    icon: <Building2 className="w-8 h-8 text-gray-500" />,
    title: "Perencanaan & Pemesanan",
    desc: "Hubungi Kami atau dapat langsung ke alamat kantor kami",
  },
  {
    icon: <MonitorPlay className="w-8 h-8 text-gray-500" />,
    title: "Design & Produksi",
    desc: "Design kebutuhan project dan proses developing project.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-gray-500" />,
    title: "Testing & Implementasi",
    desc: "Proses Testing, Pembayaran dan Implementasi",
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section className="bg-orange-50 flex justify-center items-center px-4 py-16">
      <div className="w-full max-w-7xl">
        {/* Judul */}
        <div className="mb-12">
          <p
            className="text-2xl text-orange-500 italic font-medium"
            style={{ fontFamily: "Dancing Script" }}
          >
            Our Proses
          </p>
          <h2 className="text-2xl sm:text-3xl text-gray-800 text-center sm:text-left">
            Proses Yang <span className="font-bold">Mudah dan Cepat</span>
          </h2>
        </div>

        {/* Langkah-langkah */}
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-3 sm:gap-12">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4 items-start text-left">
              <div>{step.icon}</div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
