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
import AboutMe from ".././public/aboutMe.webp";
import TechStack from ".././components/TechStack";

export default function Page() {
  useAos();

    return (
      <div className="backdrop-filter backdrop-blur-lg bg-">
      <div className="dark">
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
      </div>
  </div>
  );
}
