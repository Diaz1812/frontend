import React from "react";

export default function LogoSlide() {
  const logos = [
    { image: "/logos/Kemenkess.png", name: "Kementerian Kesehatan" },
    { image: "/logos/Komisi.png", name: "Komisi" },
    { image: "/logos/kementrian.png", name: "Kementerian" },
    {
      image: "/logos/Kemendikbud.webp",
      name: "Kementerian Pendidikan dan Kebudayaan",
    },
    { image: "/logos/Selatan.png", name: "Selatan" },
    { image: "/logos/waykanan.png", name: "Way Kanan" },
    { image: "/logos/komdigi.png", name: "Komdigi" },
    { image: "/logos/kadinn.png", name: "KADINN" },
  ];

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="bg-white w-full py-8 px-4">
      <div className="relative overflow-hidden">
        <div className="carousel-track flex animate-scroll gap-6">
          {duplicatedLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.image}
              alt={logo.name}
              className="h-16 w-auto md:h-32 flex-shrink-0 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
