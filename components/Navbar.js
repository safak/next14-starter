'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useUser, SignInButton, SignOutButton } from '@clerk/nextjs'
import { HiMenu, HiX } from 'react-icons/hi'
import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar() {
  const { isSignedIn, user } = useUser()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  const toggleMenu = () => setMenuOpen(prev => !prev)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('header')) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [menuOpen])

  return (
    <header className={`w-full px-4  sm:px-6 lg:px-8 fixed top-0 z-50 transition-all duration-300 ${
      scrolled 
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2">
        {/* Logo Container - Improved positioning */}
        <Link href="/" className="flex items-center justify-center">
          <motion.div 
            className="relative overflow-hidden rounded-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="logo.webp" 
              alt="Logo" 
              className={`object-contain transition-all duration-300 ${
                scrolled 
                  ? 'h-14 w-16' 
                  : 'h-24 w-24'
              }`}
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLinks isSignedIn={isSignedIn} />
          <AuthSection isSignedIn={isSignedIn} userName={user?.firstName} />
        </nav>

        {/* Mobile Toggle Button */}
        <motion.button 
          onClick={toggleMenu} 
          className="lg:hidden text-gray-700 hover:text-gray-900 text-2xl p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 border border-gray-200 shadow-sm"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiX />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiMenu />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden mt-2 mx-2 mb-4 px-6 pt-4 pb-6 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg"
          >
            <div className="flex flex-col space-y-4">
              <NavLinks isSignedIn={isSignedIn} mobile />
              <div className="border-t border-gray-200 pt-4 mt-4">
                <AuthSection isSignedIn={isSignedIn} userName={user?.firstName} mobile />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavLinks({ isSignedIn, mobile = false }) {
  const baseStyle = mobile 
    ? 'text-base font-medium  hover:text-blue-600 transition-all duration-200 py-3 px-2 rounded-lg hover:bg-gray-50 block'
    : 'text-sm font-medium  hover:text-blue-600 transition-all duration-200 relative group px-3 py-2 rounded-lg hover:bg-gray-50'

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  }

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
    { href: '/achievement', label: 'Achievement' },
    ...(isSignedIn ? [{ href: '/blog', label: 'Blog' }] : [])
  ]

  return (
    <>
      {links.map((link, index) => (
        <motion.div
          key={link.href}
          variants={linkVariants}
          initial={mobile ? 'hidden' : 'visible'}
          animate="visible"
          transition={{ delay: mobile ? index * 0.05 : 0 }}
        >
          <Link href={link.href} className={baseStyle}>
            {link.label}
            {!mobile && (
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-4/5 rounded-full"></span>
            )}
          </Link>
        </motion.div>
      ))}
    </>
  )
}

function AuthSection({ isSignedIn, userName, mobile = false }) {
  if (isSignedIn) {
    return (
      <div className={`flex ${mobile ? 'flex-col space-y-3' : 'flex-row items-center'} gap-3`}>
        <span className=" text-sm">
          Heyy, <span className="text-blue-600 font-semibold">{userName}</span>
        </span>
        <SignOutButton>
          <motion.button 
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium transition-all duration-200 text-sm shadow-md hover:shadow-lg border border-red-600/20"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign Out
          </motion.button>
        </SignOutButton>
      </div>
    )
  }

  return (
    <SignInButton>
      <motion.button 
        className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold transition-all duration-200 text-sm shadow-md hover:shadow-lg border border-blue-700/20"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Sign In
      </motion.button>
    </SignInButton>
  )
}