'use client'
import { useState } from 'react'
import Navbar from '../../components/Navbar'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // Create mailto link
      const subject = `Contact Form Message from ${formData.name}`
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      const mailtoLink = `mailto:invicta.nit.jsr@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
      // Open email client
      window.location.href = mailtoLink
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-4 min-h-screen bg-black relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/b71c4ed1-1dbe-407a-b7ab-8a97e7833430.jpg')"
        }}
      ></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black/70 to-blue-900/40 animate-pulse"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }}></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-blue-400 mb-3 sm:mb-4">
              Get In Touch
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-2">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Name Field */}
            <div className="group">
              <label className="block text-white mb-2 sm:mb-3 font-medium text-base sm:text-lg">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-900/60 backdrop-blur-sm text-white rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700/50 transition-all duration-300 hover:bg-gray-800/60 hover:border-purple-500/50 placeholder-gray-400 text-base sm:text-lg group-hover:shadow-lg group-hover:shadow-purple-500/10"
                placeholder="Enter your full name"
              />
            </div>
            
            {/* Email Field */}
            <div className="group">
              <label className="block text-white mb-2 sm:mb-3 font-medium text-base sm:text-lg">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-900/60 backdrop-blur-sm text-white rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700/50 transition-all duration-300 hover:bg-gray-800/60 hover:border-purple-500/50 placeholder-gray-400 text-base sm:text-lg group-hover:shadow-lg group-hover:shadow-purple-500/10"
                placeholder="your.email@example.com"
              />
            </div>
            
            {/* Message Field */}
            <div className="group">
              <label className="block text-white mb-2 sm:mb-3 font-medium text-base sm:text-lg">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-900/60 backdrop-blur-sm text-white rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700/50 transition-all duration-300 hover:bg-gray-800/60 hover:border-purple-500/50 placeholder-gray-400 text-base sm:text-lg resize-none group-hover:shadow-lg group-hover:shadow-purple-500/10"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-base sm:text-lg relative overflow-hidden group active:scale-95"
            >
              <span className="relative z-10">
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="text-green-400 text-center font-medium bg-green-900/20 border border-green-500/30 rounded-xl px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">Email client opened! Please send the message from your email app.</span>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="text-red-400 text-center font-medium bg-red-900/20 border border-red-500/30 rounded-xl px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">Something went wrong. Please try again.</span>
                </div>
              </div>
            )}
          </form>
          
          {/* Contact Info */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700/30">
              <p className="text-gray-300 mb-3 sm:mb-4 text-base sm:text-lg">Or reach us directly at:</p>
              <a 
                href="mailto:invicta.nit.jsr@gmail.com" 
                className="text-purple-400 hover:text-purple-300 transition-all duration-300 text-lg sm:text-xl font-medium hover:underline decoration-purple-400 break-all"
              >
                invicta.nit.jsr@gmail.com
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}