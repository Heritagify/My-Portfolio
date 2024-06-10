/* eslint-disable react/no-unescaped-entities */
"use client";
import { useRef, RefObject } from 'react';
import Link from "next/link";
import "./globals.css";
import { useAos } from "./utils/useAos";
import Image from "next/image";
import Navbar from ".././components/Navbar";
import Services from ".././components/Services";
import TechStack from ".././components/TechStack";
import Contact from ".././components/Contact";
import Footer from ".././components/Footer";

import { PiHandWavingFill } from "react-icons/pi";
import { TfiShine } from "react-icons/tfi";
import { MdDarkMode } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { BsBoxes } from "react-icons/bs";
import { ImDownload } from "react-icons/im";

import Logo from ".././public/heritagifyLogo1.png";
import PortPic from ".././public/portPic.jpg";
import HtmlCss from ".././public/htmlcssjs.svg";
import Version from ".././public/version-control.svg";
import NextJs from ".././public/nextjs.svg";
import Programming from ".././public/programing.svg";
import Coder from ".././public/proud_coder.svg";
import Wip from ".././public/work_in_progress.svg";
import AboutMe from ".././public/aboutMe.webp";
import Zigzag from ".././public/zigzag.png";
import { AosOptions } from "aos";

export default function Page() {
  const homeRef: RefObject<HTMLDivElement> = useRef(null);
  const aboutRef: RefObject<HTMLDivElement> = useRef(null);
  const techStackRef: RefObject<HTMLDivElement> = useRef(null);
  const projectsRef: RefObject<HTMLDivElement> = useRef(null);
  const contactRef = useRef(null);

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
        <div ref={homeRef} id="home"
          data-aos="fade-down"
          className="relative flex justify-center md:hidden pt-16 pb-10"
        >
          <Image
            src={PortPic}
            alt="Portfolio Picture"
            className="mx-12 object-cover  h-96 md:w-96 md:h-96 md:rounded-full"
          />
          <Image
            src={Zigzag}
            alt="zigzag"
            className="absolute h-16 left-4 top-8"
          />
          <Image
            src={Zigzag}
            alt="zigzag"
            className="absolute h-16 right-4 bottom-3"
          />
          <FaCode className="absolute top-5 right-16 text-3xl text-white" />
          <BsBoxes className="absolute bottom-0 left-5 text-4xl text-red-400" />
        </div>

        <div className="mx-4 lg:mx-40 md:mt-28">
          <div className="flex justify-between">
            <div className="py-10 md:py-20 w-full md:w-2/3 space-y-5 md:space-y-0">
              <h1 className="text-5xl md:text-2xl font-medium flex items-center">
                Hi there{" "}
                <PiHandWavingFill className="text-yellow-600 md:text-3xl" />,
              </h1>
              <h1 className="my-2 text-2xl font-semibold ">
                I'm
                <span className="text-4xl lg:text-2xl font-bold mx-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Olaiya Heritage
                </span>
              </h1>
              <h2 className="md:w-3/4 my-2 text-xl md:text-lg">
                A passionate{" "}
                <span className="block text-4xl md:text-3xl font-semibold text-teal-300">
                  Frontend Developer
                </span>{" "}
                crafting elegant and intuitive web experiences.
              </h2>
              <div className="flex gap-7 md:gap-5 py-2 md:py-5">
                <Link
                  href="https://drive.google.com/uc?export=download&id=12P6OjhSUYvURIGXXgbzDtSgSTbIiAnIN"
                  className=" flex gap-1 items-center p-4 md:p-2 px-4 md:px-7 rounded-lg bg-white text-lg md:text-sm text-teal-600 font-bold md:font-semibold hover:bg-emerald-200 shadow-md shadow-teal-600"
                >
                  <ImDownload className="text-2xl" />
                  Download CV
                </Link>
                <button className="border border-teal-100 px-12 text-lg md:text-sm text-teal-200 rounded-lg hover:text-emerald-200 shadow-md shadow-teal-600">
                  Hire Me
                </button>
              </div>
            </div>
            {/* ----DEVELOPER'S IMAGE */}
            {/* <div className="flex justify-center items-center p-2 relative  bg-gradient-to-r from-indigo-500 via-teal-400 to-pink-500 rounded-full"> */}
            <Image
              src={PortPic}
              alt="Portfolio Picture"
              className="w-40 h-40 md:w-96 md:h-96 hidden md:flex rounded-full"
            />
            {/* </div> */}
          </div>
        </div>
        {/* ------------ABOUT SECTION----------- */}
        <div ref={aboutRef} id="about"
          // data-aos="fade-up"
          className="lg:flex justify-between items-center md:mx-48 mt-10 md:mt-20"
        >
          <center className="md:hidden text-3xl mb-8 font-semibold">
            About
          </center>

          <div>
            <Image
              src={AboutMe}
              alt="About Me"
              className="w-72 h-72 rounded-full"
            />
          </div>
          <div className="w-3/6">
            <h1 className="hidden lg:block text-xl mb-6 font-semibold">
              About
            </h1>
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
              As a passionate frontend developer, I thrive on blending
              creativity with technical prowess to craft captivating digital
              experiences. With a keen eye for design and a knack for
              problem-solving, I specialize in translating concepts into
              elegant, responsive websites that captivate users from the moment
              they land. Dedicated to delivering exceptional results, I
              prioritize accessibility and performance, ensuring every user
              interaction is seamless and engaging. My attention to detail and
              commitment to staying ahead of the curve allow me to create
              cutting-edge solutions that not only meet but exceed expectations.
            </p>
            <div className="space-y-2 ml-8 my-2">
              <p className="flex gap-1 items-center text-sm">
                <FaLocationDot className="text-cyan-400" /> Ibadan, Oyo,
                Nigeria.
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
        <TechStack ref={techStackRef} id="tech-stack"/>
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <Image
            src={HtmlCss}
            alt="Html and Css"
            className="absolute w-20 top-2/4 lg:top-12 left-10"
          />
          <Image
            src={Programming}
            alt="Programming"
            className="absolute w-20 top-20 right-10 "
          />
          <Image
            src={NextJs}
            alt="NextJs"
            className="absolute w-20 bottom-10 left-20"
          />
          <Image
            src={Version}
            alt="Version Control"
            className="absolute w-20 bottom-20 right-20"
          />
          <Image
            src={Coder}
            alt="Proud Coder"
            className="absolute w-20 top-40 left-40"
          />
          <Image
            src={Wip}
            alt="Work in Progress"
            className="absolute w-20 bottom-40 right-40"
          />
        </div>
        <Services ref={projectsRef} id="projects" />
        <Contact ref={contactRef} id="contact"/>
        <Footer />
      </div>
    </div>
  );
}
