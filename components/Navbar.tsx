import "../app/globals.css";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaProjectDiagram } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      <header className="flex justify-between mx-24 p-2 items-center  container-fluid py-3">
        <h1 className="italic text-cyan-900 font-semibold text-2xl">
          HERITAGIFY
        </h1>
        <div className="hidden md:flex space-x-9 text-xs font-semibold">
          <li className="flex items-center gap-1 cursor-pointer">
            <FaHome />
            Home
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            <FaInfoCircle />
            About
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            <GrTechnology />
            Tech Stacks
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            <FaProjectDiagram />
            Projects
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            <IoMdContact />
            Contact Me
          </li>
        </div>
        <div className="flex space-x-3">
          <FaGithub />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </header>
    </div>
  );
}
