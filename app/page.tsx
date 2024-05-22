"use client";
import './globals.css'
import { useAos } from "./utils/useAos";
import Navbar from '.././components/Navbar'
import { TfiShine } from "react-icons/tfi";
import { MdDarkMode } from "react-icons/md";
import { VscVscode } from "react-icons/vsc"; <VscVscode />
import { FaGithub } from "react-icons/fa"; <FaGithub />
import { FaHtml5 } from "react-icons/fa6"; <FaHtml5 />
import { FaCss3Alt } from "react-icons/fa"; <FaCss3Alt />
import { IoLogoJavascript } from "react-icons/io"; <IoLogoJavascript />
import { SiTailwindcss } from "react-icons/si"; <SiTailwindcss />
import { FaReact } from "react-icons/fa"; <FaReact />
import { SiVite } from "react-icons/si"; <SiVite />
import { RiNextjsFill } from "react-icons/ri"; <RiNextjsFill />
import { SiMongodb } from "react-icons/si"; <SiMongodb />
import { IoLogoVercel } from "react-icons/io5"; <IoLogoVercel />
import PortPic from './'








export default function Page() {
  useAos();

  return (
    <div className="dark">
      <Navbar/>
      <div className="mx-28 mt-28">
        <h1
          data-aos="fade-right"
          className="text-4xl font-bold mb-8">HI!</h1>
          <h1>I'm OLAIYA HERITAGE .J</h1>
          <h1>Frontend Developer</h1>
          <p></p>
          <div className="flex gap-4">
            <button className="cursor-pointer p-2 px-3 rounded-lg bg-white text-sm text-teal-600 font-semibold hover:text-emerald-200 shadow-md shadow-teal-600">Download CV</button>
            <button className="cursor-pointer p-2 px-3 text-sm text-teal-200 rounded-lg hover:text-emerald-200 shadow-md shadow-teal-600">Hire Me</button>
          </div>
      </div>
     
    </div>
  );
}