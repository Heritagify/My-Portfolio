import "../app/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaHome, FaInfoCircle, FaProjectDiagram } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { GrTechnology } from "react-icons/gr";
import { IoMenu } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from 'react';



export default function Navbar() {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };



  return (
    <div>
      <header className="border-2 flex justify-between mx-36 p-8 items-center  container-fluid py-3">
        <h1 className="italic text-cyan-300 font-semibold text-2xl">
          HERITAGIFY
        </h1>

        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            {isMobileMenuOpen ? <LiaTimesSolid className="h-6 w-6" /> : <IoMenu className="h-6 w-6" />}
          </button>
        </div>



        <div className={`lg:flex space-x-4 text-md font-semibold ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="lg:flex lg:space-x-4 text-md font-semibold">
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
          </ul>
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


       <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden px-6 py-2 space-y-2"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
