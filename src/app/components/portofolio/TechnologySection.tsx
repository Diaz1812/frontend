// src/app/components/portofolio/TechnologySection.tsx
import { Database, Code, Smartphone, Palette, Globe, LucideIcon } from 'lucide-react'

type Technology = {
  icon: LucideIcon
  name: string
}

const TechnologySection: React.FC = () => {
  const technologies: Technology[] = [
    { icon: Code, name: "Development" },
    { icon: Database, name: "MySQL" },
    { icon: Globe, name: "Node.js" },
    { icon: Smartphone, name: "React" },
    { icon: Palette, name: "Design" },
  ]

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-poppins font-light text-base sm:text-xl text-gray-900 text-center mt-8 mb-8 sm:mt-10 sm:mb-10 leading-normal">
          Teknologi Yang Digunakan
        </h2>

        <div className="flex justify-center items-center gap-x-6 sm:gap-x-12 lg:gap-x-[60px] flex-wrap gap-y-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
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

export default TechnologySection