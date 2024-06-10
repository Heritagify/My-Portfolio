import "../app/globals.css";
import React, { useState } from 'react';
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaHome, FaInfoCircle, FaProjectDiagram } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { GrTechnology } from "react-icons/gr";
import { IoMenu, IoClose } from "react-icons/io5";
import Logo from '.././public/heritagifyLogo1.png'


export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-50 backdrop-blur-xl shadow-md shadow-slate-800">
      <header className="flex justify-between mx-4 md:mx-36 p-4 md:p-4 items-center container-fluid py-3">
        {/* <h1 >
          HERITAGIFY
        </h1> */}
        <Image
          src={Logo}
          alt="logo"
          className="italic text-cyan-300 font-semibold w-28 md:w-36"
        />

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            {isMobileMenuOpen ? <IoClose className="h-6 w-6" /> : <IoMenu className="h-6 w-6" />}
          </button>
        </div>

        <nav className={`md:flex space-x-4 text-sm md:text-md font-semibold ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`}>
          <ul className="md:flex md:space-x-4">
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
        </nav>

        <div className="flex space-x-1">
          <button className="cursor-pointer p-2 rounded-lg text-teal-200">
            <FaGithub  className="text-2xl"/>
          </button>
          <button className="cursor-pointer p-2 rounded-lg text-teal-200">
            <FaTwitter className="text-2xl"/>
          </button>
          <button className="cursor-pointer p-2 rounded-lg text-teal-200">
            <FaLinkedin className="text-2xl" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="px-6 py-2 space-y-2"
          >
            <ul>
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};