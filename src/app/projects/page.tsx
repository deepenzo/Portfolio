'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function ProjectsSection() {
  // Project data - in a real application, this would come from a database or API
  const projects = [
    { 
      id: 1, 
      name: "Brand Identity", 
      description: "Complete brand identity design for a tech startup, including logo, color palette, typography, and brand guidelines.",
      image: "/project-1.jpg",
      tags: ["Branding", "Logo Design", "Typography"]
    },
    { 
      id: 2, 
      name: "Web Design", 
      description: "Responsive website design for a luxury real estate company, featuring elegant layouts and intuitive navigation.",
      image: "/project-2.jpg",
      tags: ["UI/UX", "Web Design", "Responsive"]
    },
    { 
      id: 3, 
      name: "Typography", 
      description: "Custom typeface design for a fashion magazine, creating a unique and recognizable visual identity.",
      image: "/project-3.jpg",
      tags: ["Typography", "Print", "Editorial"]
    },
    { 
      id: 4, 
      name: "Illustration", 
      description: "Series of digital illustrations for a children's book, bringing characters and stories to life.",
      image: "/project-4.jpg",
      tags: ["Illustration", "Digital Art", "Publishing"]
    },
    { 
      id: 5, 
      name: "UI/UX Design", 
      description: "User interface and experience design for a mobile banking application, focusing on simplicity and accessibility.",
      image: "/project-5.jpg",
      tags: ["UI/UX", "Mobile", "App Design"]
    },
    { 
      id: 6, 
      name: "Motion Graphics", 
      description: "Animated intro sequence for a documentary series, combining typography and visual elements.",
      image: "/project-6.jpg",
      tags: ["Motion Graphics", "Animation", "Video"]
    },
    { 
      id: 7, 
      name: "Print Design", 
      description: "Annual report design for a non-profit organization, effectively communicating impact and financial information.",
      image: "/project-7.jpg",
      tags: ["Print", "Layout", "Information Design"]
    },
    { 
      id: 8, 
      name: "Packaging", 
      description: "Product packaging design for an organic skincare line, emphasizing sustainability and natural ingredients.",
      image: "/project-8.jpg",
      tags: ["Packaging", "Product Design", "Sustainability"]
    },
    { 
      id: 9, 
      name: "Logo Design", 
      description: "Collection of logo designs for various clients across different industries, showcasing versatility and creativity.",
      image: "/project-9.jpg",
      tags: ["Logo Design", "Branding", "Identity"]
    },
    { 
      id: 10, 
      name: "Editorial", 
      description: "Magazine layout design featuring dynamic typography and image compositions for feature articles.",
      image: "/project-10.jpg",
      tags: ["Editorial", "Print", "Layout"]
    },
    { 
      id: 11, 
      name: "Photography", 
      description: "Product photography and retouching for an e-commerce website, highlighting product features and details.",
      image: "/project-11.jpg",
      tags: ["Photography", "Retouching", "E-commerce"]
    },
    { 
      id: 12, 
      name: "3D Design", 
      description: "3D visualization for an architectural project, creating realistic renderings of interior and exterior spaces.",
      image: "/project-12.jpg",
      tags: ["3D Design", "Visualization", "Architecture"]
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Branding', 'Web Design', 'UI/UX', 'Typography', 'Print', 'Illustration', '3D Design'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedCategory));

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-dark-900 text-white p-4 md:p-8 pb-16 md:pb-8">
      <motion.div 
        className="max-w-6xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-accent-500">Projects</h2>
        
        <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm transition-colors ${
                selectedCategory === category 
                  ? 'bg-accent-500 text-dark-900' 
                  : 'bg-dark-700 hover:bg-dark-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-dark-800 rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
            >
              <div className="h-36 md:h-48 bg-dark-700 flex items-center justify-center">
                <p className="text-dark-300 text-xs md:text-sm">Project Image Placeholder</p>
              </div>
              
              <div className="p-3 md:p-4">
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-accent-400">{project.name}</h3>
                <p className="text-dark-200 text-sm md:text-base mb-3 md:mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-0.5 md:py-1 bg-dark-700 rounded-full text-[10px] md:text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={`#project-${project.id}`} 
                  className="inline-flex items-center text-accent-500 hover:text-accent-400 transition-colors text-sm md:text-base"
                >
                  View Details
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Mobile navigation */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden flex justify-around bg-dark-800 py-3 px-2 z-10">
        <a href="/" className="hover:text-accent-500 transition-colors text-xs">Home</a>
        <a href="/about" className="hover:text-accent-500 transition-colors text-xs">About</a>
        <a href="/skills" className="hover:text-accent-500 transition-colors text-xs">Skills</a>
        <a href="/contact" className="hover:text-accent-500 transition-colors text-xs">Contact</a>
      </div>
    </section>
  )
}
