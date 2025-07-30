// components/TeamSection.tsx
import React from "react";

const teamMembers = Array(6).fill({
  name: "Nama Orang",
  position: "Jabatan/Posisi",
});

const TeamSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-left max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Jadilah Bagian <span className="italic font-normal">dari</span>
          </h2>
          <p className="text-2xl text-gray-800 mt-1">Tim Kami</p>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            Mari bergabung bersama tim yang berkomitmen menciptakan produk
            digital inovatif. Kami membuka kesempatan bagi Anda yang ingin
            tumbuh dan berkontribusi dalam proyek-proyek yang berarti.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full" />
              <p className="mt-4 font-medium text-sm text-gray-800">
                {member.name}
              </p>
              <p className="text-xs text-gray-500">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
