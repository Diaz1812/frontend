import React from "react";

export default function LogoSlide() {
  const logos = [
    { image: "/Logos/Kemenkess.png", name: "Kementerian Kesehatan" },
    { image: "/Logos/Komisi.png", name: "Komisi" },
    { image: "/Logos/kementrian.png", name: "Kementerian" },
    {
      image: "/Logos/Kemendikbud.webp",
      name: "Kementerian Pendidikan dan Kebudayaan",
    },
    { image: "/Logos/Selatan.png", name: "Selatan" },
    { image: "/Logos/waykanan.png", name: "Way Kanan" },
    { image: "/Logos/komdigi.png", name: "Komdigi" },
    { image: "/Logos/kadinn.png", name: "KADINN" },
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
