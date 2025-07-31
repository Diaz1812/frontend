import { ArrowRight } from "lucide-react";

export default function FullTimePositions() {
  const jobs = [
    {
      title: "Software Developer",
      desc: `Bertanggung jawab dalam merancang, mengembangkan, dan memelihara aplikasi berbasis web maupun mobile sesuai kebutuhan klien. Anda akan bekerja dengan teknologi terkini, berkolaborasi dengan tim profesional, dan berkontribusi menciptakan solusi digital yang inovatif dan andal.`,
    },
    {
      title: "Software Developer",
      desc: `Bertanggung jawab dalam merancang, mengembangkan, dan memelihara aplikasi berbasis web maupun mobile sesuai kebutuhan klien. Anda akan bekerja dengan teknologi terkini, berkolaborasi dengan tim profesional, dan berkontribusi menciptakan solusi digital yang inovatif dan andal.`,
    },
    {
      title: "Software Developer",
      desc: `Bertanggung jawab dalam merancang, mengembangkan, dan memelihara aplikasi berbasis web maupun mobile sesuai kebutuhan klien. Anda akan bekerja dengan teknologi terkini, berkolaborasi dengan tim profesional, dan berkontribusi menciptakan solusi digital yang inovatif dan andal.`,
    },
  ];

  return (
    <section className="w-full bg-black text-white py-29 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
          Posisi Full-Time
        </h2>
        <p className="text-sm md:text-base text-gray-300 mb-6 max-w-2xl">
          Kami juga membuka kesempatan bagi para profesional muda yang siap
          mengambil peran lebih besar dalam membangun solusi digital berdampak.
        </p>

        <h3 className="text-md md:text-lg font-semibold text-orange-400 mb-8">
          Posisi yang tersedia:
        </h3>

        <div className="grid gap-6 md:grid-cols-3">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-2">{job.title}</h4>
              <p className="text-sm text-gray-700 mb-4">{job.desc}</p>
              <button className="text-orange-500 hover:underline flex items-center gap-1 text-sm font-semibold">
                Lihat Detail <ArrowRight size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
