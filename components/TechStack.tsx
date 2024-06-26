import { forwardRef } from 'react';

import Image from "next/image";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiFramer } from "react-icons/si";

import Check from ".././public/skillsCheck.png"

interface TechStackProps {
  id: string;
}


export default function TechStack() {
    return (
        <div>
            {/* --------TECH STACKS------ */}
      <div className="py-20 space-y-2">
        <div>
          <center className="text-2xl font-semibold">Tech Stacks</center>
        </div>
        <div className="flex mx-20 justify-between items-center">
          <div className="space-y-10">
          <center className="text-md font-semibold">I have been actively learning and working with these web technologies:</center>
            <div className="flex justify-center gap-6">
              <div  data-aos="flip-left"
                  className="group relative flex items-center justify-center hover:shadow-md hover:shadow-white hexagon">
                <FaHtml5 className="text-3xl text-red-400" />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  HTML
                </span>
              </div>
              <div   data-aos="flip-right" className="group relative flex items-center justify-center hover:shadow-md hover:shadow-white hexagon">
                <FaCss3Alt className="text-3xl text-blue-400" />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-blue-400 to-indigo-900 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  CSS
                </span>
              </div>
              <div data-aos="flip-left" className="group relative flex items-center justify-center hover:shadow-md hover:shadow-white hexagon">
                <IoLogoJavascript className="text-3xl text-yellow-400" />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  JAVASCRIPT
                </span>
              </div>
              <div  data-aos="flip-right" className="group relative flex items-center justify-center hover:shadow-md hover:shadow-white hexagon">
                <FaReact className="text-3xl text-cyan-400 animate-spin" />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  REACTJS
                </span>
              </div>
              <div  data-aos="flip-left" className="group relative flex items-center justify-center hover:shadow-md hover:shadow-white hexagon">
                <SiVite className="text-3xl text-orange-600" />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-blue-400 to-indigo-900 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  VITE
                </span>
              </div>
              <div  data-aos="flip-right" className="group relative flex items-center justify-center hover:shadow-md hover:shadow-white hexagon">
                <SiTailwindcss className="text-3xl text-blue-600 animate-pulse" />
                <span className="absolute -top-14 left-1/2 -translate-x-1/2 w-28 py-2 text-center bg-gradient-to-r from-red-400 to-red-500 text-white text-xs rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  TAILWIND CSS
                </span>
              </div>
              <div  data-aos="flip-left" className="group relative flex items-center justify-center hover:shadow-md hover:shadow-white hexagon">
                <RiNextjsFill className="text-3xl text-black" />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-blue-400 to-indigo-900 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  NEXTJS
                </span>
              </div>
          
              <div  data-aos="flip-left" className="group relative flex items-center justify-center hover:shadow-md hover:shadow-white hexagon">
                <SiTypescript className="text-2xl text-yellow-400" />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-blue-400 to-indigo-900 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  TYPESCRIPT
                </span>
              </div>
            </div>
            <div className="flex justify-center gap-6 ml-20">
            <div  data-aos="flip-right" className="group relative flex items-center justify-center hover:shadow-md hover:shadow-white animate-pulse hexagon">
                <SiFramer className="text-2xl text-black" />
                <span className="absolute -top-14 left-1/2 -translate-x-1/2  w-28 py-2 text-center bg-gradient-to-r from-red-400 to-red-500 text-white text-xs rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  FRAMER MOTION
                </span>
              </div>
              <div  data-aos="flip-left" className="group relative flex items-center justify-center hover:shadow-md hover:shadow-white hexagon">
                <FaGithub className="text-3xl text-blue-400" />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-blue-400 to-indigo-900 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  GITHUB
                </span>
              </div>
              <div  data-aos="flip-right" className="group relative flex items-center justify-center hover:shadow-md hover:shadow-white hexagon">
                <SiMongodb className="text-3xl text-green-500 animate-bounce" />
                <span className="absolute -top-12 left-1/2 text-center -translate-x-1/2 w-28 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  MONGODB
                </span>
              </div>
              <div  data-aos="flip-left" className="group relative flex items-center justify-center hover:shadow-md hover:shadow-white hexagon">
                <IoLogoVercel className="text-2xl text-green-500" />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-blue-400 to-indigo-900 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  VERCEL
                </span>
              </div>
              <div  data-aos="flip-right" className="group relative flex items-center justify-center hover:shadow-md hover:shadow-white hexagon">
                <VscVscode className="text-2xl text-cyan-400 animate-pulse" />
                <span className="absolute text-center -top-12 left-1/2 -translate-x-1/2 w-28 py-2 bg-gradient-to-r from-blue-400 to-indigo-900 text-white text-xs rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  VS CODE
                </span>
              </div>
              <div  data-aos="flip-left" className="group relative flex items-center justify-center hover:shadow-md hover:shadow-white hexagon">
                <FaGitAlt className="text-2xl text-cyan-400" />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white text-sm rounded-full shadow-md  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  GIT
                </span>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in-left" className="flex items-center">
            <Image
              src={Check}
              alt="Skills checklist"
              className="w"
              priority
            />
          </div>
        </div>
      </div>
        </div>
    )
}