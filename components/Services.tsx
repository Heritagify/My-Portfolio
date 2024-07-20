import Link from 'next/link';
import Image from "next/image";
import { forwardRef } from 'react';

import "../app/globals.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import ProjectCard from './ProjectCard';


import Login from "../public/Login&Register.jpg";
import Todo from "../public/todolist.jpg";
import Calculator from "../public/discountCalc.jpg";
import Swifty from "../public/swiftyblog.jpg";
import wordGuess from "../public/wordGuess.jpg"
import Travels from "../public/travels.jpg";
import BooksLab from "../public/bookslab.jpg"




const projects = [
    {
      id: 1,
      title: 'Login & SignUp',
      description: 'An intuitive and secure authentication system featuring responsive design and engaging animations for a seamless user experience.',
      image: Login,
      technologies: ['html', 'css', 'js', 'animations'],
      githubLink: 'https://github.com/your-github-username',
      liveLink: 'https://todo-list-with-redux-omega.vercel.app/',
    },
    {
      id: 2,
      title: 'Blog App',
      description: 'A dynamic and user-friendly blogging platform with rich text editor and interactive UI elements.',
      image: Swifty,
      technologies: ['html', 'css', 'js', 'animations'],
      githubLink: 'https://github.com/your-github-username',
      liveLink: 'https://todo-list-with-redux-omega.vercel.app/',
    },
    {
      id: 3,
      title: 'Traveling Website',
      description: 'A visually captivating travel website built with React and Tailwind CSS, featuring responsive design and transitions with lot of ticket and booking pages.',
      image: Travels,
      technologies: ['html', 'Tailwindcss', 'ReactJs', 'jsx', 'animations'],
      githubLink: 'https://github.com/Heritagify/Todo-List-with-Redux',
      liveLink: 'https://todo-list-with-redux-omega.vercel.app/',
    },
    {
      id: 4,
      title: 'ToDo List with Redux',
      description: 'A modern and interactive todo list application built with Redux for efficient state management. Easily add, edit, and delete tasks, and keep track of your daily goals. The intuitive interface and seamless animations make task management a breeze.',
      image: Todo,
      technologies: ['html', 'css', 'js', 'animations'],
      githubLink: 'https://github.com/Heritagify/Todo-List-with-Redux',
      liveLink: 'https://todo-list-with-redux-omega.vercel.app/',
    },
    {
      id: 5,
      title: 'E-Library',
      description: 'i collaborated on an e-library application built with ReactJs and styled with TailwindCSS and Vanilla css, to offer a seamless reading experience. ',
      image: BooksLab,
      technologies: ['html', 'css', 'ReactJs', 'TailwindCss'],
      githubLink: 'https://github.com/Heritagify/Todo-List-with-Redux',
      liveLink: 'https://todo-list-with-redux-omega.vercel.app/',
    },
    {
      id: 6,
      title: 'Word-guessing Game',
      description: 'I made a test your guessing skill with this engaging word-guessing game. Guess the hidden word by entering letters one at a time. With each correct guess, the word reveals itself. The sleek design and smooth animations add to the excitement of the gameplay.',
      image: wordGuess,
      technologies: ['html', 'css', 'js', 'animations'],
      githubLink: 'https://github.com/Heritagify/Todo-List-with-Redux',
      liveLink: 'https://todo-list-with-redux-omega.vercel.app/',
    },
    {
      id: 7,
      title: 'Discount Calculator',
      description: 'Calculate discounts effortlessly with this intuitive discount calculator. Enter the original price and the discount percentage, and instantly see the discounted price and the amount saved. The clean and responsive design ensures a user-friendly experience on any device.',
      image: Calculator,
      technologies: ['html', 'css', 'js', 'animations'],
      githubLink: 'https://github.com/Heritagify/Todo-List-with-Redux',
      liveLink: 'https://todo-list-with-redux-omega.vercel.app/',
    },
  ];

export default function Services() {
    return(
        <div>
            <center className="text-2xl font-semibold py-8">Projects</center>
            
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 pb-1 lg:mx-36">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
        </div>
  );
}

