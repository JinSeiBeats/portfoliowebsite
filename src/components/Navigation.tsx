'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Music', path: '/music' },
  { name: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Joshua Terzol
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  href={item.path}
                  className={`relative font-medium hover:text-gray-600 transition-colors ${
                    pathname === item.path ? 'font-bold' : ''
                  }`}
                >
                  {item.name}
                  {pathname === item.path && (
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"
                      layoutId="underline"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 relative w-10 h-10 flex items-center justify-center"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="relative w-6 h-5">
            <span 
              className={`absolute h-0.5 w-full bg-black transform transition-all duration-300 ${
                isOpen ? 'rotate-45 top-2' : 'top-0'
              }`}
            />
            <span 
              className={`absolute h-0.5 w-full bg-black top-2 transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span 
              className={`absolute h-0.5 w-full bg-black transform transition-all duration-300 ${
                isOpen ? '-rotate-45 top-2' : 'top-4'
              }`}
            />
          </div>
        </button>

        {/* Mobile Navigation */}
        <motion.div 
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden ${
            isOpen ? 'block' : 'hidden'
          }`}
          initial={{ opacity: 0, x: '100%' }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            x: isOpen ? 0 : '100%',
            transition: { duration: 0.3 }
          }}
        >
          <nav>
            <ul className="flex flex-col space-y-8 text-center">
              {navItems.map((item) => (
                <motion.li 
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isOpen ? 1 : 0, 
                    y: isOpen ? 0 : 20,
                    transition: { delay: 0.1 * navItems.indexOf(item) }
                  }}
                >
                  <Link 
                    href={item.path}
                    className={`text-2xl font-medium hover:text-gray-600 transition-colors ${
                      pathname === item.path ? 'font-bold' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </div>
    </header>
  )
}
