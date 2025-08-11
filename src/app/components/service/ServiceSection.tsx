"use client";

import React from "react";

// Definisikan antarmuka untuk props ServiceCard
interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  number: string;
  buttonText?: string;
  isEven?: boolean;
  className?: string; // Tambahkan className sebagai prop opsional
}

// Komponen ServiceCard
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  number,
  buttonText = "Lihat Portfolio",
  className = "", // Default value untuk className
  isEven,
}) => {
  return (
    <div className={`relative bg-transparent flex flex-col gap-4 ${className}`}>
      {/* Nomor untuk desktop */}
      <span className={`text-white font-normal mb-2 hidden md:block ${isEven ? '' : 'mt-40'}`}>
        {number}.
      </span>

      {/* Gambar untuk desktop */}
      <div className="flex justify-end hidden md:flex">
        <div className="w-[220px] h-auto shadow-lg rounded overflow-hidden">
          {icon || <div className="w-full h-[120px] bg-white" />}
        </div>
      </div>

      {/* Konten untuk desktop */}
      <div className="text-left mt-2 px-2 hidden md:block">
        <h3 className="text-white text-xl font-normal mb-2">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed mb-4">{description}</p>
        <button className="px-5 py-2 border border-orange-500 text-orange-500 rounded-full text-sm hover:bg-orange-500 hover:text-white transition">
          {buttonText}
        </button>
      </div>

      {/* Layout untuk mobile */}
      <div className={`md:hidden px-2 ${isEven ? 'text-left' : 'text-right'}`}>
        {/* Gambar */}
        <div className={`flex ${isEven ? 'justify-start' : 'justify-end'} mb-4`}>
          <div className="w-[220px] h-auto shadow-lg rounded overflow-hidden">
            {icon || <div className="w-full h-[120px] bg-white" />}
          </div>
        </div>

        {/* Konten dengan nomor di judul */}
        <div>
          <h3 className="text-white text-xl font-normal mb-2">
            {number}. {title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed mb-4">{description}</p>
          <button className="px-5 py-2 border border-orange-500 text-orange-500 rounded-full text-sm hover:bg-orange-500 hover:text-white transition">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

// Definisikan antarmuka untuk data layanan
interface Service {
  number: string;
  title: string;
  description: string;
  image: string;
}

// Komponen Utama Halaman
const Page: React.FC = () => {
  const services = [
    {
      number: "01",
      title: "Mobile Technology",
      description:
        "Mengembangkan aplikasi mobile yang responsif dan user-friendly untuk mendukung kemudahan akses bisnis Anda di berbagai perangkat.",
      image: "/images/mobile technology.jpg",
    },
    {
      number: "02",
      title: "Digital Marketing",
      description:
        "Strategi pemasaran digital yang terukur untuk meningkatkan visibilitas, menjangkau audiens yang tepat, dan mendorong penjualan.",
      image: "/images/digital marketing.jpg",
    },
    {
      number: "03",
      title: "Desktop Technology",
      description:
        "Pembuatan aplikasi desktop yang andal dan aman untuk mendukung kemudahan operasional bisnis secara maksimal.",
      image: "/images/desktop technology.jpeg",
    },
    {
      number: "04",
      title: "Graphic Design",
      description:
        "Desain grafis kreatif dan profesional untuk meningkatkan identitas visual dan citra brand Anda.",
      image: "/images/graphic design.jpg",
    },
    {
      number: "05",
      title: "Interior Design",
      description:
        "Perencanaan interior yang fungsional dan estetis untuk menciptakan ruang kerja yang nyaman dan produktif.",
      image: "/images/interior design.jpg",
    },
    {
      number: "06",
      title: "Commercial Photography",
      description:
        "Fotografi komersial berkualitas tinggi untuk mendukung promosi produk, profil perusahaan, dan kebutuhan branding visual.",
      image: "/images/commercial photography.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <main className="pt-5">
        {/* Bagian Hero */}
        <section className="bg-[#0D0D0D] py-20 text-left md:text-center">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text italic text-2xl text-orange-500" style={{ fontFamily: 'Dancing Script' }}>Our Service</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Poppins' }}>
              Layanan Terbaik untuk Kebutuhan Digital Anda
            </h2>
          </div>
        </section>

        {/* Bagian Layanan */}
        <section className="relative bg-[#0D0D0D] md:bg-[linear-gradient(to_top_left,rgba(253,112,20,0.1)_0%,rgba(255,215,0,0.05)_30%,#0D0D0D_50%)] py-20">
          {/* Gradasi tengah hanya untuk desktop */}
          <div
            className="absolute inset-0 z-0 pointer-events-none hidden md:block"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(255, 160, 0, 0.3) 0%, rgba(0, 0, 0, 0) 30%)",
            }}
          ></div>
          {/* Garis Vertikal Tengah dengan panjang yang disesuaikan - garis kedua diturunkan */}
          <div className="absolute right-1/2 w-px bg-transparent border-l border-solid border-white/10 transform translate-x-1/2 md:block hidden" style={{ top: "150px", height: "300px" }} />
          <div className="absolute right-1/2 w-px bg-transparent border-l border-solid border-white/10 transform translate-x-1/2 md:block hidden" style={{ top: "714px", height: "400px" }} />
          <div className="absolute right-1/2 w-px bg-transparent border-l border-solid border-white/10 transform translate-x-1/2 md:block hidden" style={{ top: "1350px", height: "300px" }} />
          {/* Garis celah sudah tidak diperlukan karena garis dibuat terpisah */}
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                number={service.number}
                title={service.title}
                description={service.description}
                icon={
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-cover"
                  />}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;