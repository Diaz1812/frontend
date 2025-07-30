import { Image } from 'lucide-react'

type ProjectCardProps = {
  title?: string
  company?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title = "Application Name",
  company = "Company Name"
}) => {
  return (
    <div className="bg-gray-600 rounded-lg p-6 h-48 flex flex-col justify-between hover:bg-gray-500 transition-colors cursor-pointer">
      {/* Placeholder Image Icon */}
      <div className="flex justify-center items-center flex-1">
        <div className="w-16 h-16 border-2 border-gray-400 rounded-lg flex items-center justify-center">
          <Image className="w-8 h-8 text-gray-400" />
        </div>
      </div>

      {/* Project Info */}
      <div className="text-white">
        <h3 className="font-semibold text-sm mb-1">{title}</h3>
        <p className="text-gray-300 text-xs">{company}</p>
      </div>
    </div>
  )
}

export default ProjectCard
