"use client";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export default function Footer() {
  return (
    <main className="flex flex-col items-center justify-between p-4 bg-black">
     <div className="flex flex-wrap justify-center gap-4 mt-4 text-gray-400 border-t border-gray-700 pt-4">
          All content on this website is created by me, Cassyboi. Feel free to explore and contact me if you have any questions or want to collaborate on a project!
     </div>
     <div className="flex flex-wrap justify-center gap-4 mt-4 text-gray-400">
          &copy; {new Date().getFullYear()} Cassyboi. All rights reserved.
     </div>
     <div className="flex flex-wrap justify-center gap-4 mt-4 text-gray-400">
          Made with Next.js and Tailwind CSS.
     </div>
     <div>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a
            href="https://github.com/cassyboi"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-400
             py-2 px-4 rounded-lg hover:text-white transition-colors duration-300"
          >
            <IoLogoGithub className="w-7 h-7"/>
          </a>
          <a
            href="https://linkedin.com/in/cassyboi"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-400 py-2 px-4 rounded-lg hover:text-white transition-colors duration-300"
          >
            <FaLinkedin className="w-7 h-7"/>
          </a>
          <a
            href="https://x.com/silent_dev87223"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-400 py-2 px-4 rounded-lg hover:text-white transition-colors duration-300"
          >
            <FaXTwitter className="w-7 h-7"/>
          </a>
        </div>
     </div>
     <div className="flex flex-wrap justify-center gap-4 mt-4 text-gray-400">
     </div>
    </main>
  )
}