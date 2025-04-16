'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  projectId: number
}

export function ProjectModal({ isOpen, onClose, projectId }: ProjectModalProps) {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Mock project data - in a real application, this would come from a database or API
  const projectData = {
    title: `Project ${projectId}`,
    description: "This is a detailed description of the project. It showcases the designer's skills and creativity through a visually stunning and technically impressive piece of work.",
    tags: ["Graphic Design", "Branding", "UI/UX", "Typography"],
    image: `/project-${projectId}.jpg`, // Placeholder for project images
    year: "2025"
  }

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-dark-800 p-4 md:p-6 rounded-lg"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-2 right-2 md:top-4 md:right-4 p-1.5 md:p-2 rounded-full bg-dark-700 hover:bg-dark-600 transition-colors"
              onClick={onClose}
            >
              <X size={isMobile ? 16 : 20} />
            </button>
            
            <div className="mt-4 md:mt-6">
              <h2 className="text-2xl md:text-3xl font-bold text-accent-500 mb-2">{projectData.title}</h2>
              <div className="h-48 md:h-80 bg-dark-700 mb-4 md:mb-6 flex items-center justify-center">
                <p className="text-dark-300 text-sm md:text-base">Project Image Placeholder</p>
              </div>
              <p className="text-base md:text-lg mb-4 md:mb-6">{projectData.description}</p>
              
              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                {projectData.tags.map((tag, index) => (
                  <span key={index} className="px-2 md:px-3 py-0.5 md:py-1 bg-dark-700 rounded-full text-xs md:text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="text-right text-dark-300 text-xs md:text-sm">
                {projectData.year}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
