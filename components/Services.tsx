import Link from 'next/link';
import Image from "next/image";
import "../app/globals.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import Login from ".././public/Login&Register.jpg";
import Todo from ".././public/todolist.jpg"

export default function Services() {
  return (
    <div className=" border-4">
        {/* -------------1----------- */}
      <div className="w-1/4 rounded-3xl pb-4 overflow-hidden shadow-sm shadow-slate-500">
        <Image className="w-full" src={Login} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Login & SignUp</div>
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 gap-2 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">
            html
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">
            Css
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">
            Js
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">
            Animations
          </span>
        </div>
        <div className="flex justify-center gap-5 text-xl">
           <Link href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-teal-300 animate-bounce"/>
        </Link>
        <Link href="https://todo-list-with-redux-omega.vercel.app/" target="_blank" rel="noopener noreferrer">
            <FiExternalLink className="text-teal-300 animate-bounce"/>
        </Link>
        </div>
      </div>

      {/* -----------------2------------ */}
      <div className="w-1/4 pb-3 rounded-3xl overflow-hidden shadow-sm shadow-slate-500">
        <Image className="w-full h-48 object-cover" src={Todo} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">ToDo List with Redux</div>
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">
            html
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">
            Css
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">
            Js
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">
            Animations
          </span>
        </div>
      <div className="flex justify-between mx-4 gap-5 text-xl">
        <Link href="https://github.com/Heritagify/Todo-List-with-Redux" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-teal-300 animate-bounce"/>
        </Link>
        <Link href="https://todo-list-with-redux-omega.vercel.app/" target="_blank" rel="noopener noreferrer">
            <FiExternalLink className="text-teal-300 animate-bounce"/>
        </Link>
        </div>
      </div>
    </div>
  );
}
