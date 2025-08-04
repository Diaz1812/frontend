// src/app/components/portofolio/ProjectCard.tsx
import { Image } from "lucide-react";

type ProjectCardProps = {
  title?: string;
  company?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title = "Application Name",
  company = "Company Name",
}) => {
  return (
    <div
      className="bg-[#3D3D3D] rounded-lg p-6 flex flex-col justify-between hover:bg-gray-500 transition-colors cursor-pointer w-full max-w-sm mx-auto h-auto min-h-[300px] sm:min-h-[400px]"
    >
      {/* Placeholder Image Icon */}
      <div className="flex justify-center items-center flex-1 mb-4">
        <div className="w-16 h-16 sm:w-24 sm:h-24 border-2 border-gray-400 rounded-lg flex items-center justify-center bg-gray-600">
          <Image className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
        </div>
      </div>

      {/* Project Info */}
      <div className="mt-auto text-center">
        <h3 className="font-semibold text-lg sm:text-xl mb-1 text-gray-300">{title}</h3>
        <p className="text-sm sm:text-base text-gray-400">{company}</p>
      </div>
    </div>
  );
};

export default ProjectCard;