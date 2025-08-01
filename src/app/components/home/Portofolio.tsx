"use client"
import { useState } from 'react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'

type Project = {
  id: number
  title: string
  company: string
  category: string
  image: string // Tambahkan properti image
}

const HomeSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Semua')

  const filters: string[] = ['Semua', 'Mobile', 'Web', 'Graphic Design']

  const projects: Project[] = [
    { id: 1, title: "Mobile App 1", company: "Company A", category: "Mobile", image: "/projects/mobile1.jpg" },
    { id: 2, title: "Web App 1", company: "Company B", category: "Web", image: "/projects/web1.jpg" },
    { id: 3, title: "Mobile App 2", company: "Company C", category: "Mobile", image: "/projects/mobile2.jpg" },
    { id: 4, title: "Graphic Design", company: "Company D", category: "Graphic Design", image: "/projects/design1.jpg" },
    { id: 5, title: "Web App 2", company: "Company E", category: "Web", image: "/projects/web2.jpg" },
    { id: 6, title: "Mobile App 3", company: "Company F", category: "Mobile", image: "/projects/mobile3.jpg" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex-1">
            <h2
              className="text-4xl text-orange-500 italic"
              style={{ fontFamily: 'Great Vibes' }}
            >
              Portofolio
            </h2>
            <h2 className="text-2xl text-black md:text-3xl font-bold mt-2 mb-10">
              Proyek Yang Telah Kami Selesaikan
            </h2>
          </div>

          {/* Tombol & Icon */}
          <div className="flex flex-col items-end gap-4">
            <Button
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium py-2 px-5 rounded-full transition"
              variant={undefined}
              size={undefined}
            >
              Lihat lainnya
            </Button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square bg-gray-100 rounded-md overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-sm text-gray-800">{project.title}</h3>
                <p className="text-xs text-gray-500">{project.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeSection
