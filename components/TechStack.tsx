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




export default function TechStack() {
    return (
        <div>
            {/* --------TECH STACKS------ */}
      <div className="py-20 space-y-10">
        <center className="text-2xl font-semibold py-5">TECH STACKS</center>
        <div className="space-y-10">
          <div className="flex justify-center gap-16">
            <div className="group relative flex items-center justify-center backdrop-blur-lg bg-white/30 rounded-full w-fit p-4">
              <FaHtml5 className="text-4xl text-red-400" />
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                HTML
              </span>
            </div>
            <div className="group relative flex items-center justify-center backdrop-blur-lg bg-white/30 rounded-full w-fit p-4">
              <FaCss3Alt className="text-4xl text-blue-400" />
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                CSS
              </span>
            </div>

            <div className="group relative flex items-center justify-center backdrop-blur-lg bg-white/30 rounded-full w-fit p-4">
              <IoLogoJavascript className="text-4xl text-yellow-400" />
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                JAVASCRIPT
              </span>
            </div>
            <div className="group relative flex items-center justify-center backdrop-blur-lg bg-white/30 rounded-full w-fit p-4">
              <FaReact className="text-4xl text-cyan-400 animate-spin" />
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                REACTJS
              </span>
            </div>
            <div className="group relative flex items-center justify-center backdrop-blur-lg bg-white/30 rounded-full w-fit p-4">
              <SiVite className="text-3xl text-orange-600" />
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                VITE
              </span>
            </div>
            <div className="group relative flex items-center justify-center backdrop-blur-lg bg-white/30 rounded-full w-fit p-4">
              <SiTailwindcss className="text-4xl text-blue-600 animate-pulse" />
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                TAILWIND CSS
              </span>
            </div>
            <div className="group relative flex items-center justify-center backdrop-blur-lg bg-white/30 rounded-full w-fit p-4">
              <RiNextjsFill className="text-4xl text-black" />
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                NEXTJS
              </span>
            </div>
            
            <div className="group relative flex items-center justify-center backdrop-blur-lg bg-white/30 rounded-full w-fit p-4">
              <SiTypescript className="text-4xl text-yellow-400" />
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                TYPESCRIPT
              </span>
            </div>
          </div>
          <div className="flex justify-center gap-32">
          <div className="group relative flex items-center justify-center backdrop-blur-lg bg-white/30 rounded-full w-fit p-4">
              <SiFramer className="text-4xl text-black" />
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                FRAMER-MOTION
              </span>
            </div>
            <div className="group relative flex items-center justify-center backdrop-blur-lg bg-white/30 rounded-full w-fit p-4">
              <FaGithub className="text-4xl text-blue-400" />
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                GITHUB
              </span>
            </div>
            <div className="group relative flex items-center justify-center backdrop-blur-lg bg-white/30 rounded-full w-fit p-4">
              <SiMongodb className="text-4xl text-green-500 animate-bounce" />
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                MONGODB
              </span>
            </div>
            <div className="group relative flex items-center justify-center backdrop-blur-lg bg-white/30 rounded-full w-fit p-4">
              <IoLogoVercel className="text-4xl text-green-500" />
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                VERCEL
              </span>
            </div>
            <div className="group relative flex items-center justify-center backdrop-blur-lg bg-white/30 rounded-full w-fit p-4">
              <VscVscode className="text-3xl text-cyan-400 animate-pulse" />
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                VS-CODE
              </span>
            </div>
            <div className="group relative flex items-center justify-center backdrop-blur-lg bg-white/30 rounded-full w-fit p-4">
              <FaGitAlt className="text-3xl text-cyan-400" />
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                GIT
              </span>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}