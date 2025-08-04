import React from "react";

export default function LogoSlide() {
  const logos = [
    { src: "/logos/Kemenkess.png" },
    { src: "/logos/Komisi.png" },
    { src: "/logos/kementrian.png" },
    { src: "/logos/Kemendikbud.webp" },
    { src: "/logos/Selatan.png" },
    { src: "/logos/waykanan.png" },
    { src: "/logos/komdigi.png" },
    { src: "/logos/kadinn.png" },
  ];

  return (
    <section className="bg-white w-full py-8 px-4">
      {/* Desktop scroll, Mobile wrap */}
      <div className="overflow-x-auto md:overflow-x-auto overflow-hidden">
        <div className="flex md:flex-nowrap flex-wrap justify-center items-center gap-6">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={`Logo ${index}`}
              className="h-16 w-auto md:h-32 flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
