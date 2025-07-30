"use client"
import { useState } from 'react'
import { Button } from '../ui/button.jsx'
import { TrendingUp } from 'lucide-react'
import ProjectCard from './ProjectCard'

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('Semua')
  
  const filters = ['Semua', 'Mobile', 'Web', 'Graphic Design']
  
  // Sample project data - 8 projects for 4x2 grid
  const projects = [
    { id: 1, title: "Application Name", company: "Company Name", category: "Mobile" },
    { id: 2, title: "Application Name", company: "Company Name", category: "Web" },
    { id: 3, title: "Application Name", company: "Company Name", category: "Mobile" },
    { id: 4, title: "Application Name", company: "Company Name", category: "Graphic Design" },
    { id: 5, title: "Application Name", company: "Company Name", category: "Web" },
    { id: 6, title: "Application Name", company: "Company Name", category: "Mobile" },
    { id: 7, title: "Application Name", company: "Company Name", category: "Graphic Design" },
    { id: 8, title: "Application Name", company: "Company Name", category: "Web" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with title and icon */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Portofolio</h1>
            <p className="text-gray-600 text-lg max-w-2xl">
              Dengan pengalaman 15+ tahun, kami terus menghadirkan produk digital 
              yang inovatif, fungsional dan dapat diakses secara konsisten oleh...
            </p>
          </div>
          
          {/* Icon on the right */}
          <div className="ml-8 mt-4">
            <div className="w-16 h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Selected Project subtitle */}
       <div className="mb-8">
  <div className="flex flex-wrap items-center justify-between mb-6">
    <h2 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: 'cursive' }}>
      Selected Project
    </h2>

    {/* Filter Buttons */}
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <Button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          variant={activeFilter === filter ? "default" : "outline"}
          className={`
            ${activeFilter === filter 
              ? 'bg-orange-500 hover:bg-orange-600 text-white border-orange-500' 
              : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
            }
            px-6 py-2 rounded-full
          `}
        >
          {filter}
        </Button>
      ))}
    </div>
  </div>
</div>


        {/* Project Grid - 4x2 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              company={project.company}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection

