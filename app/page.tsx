"use client";
import './globals.css'
import { useAos } from "./utils/useAos";
import Navbar from '.././components/Navbar'


export default function Page() {
  useAos();

  return (
    <div>
      <Navbar/>
      <h1
        data-aos="fade-right"
        className="text-4xl font-bold mb-8">My Portfolio</h1>
      <div data-aos="fade-up" className="mb-8">
        <h2 className="text-2xl font-semibold">About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus
          sapien ac nisi bibendum, vel malesuada nisi tincidunt.
        </p>
      </div>
      <div data-aos="fade-left" className="container mb-8 border-2 border-red-600">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </div>
      <div data-aos="fade-right">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>Get in touch with me at example@example.com</p>
      </div>
    </div>
  );
}