import { ArrowRight } from "lucide-react";

export default function CareerSection() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 relative overflow-hidden">
      {/* Gradasi terang di tengah bawah */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(255, 160, 0, 0.3) 0%, rgba(0, 0, 0, 0) 30%)",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* === Desktop Layout === */}
        <div className="hidden md:grid md:grid-cols-2 gap-10 items-center">
          {/* Konten Kiri */}
          <div>
            <h2 className="text-4xl font-bold text-orange-500 mb-2">
              Peluang Karier{" "}
              <span className="text-white font-normal">Di PT. Microdata</span>
            </h2>
            <p className="text-base text-gray-300 mb-10 max-w-xl">
              Kami membuka kesempatan bagi individu bertalenta yang ingin tumbuh
              dan berkontribusi di dunia teknologi. Temukan peran yang sesuai
              dengan minat dan keahlianmu!
            </p>

            <h3 className="text-2xl font-semibold text-orange-500 mb-2">
              Program Magang
            </h3>
            <p className="text-sm text-gray-300 mb-4 max-w-xl">
              Bagi kamu siswa atau mahasiswa yang ingin merasakan pengalaman
              langsung di industri teknologi, program magang di PT. Microdata
              Indonesia adalah langkah awal yang tepat. Di sini, kamu akan
              belajar, berkolaborasi, dan terlibat dalam proyek nyata bersama
              tim profesional.
            </p>

            <h4 className="text-md font-semibold text-orange-400 mb-2">
              Requirements
            </h4>
            <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1 mb-6">
              <li>Pendidikan di bidang IT atau sejenis.</li>
              <li>Menguasai minimal satu bahasa pemrograman.</li>
              <li>Memiliki semangat belajar dan berkembang.</li>
              <li>Bersedia magang secara WFO di kantor.</li>
            </ul>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full flex items-center gap-2 transition">
              Daftar Magang <ArrowRight size={18} />
            </button>
          </div>

          {/* Gambar Kanan */}
          <div className="flex justify-center items-center">
            <div className="w-64 h-64 bg-gray-900/20 border border-dashed border-gray-700 rounded-xl flex items-center justify-center">
              <span className="text-sm text-gray-500">[Gambar Ilustrasi]</span>
            </div>
          </div>
        </div>

        {/* === Mobile Layout === */}
        <div className="block md:hidden">
          <h2 className="text-3xl font-bold text-orange-500 mb-2">
            Peluang Karier{" "}
            <span className="text-white font-normal">Di PT. Microdata</span>
          </h2>
          <p className="text-sm text-gray-300 mb-6">
            Kami membuka kesempatan bagi individu bertalenta yang ingin tumbuh
            dan berkontribusi di dunia teknologi. Temukan peran yang sesuai
            dengan minat dan keahlianmu!
          </p>

          <div className="flex gap-4 items-start mb-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-orange-500 mb-2">
                Program Magang
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Bagi kamu siswa atau mahasiswa yang ingin merasakan pengalaman
                langsung di industri teknologi, program magang di PT. Microdata
                Indonesia adalah langkah awal yang tepat.
              </p>
            </div>

            <div className="w-24 h-24 bg-gray-900/20 border border-dashed border-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-xs text-gray-500">[Gambar]</span>
            </div>
          </div>

          <h4 className="text-md font-semibold text-orange-400 mb-2">
            Requirements
          </h4>
          <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1 mb-6">
            <li>Pendidikan di bidang IT atau sejenis.</li>
            <li>Menguasai minimal satu bahasa pemrograman.</li>
            <li>Memiliki semangat belajar dan berkembang.</li>
            <li>Bersedia magang secara WFO di kantor.</li>
          </ul>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full flex items-center gap-2 transition">
            Daftar Magang <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
