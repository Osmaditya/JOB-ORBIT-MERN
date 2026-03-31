import React from 'react'
import { MdOutlineBusinessCenter } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitterSquare, FaYoutube } from 'react-icons/fa'
import { AiFillInstagram, AiFillMail } from 'react-icons/ai'

export const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 text-white py-3 pt-5 grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-3 md:justify-center">

        {/* Navigation */}
        <div className="flex gap-6 justify-center items-center">
          <Link to="/" className="text-white hover:text-blue-400 hover:underline">Home</Link>
          <Link to="/jobs" className="text-white hover:text-blue-400 hover:underline">Jobs</Link>
          <Link to="/about" className="text-white hover:text-blue-400 hover:underline">About</Link>
          <Link to="/contact" className="text-white hover:text-blue-400 hover:underline">Contact</Link>
        </div>

        {/* Branding */}
        <div>
          <div className="flex flex-col justify-center items-center pt-5">
            <p className="titleT text-2xl flex justify-center items-center">
              <MdOutlineBusinessCenter /> JobOrbit
            </p>
            <p className="text-sm text-gray-300">
              Discover better opportunities with JobOrbit.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 py-2 justify-center items-center">

            {/* GitHub */}
            <a href="https://github.com/osmaditya" target="_blank" rel="noopener noreferrer">
              <FaGithub className="cursor-pointer hover:text-gray-400 duration-200 ease" size={22} />
            </a>

            <a href="https://x.com/OsmAditya5" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare className="cursor-pointer hover:text-[#1DA1F2] duration-200 ease" size={22} />
            </a>

            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="cursor-pointer hover:text-[#FF0000] duration-200 ease" size={22} />
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/osmaditya/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="cursor-pointer hover:text-[#0A66C2] duration-200 ease" size={22} />
            </a>

            <a href="mailto:your-email@gmail.com">
              <AiFillMail className="cursor-pointer hover:text-[#D44638] duration-200 ease" size={22} />
            </a>

          </div>
        </div>

        {/* Credit */}
        <div className="flex flex-col pt-3 justify-center items-center">
          <p className="text-sm">
            Designed and Developed by{" "}
            <a
              href="https://joborbitwebsite.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400"
            >
              Aditya
            </a>
          </p>
          <p className="text-sm"> &copy; Copyright, All rights reserved.</p>
        </div>

      </div>
    </>
  );
}