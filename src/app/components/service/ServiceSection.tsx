"use client";

import React from "react";

// Define interface for ServiceCard props
interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  number: string;
  buttonText?: string;
  isEven?: boolean;
}

// ServiceCard Component
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  number,
  buttonText = "Lihat Portfolio",
  isEven = false,
}) => {
  if (isEven) {
    // Layout untuk nomor genap (02, 04, dst) - konten di kiri, icon di kanan
    return (
      <div className="bg-white border border-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between">
          {/* Content Left */}
          <div className="flex-1">
            <div className="mb-4">
              <span className="text-sm text-gray-500">{number}</span>
              <h3 className="text-xl font-semibold text-gray-900 ml-2 inline">
                {title}
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-md">
              {description}
            </p>

            <button className="px-6 py-2 border border-orange-400 text-orange-500 rounded-full text-sm hover:bg-orange-50 transition-colors">
              {buttonText}
            </button>
          </div>

          {/* Icon Right */}
          <div className="ml-8">
            <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
              {icon || (
                <svg
                  className="w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Layout untuk nomor ganjil (01, 03, dst) - center aligned
  return (
    <div className="bg-white border border-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        {/* Icon Left */}
        <div className="mr-8">
          <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
            {icon || (
              <svg
                className="w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Content Right */}
        <div className="flex-1 text-right">
          <div className="mb-4">
            <span className="text-sm text-gray-500">{number}</span>
            <h3 className="text-xl font-semibold text-gray-900 ml-2 inline">
              {title}
            </h3>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-md ml-auto">
            {description}
          </p>
          <button className="px-6 py-2 border border-orange-400 text-orange-500 rounded-full text-sm hover:bg-orange-50 transition-colors">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

// Define interface for service data
interface Service {
  number: string;
  title: string;
  description: string;
}

// Main Page Component
const Page: React.FC = () => {
  const services: Service[] = [
    {
      number: "01",
      title: "Mobile Technology",
      description:
        "Mengembangkan aplikasi mobile yang responsif dan user-friendly untuk mendukung kemudahan akses bisnis Anda di berbagai perangkat.",
    },
    {
      number: "02",
      title: "Digital Marketing",
      description:
        "Strategi pemasaran digital yang terkini untuk meningkatkan visibilitas, menjangkau audiens yang tepat, dan mendorong penjualan.",
    },
    {
      number: "03",
      title: "Desktop Technology",
      description:
        "Pembuatan perangkat lunak desktop yang andal dan aman untuk mendukung kebutuhan operasional bisnis secara maksimal.",
    },
    {
      number: "04",
      title: "Graphic Desain",
      description:
        "Desain gratis kreatif dan profesional untuk memperkuat identitas visual dan citra brand Anda.",
    },
    {
      number: "05",
      title: "Interior Design",
      description:
        "Perencanaan interior yang fungsional dan estetis untuk menciptakan ruang kerja yang nyaman dan produktif.",
    },
    {
      number: "06",
      title: "Commercial Photography",
      description:
        "Fotografi komersial berkualitas tinggi untuk mendukung promosi produk, profil perusahaan, dan kebutuhan branding visual.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left">
              <p
                className="text-2xl font-semibold text-gray-900"
                style={{ fontFamily: "cursive" }}
              >
                Our Service
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Kami Hadirkan Teknologi yang Membuat <br />
                Bisnis Anda Berkembang
              </h1>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  number={service.number}
                  title={service.title}
                  description={service.description}
                  isEven={parseInt(service.number) % 2 === 0}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
