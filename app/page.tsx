/* eslint-disable react/no-unescaped-entities */
"use client";
import { useRef, RefObject } from "react";
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
import Pattern from ".././public/pattern.svg";
import { AosOptions } from "aos";

export default function Page() {
  const homeRef: RefObject<HTMLDivElement> = useRef(null);
  const aboutRef: RefObject<HTMLDivElement> = useRef(null);
  const techStackRef: RefObject<HTMLDivElement> = useRef(null);
  const projectsRef: RefObject<HTMLDivElement> = useRef(null);
  const contactRef = useRef(null);

  useAos();

  return (
    <div className="dark backdrop-filter backdrop-blur-xl bg-gray-900 overflow-hidden">
      <div className="relative">
        <div className="flex justify-center w-full h-full">
          <Image
            src={Pattern}
            alt="Bg-Pattern"
            className="absolute -z-10 top-12 opacity-50"
          />

          <Image
            src={Pattern}
            alt="Bg-Pattern"
            className="absolute top-1/2 -left-10 -z-10 opacity-50"
          />
          <Image
            src={Pattern}
            alt="Bg-Pattern"
            className="absolute W-72 top-3/4 -z-10"
          />
        </div>

        <Navbar />
        {/* ------------HERO SECTION_--------- */}
        <div
          ref={homeRef}
          id="home"
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
                  href="https://drive.google.com/file/d/1E6sbufjkiL1uGLClnxivC0Px8SEyAYe6/view?usp=drive_link"
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
        <div
          ref={aboutRef}
          id="about"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="lg:flex justify-between items-center md:mx-32 my-20 md:mt-28"
        >
          <center className="md:hidden text-3xl mb-8 font-semibold">
            About
          </center>

          <div>
            <Image
              src={AboutMe}
              alt="About Me"
              className="w-96 h-96 rounded-full"
            />
          </div>
          <div className="w-3/6 mt-6 pl-12">
            <h1 className="hidden lg:block text-xl mb-5 lg:ml-3 font-semibold">
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
            <p className="border-b-4 ml-8">
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
        <TechStack />
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

        <Services />
        <Contact />

        <Footer />
      </div>
    </div>
  );
}
