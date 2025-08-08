import Image from "next/image";

const teamMembers = [
  { name: "Nama Orang", position: "Jabatan/Posisi", img: "/images/image.jpg" },
  { name: "Nama Orang", position: "Jabatan/Posisi", img: "/images/image.jpg" },
  { name: "Nama Orang", position: "Jabatan/Posisi", img: "/images/image.jpg" },
  { name: "Nama Orang", position: "Jabatan/Posisi", img: "/images/image.jpg" },
  { name: "Nama Orang", position: "Jabatan/Posisi", img: "/images/image.jpg" },
  { name: "Nama Orang", position: "Jabatan/Posisi", img: "/images/image.jpg" },
  { name: "Nama Orang", position: "Jabatan/Posisi", img: "/images/image.jpg" },
];

export default function TeamSection() {
  // Duplicate array for smooth looping
  const duplicated = [...teamMembers, ...teamMembers];

  return (
    <section
      className="w-full py-12 px-4 sm:px-6"
      style={{
        background:
          "linear-gradient(to right bottom, #fbe3d6ff 0%, #fbe3d6ff 10%, #ffffff 30%, #ffffff 0%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Judul & Deskripsi */}
        <div className="text-left mb-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-orange-500">
            Jadilah Bagian{" "}
            <span
              className="text-500 italic"
              style={{ fontFamily: "Dancing Script" }}
            >
              Dari
            </span>
          </h2>
          <h3 className="text-xl sm:text-3xl text-gray-800 font-light">
            Tim Kami
          </h3>
          <p className="text-gray-600 mt-3 max-w-lg text-sm sm:text-base">
            Mari bergabung bersama tim yang berkomitmen menciptakan produk
            digital inovatif. Kami membuka kesempatan bagi Anda yang ingin
            tumbuh dan berkontribusi dalam proyek-proyek yang berarti.
          </p>
        </div>

        {/* Scroll Horizontal untuk Mobile */}
        <div className="relative overflow-hidden md:hidden">
          <div className="carousel-track flex animate-scroll gap-6">
            {duplicated.map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center justify-center min-w-[100px]"
              >
                <div className="w-24 h-24 mx-auto overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-2 text-sm text-black text-center">
                  {member.name}
                </p>
                <p className="text-xs text-black text-center">
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Grid Layout untuk Desktop */}
        <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 md:gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex-shrink-0 text-center w-full">
              <div className="w-24 h-24 mx-auto overflow-hidden rounded-full bg-gray-200">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-2 text-sm text-black text-center">
                {member.name}
              </p>
              <p className="text-xs text-black text-center">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
