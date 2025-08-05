import React from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: '01',
    title: 'Mobile Technology',
    description:
      'Mengembangkan aplikasi mobile yang responsif dan user-friendly untuk mendukung kemudahan akses bisnis Anda di berbagai perangkat.'
  },
  {
    id: '02',
    title: 'Digital Marketing',
    description:
      'Strategi pemasaran digital yang terukur untuk meningkatkan visibilitas, menjangkau audiens yang tepat, dan mendorong penjualan.'
  },
  {
    id: '03',
    title: 'Desktop Technology',
    description:
      'Pembuatan perangkat lunak desktop yang andal dan aman untuk mendukung kebutuhan operasional bisnis secara maksimal.'
  },
  {
    id: '04',
    title: 'Graphic Design',
    description:
      'Desain grafis kreatif dan profesional untuk memperkuat identitas visual dan citra brand Anda.'
  },
  {
    id: '05',
    title: 'Interior Design',
    description:
      'Perencanaan interior yang fungsional dan estetik untuk menciptakan ruang kerja yang nyaman dan produktif.'
  },
  {
    id: '06',
    title: 'Commercial Photography',
    description:
      'Fotografi komersial berkualitas tinggi untuk mendukung promosi produk, profil perusahaan, dan kebutuhan branding visual.'
  }
];

const OurServices: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-orange-50 text-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="text-2xl text-orange-500 italic" style={{ fontFamily: 'Dancing Script' }}>
          Our Service
        </h4>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-10">
          Kami Hadirkan Teknologi yang Membuat <br /> Bisnis Anda Berkembang
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px border-t border-l border-gray-300">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 border-b border-r border-gray-300 text-left space-y-2 "
            >
              <p className="text-sm font-semibold text-gray-500">{service.id}</p>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <button className="mt-10 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
          Lihat Selengkapnya
        </button>
      </div>
    </section>
  );
};

export default OurServices;
