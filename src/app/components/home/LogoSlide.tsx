import React from "react";

export default function LogoSlide() {
  const logos = [
    { src: "/logos/komdigi.png", width: 200, height: 200 },
    { src: "/logos/Komisi.png", width: 150, height: 190 },
    { src: "/logos/kementrian.png", width: 110, height: 195 },
    { src: "/logos/Kemendikbud.webp", width: 140, height: 180 },
    { src: "/logos/Kemenkess.png", width: 250, height: 200 },
    { src: "/logos/Selatan.png", width: 90, height: 190 },
    { src: "/logos/waykanan.png", width: 210, height: 200 },
    { src: "/logos/kadinn.png", width: 200 , height: 200 },
    // Tambahkan logo lain di sini dengan width & height
  ];

  return (
    <section
      className="bg-white border border-blue-400"
      style={{ width: "1513px", height: "422px" }}
    >
      <div className="overflow-x-auto h-full flex items-center px-8">
        <div className="flex gap-10">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={`Logo ${index}`}
              style={{
                width: `${logo.width}px`,
                height: `${logo.height}px`,
                objectFit: "contain",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
