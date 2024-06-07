import Link from 'next/link';
import Image from "next/image";
import "../app/globals.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import ProjectCard from './ProjectCard';


import Login from ".././public/Login&Register.jpg";
import Todo from ".././public/todolist.jpg";
import Calculator from ".././public/discountCalc.jpg";
import Swifty from ".././public/swiftyblog.jpg"




const projects = [
    {
      id: 1,
      title: 'Login & SignUp',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      image: Login,
      technologies: ['html', 'css', 'js', 'animations'],
      githubLink: 'https://github.com/your-github-username',
      liveLink: 'https://todo-list-with-redux-omega.vercel.app/',
    },
    {
      id: 2,
      title: 'Blog App',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      image: Swifty,
      technologies: ['html', 'css', 'js', 'animations'],
      githubLink: 'https://github.com/your-github-username',
      liveLink: 'https://todo-list-with-redux-omega.vercel.app/',
    },
    {
      id: 3,
      title: 'ToDo List with Redux',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      image: Todo,
      technologies: ['html', 'css', 'js', 'animations'],
      githubLink: 'https://github.com/Heritagify/Todo-List-with-Redux',
      liveLink: 'https://todo-list-with-redux-omega.vercel.app/',
    },
    {
      id: 3,
      title: 'Discount Calculator',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      image: Calculator,
      technologies: ['html', 'css', 'js', 'animations'],
      githubLink: 'https://github.com/Heritagify/Todo-List-with-Redux',
      liveLink: 'https://todo-list-with-redux-omega.vercel.app/',
    },
  ];

export default function Services() {
    return(
        <div>
            <center className="text-2xl font-semibold py-8">Tech Stacks</center>
            
                <div className="border-4 flex justify-center gap-8">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
        </div>
  );
}

