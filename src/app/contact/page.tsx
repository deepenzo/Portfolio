'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-dark-900 text-white p-4 md:p-8 pb-16 md:pb-8">
      <motion.div 
        className="max-w-3xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-accent-500">Contact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4 md:space-y-6 mt-6 md:mt-8">
              <div className="flex items-start">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-accent-500 mt-1 mr-3 md:mr-4" />
                <div>
                  <h3 className="font-medium text-sm md:text-base">Email</h3>
                  <p className="text-dark-200 text-xs md:text-sm">contact@yourdesigner.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-accent-500 mt-1 mr-3 md:mr-4" />
                <div>
                  <h3 className="font-medium text-sm md:text-base">Phone</h3>
                  <p className="text-dark-200 text-xs md:text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent-500 mt-1 mr-3 md:mr-4" />
                <div>
                  <h3 className="font-medium text-sm md:text-base">Location</h3>
                  <p className="text-dark-200 text-xs md:text-sm">New York, NY</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-800 p-4 md:p-6 rounded-lg">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-accent-400">Send a Message</h3>
            
            {isSubmitted ? (
              <motion.div 
                className="bg-dark-700 p-4 rounded-lg text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <p className="text-accent-500 font-medium mb-2 text-sm md:text-base">Message Sent!</p>
                <p className="text-xs md:text-sm">Thank you for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-xs md:text-sm">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-700 border border-dark-600 rounded-md p-1.5 md:p-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 text-xs md:text-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-700 border border-dark-600 rounded-md p-1.5 md:p-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 text-xs md:text-sm">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-dark-700 border border-dark-600 rounded-md p-1.5 md:p-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent-500"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center bg-accent-600 hover:bg-accent-700 text-dark-900 font-medium py-1.5 md:py-2 px-3 md:px-4 rounded-md transition-colors text-sm ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
      
      {/* Mobile navigation */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden flex justify-around bg-dark-800 py-3 px-2 z-10">
        <a href="/" className="hover:text-accent-500 transition-colors text-xs">Home</a>
        <a href="/about" className="hover:text-accent-500 transition-colors text-xs">About</a>
        <a href="/skills" className="hover:text-accent-500 transition-colors text-xs">Skills</a>
        <a href="/projects" className="hover:text-accent-500 transition-colors text-xs">Projects</a>
      </div>
    </section>
  )
}
