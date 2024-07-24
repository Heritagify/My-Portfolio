import Link from "next/link";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      data-aos="flip-left"
      className="w-full rounded-3xl pb-4 overflow-hidden shadow-md shadow-slate-500"
    >
      <Image
       className="w-full  h-48"
       src={project.image}
       alt={project.title}
       width={500}  // Add a width prop
      height={300}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.title}</div>
        <p className="dark:text-cyan-100 text-gray-700 text-md">
          {project.description}
        </p>
      </div>
      <div className="px-6 gap-2 pb-2">
        {project.technologies.map((tech: string) => (
          <span
            key={tech}
            className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-3 mb-2 cursor-pointer dark:hover:bg-white dark:hover:text-gray-700 hover:bg-gray-700 hover:text-white"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-center gap-5 text-xl">
        <Link
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
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
