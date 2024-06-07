import Link from 'next/link';
import Image, { StaticImageData } from "next/image";
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 rounded-3xl pb-4 overflow-hidden shadow-sm shadow-slate-500">
      <Image className="w-full object-cover h-48" src={project.image} alt={project.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.title}</div>
        <p className="text-gray-700 text-sm">{project.description}</p>
      </div>
      <div className="px-6 gap-2 pb-2">
        {project.technologies.map((tech: string) => (
          <span
            key={tech}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-center gap-5 text-xl">
        <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-teal-300 animate-bounce" />
        </Link>
        <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
          <FiExternalLink className="text-teal-300 animate-bounce" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;