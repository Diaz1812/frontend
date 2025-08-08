import React from "react";

export default function LogoSlide() {
  const logos = [
    { src: "/logos/Kemenkess.png", name: "Kementerian Kesehatan" },
    { src: "/logos/Komisi.png", name: "Komisi" },
    { src: "/logos/kementrian.png", name: "Kementerian" },
    {
      src: "/logos/Kemendikbud.webp",
      name: "Kementerian Pendidikan dan Kebudayaan",
    },
    { src: "/logos/Selatan.png", name: "Selatan" },
    { src: "/logos/waykanan.png", name: "Way Kanan" },
    { src: "/logos/komdigi.png", name: "Komdigi" },
    { src: "/logos/kadinn.png", name: "KADINN" },
  ];

  // Duplikat array untuk looping mulus
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="bg-white w-full py-8 px-4">
      <div className="relative overflow-hidden">
        <div className="carousel-track flex animate-scroll gap-6">
          {duplicatedLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.name}
              className="h-16 w-auto md:h-32 flex-shrink-0 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
