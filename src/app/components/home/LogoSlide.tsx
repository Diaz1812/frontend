import React from "react";

export default function LogoSlide() {
  const logos = [
    "/logos/komdigi.png",
    "/logos/Komisi.png",
    "/logos/kementrian.png",
    "/logos/Kemendikbud.webp",
    "/logos/Kemenkes.png",
    "/logos/Selatan.png",
    "/logos/waykanan.png",
    "/logos/kadin.png",
    // Tambahkan path logo lainnya di sini
  ];

  return (
    <section
      className="bg-white border border-blue-400"
      style={{ width: "1513px", height: "422px" }}
    >
      <div className="overflow-x-auto h-full flex items-center px-8">
        <div className="flex gap-10">
          {logos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Logo ${index}`}
              className="h-36 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
