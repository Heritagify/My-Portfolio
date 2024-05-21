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
      <header className="flex justify-between mx-4 p-2 items-center shadow-sm shadow-cyan-900">
        <h1 className="italic text-cyan-900 font-semibold text-2xl">
          HERITAGIFY
        </h1>
        <div className="hidden md:flex space-x-5 text-sm ">
          <li className="flex items-center gap-1"><FaHome />Home</li>
          <li className="flex items-center gap-1"><FaInfoCircle />About</li>
          <li className="flex items-center gap-1"><GrTechnology />Tech Stacks</li>
          <li className="flex items-center gap-1"><FaProjectDiagram />Projects</li>
          <li className="flex items-center gap-1"><IoMdContact />Contact Me</li>
        </div>
        <div className="">
          <FaGithub />
          <FaTwitter />
          <FaLinkedin />
        </div>


        <div className="space-x-2 text-sm">
          <button className="bg-green-800 text-cyan-200 p-1">Sign In</button>
          <button>Sign Up</button>
        </div>
      </header>
    </div>
  );
}
