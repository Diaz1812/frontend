import { Database, Code, Smartphone, Palette, Globe, LucideIcon } from 'lucide-react'

type Technology = {
  icon: LucideIcon
  name: string
}

const TeknologiSection: React.FC = () => {
  const technologies: Technology[] = [
    { icon: Code, name: "Development" },
    { icon: Database, name: "MySQL" },
    { icon: Globe, name: "Node.js" },
    { icon: Smartphone, name: "React" },
    { icon: Palette, name: "Design" },
  ]

  return (
    // py-16 mungkin terlalu banyak jika dilihat dari gambar (image_6ae762.png)
    // Mari kita coba py-12 atau py-10 dan sesuaikan mt/mb judul
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Mengurangi margin-top dari h2 agar lebih dekat ke section di atasnya */}
        {/* Mengubah mt-20 menjadi mt-10 dan mb-20 menjadi mb-10 untuk mendekatkan elemen */}
        {/* Properti font Poppins, Light (300), 20px (text-xl), line-height 120% (leading-normal) dari image_69f2e0.png */}
        <h2 className="font-poppins font-light text-xl text-gray-400 text-center mt-10 mb-10 leading-normal">
          Teknologi Yang Digunakan
        </h2>

        {/* Ikon Teknologi */}
        {/* Menyesuaikan jarak agar lebih sesuai dengan visual gap dari gambar */}
        {/* Layout dan gap dari image_69e7df.png (Gap 60px) */}
        <div className="flex justify-center items-center gap-x-[60px] flex-wrap">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
                {/* Asumsi ikon ini adalah Flutter, MySQL, JS, React, Design dari gambar */}
                {/* Anda mungkin perlu mengganti LucideIcon dengan SVG khusus jika ingin ikon persis seperti di gambar */}
                <tech.icon className="w-8 h-8 text-gray-700 group-hover:text-orange-500 transition-colors" />
              </div>
              <span className="mt-2 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeknologiSection