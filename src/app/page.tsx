'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProjectModal } from '@/components/ui/project-modal'
import { gsap } from 'gsap'

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Calculate rotation angles for watch hands
  const secondsAngle = (currentTime.getSeconds() / 60) * 360;
  const minutesAngle = ((currentTime.getMinutes() + currentTime.getSeconds() / 60) / 60) * 360;
  const hoursAngle = ((currentTime.getHours() % 12 + currentTime.getMinutes() / 60) / 12) * 360;

  // Project data - in a real application, this would come from a database or API
  const projects = [
    { id: 1, name: "Brand Identity" },
    { id: 2, name: "Web Design" },
    { id: 3, name: "Typography" },
    { id: 4, name: "Illustration" },
    { id: 5, name: "UI/UX Design" },
    { id: 6, name: "Motion Graphics" },
    { id: 7, name: "Print Design" },
    { id: 8, name: "Packaging" },
    { id: 9, name: "Logo Design" },
    { id: 10, name: "Editorial" },
    { id: 11, name: "Photography" },
    { id: 12, name: "3D Design" },
  ];

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-dark-900 text-white p-4">
      <div className="fixed top-4 left-4 text-xl font-mono z-10">
        <span className="text-accent-500">Portfolio</span>
      </div>
      
      <div className="fixed top-4 right-4 md:flex hidden space-x-6 text-sm z-10">
        <a href="/about" className="hover:text-accent-500 transition-colors">About</a>
        <a href="/projects" className="hover:text-accent-500 transition-colors">Projects</a>
        <a href="/skills" className="hover:text-accent-500 transition-colors">Skills</a>
        <a href="/contact" className="hover:text-accent-500 transition-colors">Contact</a>
      </div>
      
      {/* Mobile menu */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden flex justify-around bg-dark-800 py-3 px-2 z-10">
        <a href="/about" className="hover:text-accent-500 transition-colors text-xs">About</a>
        <a href="/projects" className="hover:text-accent-500 transition-colors text-xs">Projects</a>
        <a href="/skills" className="hover:text-accent-500 transition-colors text-xs">Skills</a>
        <a href="/contact" className="hover:text-accent-500 transition-colors text-xs">Contact</a>
      </div>
      
      <div className={`relative ${isMobile ? 'w-[90vw] h-[90vw]' : 'w-[80vw] h-[80vw]'} max-w-[700px] max-h-[700px] mt-8 mb-16`}>
        {/* Watch face */}
        <div className="absolute inset-0 rounded-full border-2 border-dark-400 bg-dark-800 shadow-[0_0_40px_rgba(255,230,153,0.1)]">
          {/* Hour markers */}
          {[...Array(12)].map((_, i) => (
            <div 
              key={`marker-${i}`} 
              className="absolute w-1 h-4 bg-dark-300"
              style={{
                left: '50%',
                top: '10px',
                transformOrigin: 'bottom center',
                transform: `translateX(-50%) rotate(${i * 30}deg)`,
              }}
            />
          ))}
          
          {/* Project markers - 12 positions around the watch */}
          {projects.map((project, i) => (
            <motion.div
              key={`project-${project.id}`}
              className={`absolute rounded-full bg-dark-700 flex items-center justify-center cursor-pointer
                ${isMobile ? 'w-10 h-10' : 'w-14 h-14'}`}
              style={{
                left: `${50 + 42 * Math.sin(i * 30 * Math.PI / 180)}%`,
                top: `${50 - 42 * Math.cos(i * 30 * Math.PI / 180)}%`,
                transform: 'translate(-50%, -50%)',
              }}
              whileHover={{ 
                scale: 1.2, 
                backgroundColor: '#ffe699',
                color: '#111111',
                boxShadow: '0 0 15px rgba(255, 230, 153, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                type: 'spring', 
                stiffness: 300,
                damping: 15
              }}
              onClick={() => handleProjectClick(project.id)}
            >
              <span className={`font-mono text-center px-1 ${isMobile ? 'text-[8px]' : 'text-xs'}`}>
                {project.name}
              </span>
            </motion.div>
          ))}
          
          {/* Watch hands */}
          <motion.div 
            className={`absolute left-1/2 top-1/2 bg-white rounded-full origin-bottom
              ${isMobile ? 'w-1 h-[35%]' : 'w-1.5 h-[35%]'}`}
            style={{ transform: `translateX(-50%) rotate(${hoursAngle}deg)` }}
            animate={{ rotate: hoursAngle }}
            transition={{ type: 'spring', stiffness: 50, damping: 15 }}
          />
          <motion.div 
            className={`absolute left-1/2 top-1/2 bg-accent-500 rounded-full origin-bottom
              ${isMobile ? 'w-0.5 h-[45%]' : 'w-1 h-[45%]'}`}
            style={{ transform: `translateX(-50%) rotate(${minutesAngle}deg)` }}
            animate={{ rotate: minutesAngle }}
            transition={{ type: 'spring', stiffness: 50, damping: 15 }}
          />
          <motion.div 
            className="absolute left-1/2 top-1/2 w-0.5 h-[48%] bg-red-500 rounded-full origin-bottom"
            style={{ transform: `translateX(-50%) rotate(${secondsAngle}deg)` }}
            animate={{ rotate: secondsAngle }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          />
          
          {/* Center dot */}
          <div className={`absolute left-1/2 top-1/2 bg-accent-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(255,230,153,0.5)]
            ${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} />
        </div>
      </div>
      
      <div className="fixed bottom-16 md:bottom-4 left-4 text-xs font-mono">
        <div>{currentTime.toLocaleDateString()}</div>
        <div>{currentTime.toLocaleTimeString()}</div>
      </div>
      
      <div className="fixed bottom-16 md:bottom-4 right-4 text-xs font-mono">
        <div>Graphic Designer</div>
        <div className="text-accent-500">Portfolio 2025</div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          projectId={selectedProject} 
        />
      )}
    </main>
  )
}
