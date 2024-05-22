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
      <header className="flex justify-between mx-44 p-2 items-center  container-fluid py-3">
        <h1 className="italic text-cyan-300 font-semibold text-2xl">
          HERITAGIFY
        </h1>
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
