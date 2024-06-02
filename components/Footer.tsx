import Image from "next/image";
import "../app/globals.css";

export default function Footer() {
  return (
    <div className="rounded-lg flex backdrop-blur-lg bg-white/30 bg-opacity-25 mx-20 py-10">
        <div className="relative">
  <div className="bg-blue-800 py-16">
    {/*  Your content goes here */}
    <h1>ASTALAVI</h1>
  </div>
  <div className="absolute top-0 left-0 right-0 h-20 bg-white -mb-5 clip-path-wave-top"></div>
  <div className="absolute bottom-0 left-0 right-0 h-20 bg-white -mt-5 clip-path-wave-bottom"></div>
</div>

    </div>
     );
    }