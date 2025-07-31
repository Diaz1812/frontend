// src/app/components/portofolio/ProjectCard.tsx
import { Image } from 'lucide-react' // Menggunakan Image dari lucide-react

type ProjectCardProps = {
  title?: string
  company?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title = "Application Name",
  company = "Company Name"
}) => {
  return (
    // Mengubah ukuran, border-radius, dan warna latar belakang sesuai spesifikasi
    <div
      className="bg-[#3D3D3D] rounded-lg p-6 flex flex-col justify-between hover:bg-gray-500 transition-colors cursor-pointer"
      style={{
        width: '295.5px', // Mengatur lebar fixed
        height: '400px', // Mengatur tinggi fixed
        borderRadius: '8px', // Mengatur radius
      }}
    >
      {/* Placeholder Image Icon */}
      <div className="flex justify-center items-center flex-1">
        <div className="w-16 h-16 border-2 border-gray-400 rounded-lg flex items-center justify-center bg-gray-600">
          <Image className="w-8 h-8 text-gray-400" />
        </div>
      </div>

      {/* Project Info */}
      <div className="mt-auto"> {/* mt-auto untuk mendorong ke bawah */}
        {/* Menggunakan style inline untuk warna #555555 */}
        <h3 className="font-semibold text-lg mb-1" style={{ color: '#555555' }}>{title}</h3>
        <p className="text-sm" style={{ color: '#555555' }}>{company}</p>
      </div>
    </div>
  )
}

export default ProjectCard