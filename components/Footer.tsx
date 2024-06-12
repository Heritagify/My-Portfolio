import Image from "next/image";
import Link from "next/link";

import "../app/globals.css";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <div className="text-teal-200 mt-10 rounded-lg backdrop-blur-lg bg-white/30 bg-opacity-25 mx-20 pb-1">
      <div className="flex justify-between mx-20">
        <div className="space-y-3">
          <p className="text-sm">My social media handles:</p>

          <div className="flex space-x-9 text-2xl text-emerald-400">
            <Link
              href="https://twitter.com/olaiya_Heritage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="cursor-pointer hover:text-red-300 hover:animate-bounce" />
            </Link>
            <Link
              href=" https://wa.me/+2348146041496"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp className="cursor-pointer hover:text-red-300 hover:animate-bounce" />
            </Link>
            <Link
              href="mailto:heritageolaiya@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMdMail className="cursor-pointer hover:text-red-300 hover:animate-bounce" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/olaiya-heritage"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-red-300 hover:animate-bounce"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>

        <Link
          href="https://github.com/Heritagify"
          target="_blank"
          className="border-4"
        >
          <FaGithub />
        </Link>
      </div>

      <div className="flex justify-center items-center mt-3">
        <div className="w-48 md:w-44 border-t border-teal-500"></div>
        <div className="mx-2 md:text-sm text-teal-700-500">&#169; 2023</div>
        <div className="w-48 md:w-44 border-t border-teal-500"></div>
      </div>
    </div>
  );
}
