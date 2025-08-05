import Image from "next/image"

const TeknologiSection = () => {
  const technologies = [
    { src: "/logos/flutter.png", alt: "Flutter" },
    { src: "/logos/mysql.png", alt: "MySQL" },
    { src: "/logos/nodejs.png", alt: "Node.js" },
    { src: "/logos/react.png", alt: "React" },
    { src: "/logos/laravel.png", alt: "Laravel" },
  ]

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-poppins font-light text-xl text-gray-500 mb-10">
          Teknologi Yang Digunakan
        </h2>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
          {technologies.map((tech, index) => (
            <div key={index} className="w-16 h-16 relative grayscale opacity-80 hover:opacity-100 transition">
              <Image
                src={tech.src}
                alt={tech.alt}
                layout="fill"
                objectFit="contain"
                className="select-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeknologiSection
