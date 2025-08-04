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
  return (
    <section
      className="w-full py-12 px-4 sm:px-6"
      style={{
        background: "linear-gradient(to right, #fbe3d6ff, #FFFFFF)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Judul & Deskripsi */}
        <div className="text-left mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-orange-500">
            Jadilah Bagian{" "}
            <span className="italic" style={{ fontFamily: "Dancing Script" }}>
              Dari
            </span>
          </h2>
          <h3 className="text-xl sm:text-3xl text-gray-800 font-light">
            Tim Kami
          </h3>
          <p className="text-gray-700 mt-3 max-w-lg text-sm sm:text-base">
            Mari bergabung bersama tim yang berkomitmen menciptakan produk
            digital inovatif. Kami membuka kesempatan bagi Anda yang ingin
            tumbuh dan berkontribusi dalam proyek-proyek yang berarti.
          </p>
        </div>

        {/* Grid Team */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 mx-auto overflow-hidden rounded-full bg-gray-200">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-sm font-medium mt-2 text-gray-900">
                {member.name}
              </p>
              <p className="text-xs text-gray-500">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
