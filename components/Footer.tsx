import Image from "next/image";
import "../app/globals.css";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <div className="text-teal-200 mt-40 rounded-lg backdrop-blur-lg bg-white/30 bg-opacity-25 mx-20 py-5">
      <div className="flex justify-between mx-20">
        <div className="border-4 space-y-3">
          <p className="text-sm">My social media handles:</p>

          <div className="flex space-x-9 text-lg text-emerald-400">
            <FaTwitter />
            <IoLogoWhatsapp />
            <IoMdMail />
            <FaLinkedin />
          </div>
        </div>

        <div className="border-4">
          <FaGithub />
        </div>
      </div>

      <center className="">&#169;2023</center>
    </div>
  );
}
