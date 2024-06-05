import Image from "next/image";
import "../app/globals.css";
import Wave from ".././public/wave.svg";

export default function Footer() {
  return (
    <div className="relative mt-40 rounded-lg backdrop-blur-lg bg-white/30 bg-opacity-25 mx-20 py-5 wave">
  <div className="absolute -top-56 w-full overflow-hidden bg-red=500 ">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
      <path
        // fill="#595E68"
        fill="red"
        fillOpacity="1"
        d="M0,256L60,218.7C120,181,240,107,360,106.7C480,107,600,181,720,224C840,267,960,277,1080,245.3C1200,213,1320,139,1380,101.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  </div>
  {/* Footer content */}
  <div className="pt-40">
    <h1>HERITAGIFY</h1>
    <h1>HERITAGIFY</h1>
    <h1>HERITAGIFY</h1>
  </div>
</div>

  );
}
