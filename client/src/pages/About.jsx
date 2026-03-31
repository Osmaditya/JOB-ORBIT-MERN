import React from 'react'
import { MetaData } from '../components/MetaData'

export const About = () => {
  return (
    <>
      <MetaData title="About" />
      <div className="bg-gray-900 min-h-screen pt-14 md:px-20 px-3 text-white">
        <div className="grid md:grid-cols-3 gap-5 md:px-0 px-2 md:pt-8 pt-4 pb-20">
          
          {/* About */}
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <p className="text-4xl pb-3 font-bold text-center text-yellow-500">About Us</p>
            <p className="text-lg">
              At <span className="text-yellow-400 font-semibold">JobOrbit</span>, we go beyond being just a job platform — we act as your career growth partner. 
              Our goal is to bridge the gap between talented individuals and meaningful opportunities that help them grow and succeed. 
              Whether you're just starting your journey or looking to take the next big step, JobOrbit is designed to support you at every stage.
            </p>
          </div>

          {/* Features */}
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <p className="text-3xl text-yellow-500 text-center">What Makes Us Different</p>
            <ul className="list-disc px-5 text-lg mt-2 space-y-2">
              <li>
                <span className="font-semibold text-lg">
                  Smart Job Matching:
                </span>{" "}
                Our intelligent system connects you with roles that truly match your skills, interests, and career goals — helping you save time and effort.
              </li>
              <li>
                <span className="font-semibold text-lg">
                  Dedicated Support:
                </span>{" "}
                From building a strong profile to cracking interviews, our support team is always ready to guide you throughout your journey.
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <p className="text-2xl text-yellow-500">Become a Part of JobOrbit</p>
            <p className="pt-3">
              When you join <span className="text-yellow-400 font-semibold">JobOrbit</span>, you become a part of a thriving network of job seekers, recruiters, and mentors. 
              Together, we are building a smarter and more connected future of work.
            </p>
            <p className="pt-4">
              Thank you for choosing JobOrbit. Let’s unlock new opportunities and achieve your career goals together 🚀
            </p>
          </div>

        </div>
      </div>
    </>
  )
}