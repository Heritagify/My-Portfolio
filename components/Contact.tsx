import Image from "next/image";
import ContactMe from ".././public/contact.svg";
import { SiMinutemailer } from "react-icons/si";
import "../app/globals.css";

export default function Contact() {
  return (
    <div>
      <center className="text-3xl font-semibold py-9">Contact</center>
      <div className="rounded-lg flex backdrop-blur-lg bg-white/30 bg-opacity-25 mx-20 py-10">
        <div className="flex justify-center items-center w-1/2">
          <Image
            src={ContactMe}
            alt="Contact me"
            className="w-96 h-96"
          />
        </div>
        <div className="flex flex-col items-center justify-center py-5"></div>
        <form className="w-1/2 space-y-6 mx-5">
          <div className="space-y-2">
            <label className="">User Name</label>
            <input
              className="bg-white rounded-xl w-full p-2 py-3 shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label className="">Email</label>
            <input
              className="bg-white rounded-xl w-full p-2 py-3 shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Your Email"
              type="text"
            />
          </div>
          <label
            // for="message"
            className="block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Your message
          </label>
          <textarea
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your Message please....."
          ></textarea>

          <div className="flex justify-center">
            <button className="flex justify-center items-center gap-1 p-2 px-6 rounded-lg font-semibold cursor-pointer dark:text-indigo-600 bg-indigo-700 text-gray-300 dark:bg-gray-300 hover:shadow-md hover:shadow-white focus:outline-none focus:shadow-outline"
              >Send Message <SiMinutemailer className="text-2xl"/>
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}
