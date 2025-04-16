'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function SkillsSection() {
  const skills = [
    { category: "Design", items: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Figma", "Sketch"] },
    { category: "Web", items: ["HTML/CSS", "UI/UX Design", "Responsive Design", "Web Typography", "Design Systems"] },
    { category: "Other", items: ["Brand Identity", "Typography", "Print Design", "Motion Graphics", "Photography"] }
  ]

  const proficiencyLevels = {
    "Adobe Photoshop": 95,
    "Adobe Illustrator": 90,
    "Adobe InDesign": 85,
    "Figma": 92,
    "Sketch": 80,
    "HTML/CSS": 75,
    "UI/UX Design": 88,
    "Responsive Design": 85,
    "Web Typography": 90,
    "Design Systems": 82,
    "Brand Identity": 95,
    "Typography": 92,
    "Print Design": 88,
    "Motion Graphics": 78,
    "Photography": 85
  }

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center bg-dark-900 text-white p-4 md:p-8">
      <motion.div 
        className="max-w-3xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-accent-500">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              As a graphic designer, I've developed a diverse set of skills across various design disciplines and tools.
              My technical proficiency is complemented by a strong understanding of design principles and creative problem-solving.
            </p>
            
            <div className="mt-6 md:mt-8">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-accent-400">Software & Tools</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                {skills[0].items.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-2"></div>
                    <span className="text-sm md:text-base">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-dark-800 p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-accent-400">Proficiency</h3>
              <div className="space-y-3 md:space-y-4">
                {Object.entries(proficiencyLevels).slice(0, 5).map(([skill, level], index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1 text-sm md:text-base">
                      <span>{skill}</span>
                      <span>{level}%</span>
                    </div>
                    <div className="w-full bg-dark-600 rounded-full h-1.5 md:h-2">
                      <motion.div 
                        className="bg-accent-500 h-1.5 md:h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 md:mt-8">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-accent-400">Specializations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                {skills[2].items.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-2"></div>
                    <span className="text-sm md:text-base">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Mobile navigation */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden flex justify-around bg-dark-800 py-3 px-2 z-10">
        <a href="/" className="hover:text-accent-500 transition-colors text-xs">Home</a>
        <a href="/about" className="hover:text-accent-500 transition-colors text-xs">About</a>
        <a href="/projects" className="hover:text-accent-500 transition-colors text-xs">Projects</a>
        <a href="/contact" className="hover:text-accent-500 transition-colors text-xs">Contact</a>
      </div>
    </section>
  )
}
