'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-dark-900 text-white p-4 md:p-8">
      <motion.div 
        className="max-w-3xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-accent-500">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              I am a passionate graphic designer with a keen eye for detail and a love for creating visually stunning designs that communicate effectively.
            </p>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              With expertise in branding, typography, UI/UX design, and illustration, I bring creative concepts to life through thoughtful design solutions.
            </p>
            <p className="text-base md:text-lg">
              My approach combines technical precision with artistic expression, resulting in designs that are both functional and aesthetically pleasing.
            </p>
          </div>
          
          <div className="bg-dark-800 p-4 md:p-6 rounded-lg">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-accent-400">Experience</h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <div className="text-accent-500 font-medium">Senior Graphic Designer</div>
                <div className="text-xs md:text-sm text-dark-200">Creative Studio • 2023-Present</div>
                <div className="mt-1 text-sm md:text-base">Leading design projects for major clients</div>
              </li>
              <li>
                <div className="text-accent-500 font-medium">UI/UX Designer</div>
                <div className="text-xs md:text-sm text-dark-200">Tech Innovations • 2020-2023</div>
                <div className="mt-1 text-sm md:text-base">Created user interfaces for web and mobile applications</div>
              </li>
              <li>
                <div className="text-accent-500 font-medium">Junior Designer</div>
                <div className="text-xs md:text-sm text-dark-200">Design Agency • 2018-2020</div>
                <div className="mt-1 text-sm md:text-base">Developed brand identities and marketing materials</div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 bg-dark-800 p-4 md:p-6 rounded-lg">
          <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-accent-400">Education</h3>
          <div className="mb-3 md:mb-4">
            <div className="text-accent-500 font-medium">Master of Arts in Graphic Design</div>
            <div className="text-xs md:text-sm text-dark-200">Design Institute • 2016-2018</div>
          </div>
          <div>
            <div className="text-accent-500 font-medium">Bachelor of Fine Arts</div>
            <div className="text-xs md:text-sm text-dark-200">University of Arts • 2012-2016</div>
          </div>
        </div>
      </motion.div>
      
      {/* Mobile navigation */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden flex justify-around bg-dark-800 py-3 px-2 z-10">
        <a href="/" className="hover:text-accent-500 transition-colors text-xs">Home</a>
        <a href="/projects" className="hover:text-accent-500 transition-colors text-xs">Projects</a>
        <a href="/skills" className="hover:text-accent-500 transition-colors text-xs">Skills</a>
        <a href="/contact" className="hover:text-accent-500 transition-colors text-xs">Contact</a>
      </div>
    </section>
  )
}
