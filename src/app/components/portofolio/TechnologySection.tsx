import Image from "next/image";

type Technology = {
  image: string;
  name: string;
};

const TechnologySection: React.FC = () => {
  const technologies: Technology[] = [
    { image: "/images/flutter.png", name: "Flutter" },
    { image: "/images/mysql.png", name: "MySQL" },
    { image: "/images/nodejs.png", name: "Node.js" },
    { image: "/images/Group.png", name: "React" },
    { image: "/images/laravel.png", name: "Laravel" },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-poppins font-light text-base sm:text-xl text-gray-900 text-center mt-8 mb-8 sm:mt-10 sm:mb-10 leading-normal">
          Teknologi Yang Digunakan
        </h2>

        <div className="flex justify-center items-center gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="mt-2 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
