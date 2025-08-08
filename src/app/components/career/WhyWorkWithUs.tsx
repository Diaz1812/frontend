// components/WhyWorkWithUs.tsx
import React from "react";
import { HandshakeIcon } from "lucide-react"; // Gunakan lucide-react (pastikan terinstal)

const items = Array(4).fill({
  title: "Tim yang Ramah dan Kolaboratif",
  description:
    "Bekerja dalam tim yang solid, saling mendukung, dan menghargai kontribusi setiap orang.",
});

const WhyWorkWithUs = () => {
  return (
    <section className="py-20 pb-20 px-4" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Why Work With Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 text-left">
          {items.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="p-2 bg-gray-200 rounded-lg">
                <HandshakeIcon className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
