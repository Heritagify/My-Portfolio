import "../app/globals.css";

export default function Navbar() {
  return (
    <div>
      <header className="flex justify-between mx-4 p-2 items-center shadow-sm shadow-cyan-900">
        <h1 className="italic text-cyan-900 font-semibold text-2xl">
          HERITAGIFY
        </h1>
        <div className="hidden md:flex space-x-5 text-sm ">
          <li>Home</li>
          <li>About</li>
          <li>Tech Stacks</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </div>
        <div className="space-x-2 text-sm">
          <button className="bg-green-800 text-cyan-200 p-1">Sign In</button>
          <button>Sign Up</button>
        </div>
      </header>
    </div>
  );
}
