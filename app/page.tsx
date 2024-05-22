/* eslint-disable react/no-unescaped-entities */
"use client";
import "./globals.css";
import { useAos } from "./utils/useAos";
import Image from "next/image";
import Navbar from ".././components/Navbar";
import { PiHandWavingFill } from "react-icons/pi";
import { TfiShine } from "react-icons/tfi";
import { MdDarkMode } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { VscVscode } from "react-icons/vsc";
<VscVscode />;
import { FaGithub } from "react-icons/fa";
<FaGithub />;
import { FaHtml5 } from "react-icons/fa6";
<FaHtml5 />;
import { FaCss3Alt } from "react-icons/fa";
<FaCss3Alt />;
import { IoLogoJavascript } from "react-icons/io";
<IoLogoJavascript />;
import { SiTailwindcss } from "react-icons/si";
<SiTailwindcss />;
import { FaReact } from "react-icons/fa";
<FaReact />;
import { SiVite } from "react-icons/si";
<SiVite />;
import { RiNextjsFill } from "react-icons/ri";
<RiNextjsFill />;
import { SiTypescript } from "react-icons/si";
<SiTypescript />;
import { SiMongodb } from "react-icons/si";
<SiMongodb />;
import { IoLogoVercel } from "react-icons/io5";
<IoLogoVercel />;
import PortPic from ".././public/portPic.jpg";
import AboutMe from ".././public/aboutMe.webp";

export default function Page() {
  useAos();

  return (
    <div className="dark">
      <Navbar />

      {/* ------------HERO SECTION_--------- */}
      <div className="mx-48 mt-28">
        <div className="flex justify-between">
          <div className="w-2/3">
            <h1 className="text-2xl font-semibold flex items-center">
              Hi there <PiHandWavingFill className="text-yellow-600 text-2xl" />
              ,
            </h1>
            <h1 className="my-2 text-lg font-semibold">
              I'm
              <span className="text-2xl font-bold mx-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Olaiya Heritage
              </span>
            </h1>
            <h2 className="w-2/4 my-2 text-lg">
              A passionate{" "}
              <span className="text-xl font-semibold text-teal-300">
                Frontend Developer
              </span>{" "}
              crafting elegant and intuitive web experiences.
            </h2>
            {/* <p className="w-2/4 text-sm my-2 ">
              With a keen eye for design and a love for coding, I bring ideas to
              life through clean, efficient code. Explore my portfolio to see
              how I can help bring your digital vision to reality.
            </p> */}
            <div className="flex gap-5">
              <button className="cursor-pointer p-2 px-3 rounded-lg bg-white text-sm text-teal-600 font-semibold hover:text-emerald-200 shadow-md shadow-teal-600">
                Download CV
              </button>
              <button className="cursor-pointer p-2 px-3 text-sm text-teal-200 rounded-lg hover:text-emerald-200 shadow-md shadow-teal-600">
                Hire Me
              </button>
            </div>
          </div>
          {/* ----DEVELOPER'S IMAGE */}
          <div className="flex justify-center items-center relative p-1 bg-gradient-to-r from-indigo-500 via-teal-400 to-pink-500 rounded-full">
            <div className=" p-1 rounded-full">
              <Image
                src={PortPic}
                alt="Portfolio Picture"
                className="w-40 h-40 md:w-72 md:h-72 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ------------ABOUT SECTION----------- */}
      <div data-aos="fade-up" className="flex justify-between items-center mx-48 mt-28">
        <Image
          src={AboutMe}
          alt="About Me"
          className="w-72 h-72 rounded-full"
        />
        <div className="w-3/6">
          <h1 className="text-2xl mb-6 font-semibold">About</h1>
          <p className="border-b-4 ml-8 py-4">
            I am driven by a passion for frontend development with a creative
            mindset and a knack for problem-solving I am intrigued with
            translating concepts into elegant, responsive websites. With a
            dedication to accessibility and performance, I ensure that every
            user interaction is seamless and engaging. Let us work together to
            transform your ideas into digital realities that stand out in
            today's online landscape.
          </p>
          <div className="space-y-2 ml-8 my-2">
            <p className="flex gap-1 items-center text-sm"><FaLocationDot className="text-cyan-400"/> Ibadan, Oyo, Nigeria.</p>
            <p className="flex gap-1 items-center text-sm"><IoIosCall className="text-cyan-500"/>08146041496</p>
            <p className="flex gap-1 items-center text-sm"><IoIosMail className="text-cyan-600" />heritageolaiya@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
