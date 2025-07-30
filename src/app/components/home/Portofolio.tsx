"use client"
import { useState } from 'react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'

type Project = {
  id: number
  title: string
  company: string
  category: string
}

const HomeSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Semua')

  const filters: string[] = ['Semua', 'Mobile', 'Web', 'Graphic Design']

  const projects: Project[] = [
    { id: 1, title: "Application Name", company: "Company Name", category: "Mobile" },
    { id: 2, title: "Application Name", company: "Company Name", category: "Web" },
    { id: 3, title: "Application Name", company: "Company Name", category: "Mobile" },
    { id: 4, title: "Application Name", company: "Company Name", category: "Graphic Design" },
    { id: 5, title: "Application Name", company: "Company Name", category: "Web" },
    { id: 6, title: "Application Name", company: "Company Name", category: "Mobile" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex-1">
            <h2
              className="text-4xl text-black italic"
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
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium py-2 px-5 rounded-full transition" variant={undefined} size={undefined}            >
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
              <div className="aspect-square bg-gray-700 rounded-md flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 15V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h4l2 3 2-3h6a2 2 0 002-2z" />
                </svg>
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
