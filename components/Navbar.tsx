import "../app/globals.css";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaProjectDiagram } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5"; <IoMenu />
import { LiaTimesSolid } from "react-icons/lia"; <LiaTimesSolid />



export default function Navbar() {
  return (
    <div>
      <header className="flex justify-between mx-44 p-4 items-center  container-fluid py-3">
        <h1 className="italic text-cyan-300 font-semibold text-2xl">
          HERITAGIFY
        </h1>

        <div className="block ">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>



        <div className="hidden md:flex space-x-4 text-xs font-semibold">
          <li className="flex items-center gap-1 cursor-pointer p-2 rounded-lg hover:text-emerald-200 shadow-md shadow-teal-600">
            <FaHome />
            Home
          </li>
          <li className="flex items-center gap-1 cursor-pointer p-2 rounded-lg hover:text-emerald-200 hover:shadow-sm hover:shadow-teal-500">
            <FaInfoCircle />
            About
          </li>
          <li className="flex items-center gap-1 cursor-pointer p-2 rounded-lg hover:text-emerald-200 hover:shadow-sm hover:shadow-teal-500">
            <GrTechnology />
            Tech Stacks
          </li>
          <li className="flex items-center gap-1 cursor-pointer p-2 rounded-lg hover:text-emerald-200 hover:shadow-sm hover:shadow-teal-500">
            <FaProjectDiagram />
            Projects
          </li>
          <li className="flex items-center gap-1 cursor-pointer p-2 rounded-lg hover:text-emerald-200 hover:shadow-md hover:shadow-teal-500">
            <IoMdContact />
            Contact Me
          </li>
        </div>
        <div className="flex space-x-1">
          <button  className="cursor-pointer p-2 rounded-lg text-teal-200">
            <FaGithub />
          </button>
          <button  className="cursor-pointer p-2 rounded-lg text-teal-200">
            <FaTwitter />
          </button>
          <button  className="cursor-pointer p-2 rounded-lg text-teal-200">
            <FaLinkedin />
          </button>
        </div>
      </header>
    </div>
  );
}
