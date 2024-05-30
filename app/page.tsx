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
import PortPic from ".././public/portPic.jpg";
import HtmlCss from ".././public/htmlcssjs.svg";
import Version from ".././public/version control.svg";
import NextJs from ".././public/nextjs.svg";
import Programming from ".././public/programing.svg";
import Coder from ".././public/proud_coder.svg";
import Wip from ".././public/work_in_progress.svg";
import AboutMe from ".././public/aboutMe.webp";
import TechStack from ".././components/TechStack";
import Services from ".././components/Services";
import Contact from ".././components/Contact";



export default function Page() {
  useAos();

    return (
      <div className="dark backdrop-filter backdrop-blur-xl bg-gray-900">
        <div className="absolute bg-pink-500 h-96 w-1/3 rounded-full opacity-20 blur-3xl left-44 top-1/2" />
        <div className="absolute bg-pink-400 h-96 w-1/3 rounded-full opacity-15 blur-3xl left-1/2 top-60" />
        <div className="absolute bg-pink-600 h-96 w-1/3 rounded-full opacity-20 blur-3xl left-7 top-36" />
        <div className="absolute bg-pink-600 h-96 w-1/3 rounded-full opacity-20 blur-3xl left-14 top-64" />
        <div className="absolute bg-pink-600 h-96 w-1/3 rounded-full opacity-20 blur-3xl left-10 top-72" />
      <div className="">
      {/* // <div className="relative min-h-screen bg-gradient-to-r from-emerald-400 from-20% via-sky-500 via-30% to-emerald-500 to-90%">
      // <div className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"></div>
      // <div className="relative z-10"> */}
        <Navbar />
        {/* ------------HERO SECTION_--------- */}
        <div className="mx-56 mt-28">
          <div className="flex justify-between">
            <div className=" py-8 w-2/3">
              <h1 className="text-2xl font-medium flex items-center">
                Hi there <PiHandWavingFill className="text-yellow-600 text-3xl" />
                ,
              </h1>
              <h1 className="my-2 text-2xl font-semibold">
                I'm
                <span className="text-4xl font-bold mx-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Olaiya Heritage
                </span>
              </h1>
              <h2 className="w-3/4 my-2 text-sm">
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
              <div className="flex gap-5 py-5">
                <button className="cursor-pointer p-2 px-3 rounded-lg bg-white text-sm text-teal-600 font-semibold hover:text-emerald-200 shadow-md shadow-teal-600">
                  Download CV
                </button>
                <button className="border border-teal-100 cursor-pointer p-2 px-7 text-sm text-teal-200 rounded-lg hover:text-emerald-200 shadow-md shadow-teal-600">
                  Hire Me
                </button>
              </div>
            </div>
            {/* ----DEVELOPER'S IMAGE */}
            <div className="flex justify-center items-center p-1 relative bg-gradient-to-r from-indigo-500 via-teal-400 to-pink-500 rounded-full">
              <div className=" p-1 rounded-full">
                <Image
                  src={PortPic}
                  alt="Portfolio Picture"
                  className="w-40 h-40 md:w-80 md:h-80 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        {/* ------------ABOUT SECTION----------- */}
        <div
          data-aos="fade-up"
          className="flex justify-between items-center mx-48 mt-28"
        >
          <Image
            src={AboutMe}
            alt="About Me"
            className="w-72 h-72 rounded-full"
          />
          <div className="w-3/6">
            <h1 className="text-2xl mb-6 font-semibold">About</h1>
            {/* <p className="border-b-4 ml-8 py-4">
              I am driven by a passion for frontend development with a creative
              mindset and a knack for problem-solving. I am intrigued with
              translating concepts into elegant, responsive websites. With a
              dedication to accessibility and performance, I ensure that every
              user interaction is seamless and engaging. Let us work together to
              transform your ideas into digital realities that stand out in
              today's online landscape.
            </p> */}
            <p className="border-b-4 ml-8 py-4">
              As a passionate frontend developer, I thrive on blending creativity
              with technical prowess to craft captivating digital experiences.
              With a keen eye for design and a knack for problem-solving, I
              specialize in translating concepts into elegant, responsive websites
              that captivate users from the moment they land. Dedicated to
              delivering exceptional results, I prioritize accessibility and
              performance, ensuring every user interaction is seamless and
              engaging. My attention to detail and commitment to staying ahead of
              the curve allow me to create cutting-edge solutions that not only
              meet but exceed expectations.
            </p>
            <div className="space-y-2 ml-8 my-2">
              <p className="flex gap-1 items-center text-sm">
                <FaLocationDot className="text-cyan-400" /> Ibadan, Oyo, Nigeria.
              </p>
              <p className="flex gap-1 items-center text-sm">
                <IoIosCall className="text-cyan-500" />
                08146041496
              </p>
              <p className="flex gap-1 items-center text-sm">
                <IoIosMail className="text-cyan-600" />
                heritageolaiya@gmail.com
              </p>
            </div>
          </div>
        </div>
        <TechStack />
        <div className="absolute inset-0 pointer-events-none">
          <Image src={HtmlCss} alt="Html and Css" className="absolute w-20 top-10 left-10" />
          <Image src={Programming} alt="Programming" className="absolute w-20 top-20 right-10" />
          <Image src={NextJs} alt="NextJs" className="absolute w-20 bottom-10 left-20" />
          <Image src={Version} alt="Version Control" className="absolute w-20 bottom-20 right-20" />
          <Image src={Coder} alt="Proud Coder" className="absolute w-20 top-40 left-40" />
          <Image src={Wip} alt="Work in Progress" className="absolute w-20 bottom-40 right-40" />
        </div>
        <Services />
        <Contact />
      </div>
  </div>
  );
}
