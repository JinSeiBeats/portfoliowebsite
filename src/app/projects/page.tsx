'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

// Project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    category: 'Web Development',
    description: 'A fully responsive e-commerce platform built with Next.js and Tailwind CSS.',
    image: '/placeholder.svg',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    category: 'Web Development',
    description: 'A minimalist portfolio website for a creative professional.',
    image: '/placeholder.svg',
  },
  {
    id: 3,
    title: 'Mobile App UI',
    category: 'Web Development',
    description: 'User interface design for a fitness tracking mobile application.',
    image: '/placeholder.svg',
  },
  {
    id: 4,
    title: 'Brand Identity',
    category: 'Graphic Design',
    description: 'Complete brand identity including logo, color palette, and typography.',
    image: '/placeholder.svg',
  },
  {
    id: 5,
    title: 'Poster Series',
    category: 'Graphic Design',
    description: 'A series of minimalist posters for a cultural event.',
    image: '/placeholder.svg',
  },
  {
    id: 6,
    title: 'Product Packaging',
    category: 'Graphic Design',
    description: 'Packaging design for a premium skincare product line.',
    image: '/placeholder.svg',
  },
  {
    id: 7,
    title: 'Urban Landscapes',
    category: 'Photography',
    description: 'A collection of urban landscape photographs exploring city architecture.',
    image: '/placeholder.svg',
  },
  {
    id: 8,
    title: 'Portrait Series',
    category: 'Photography',
    description: 'Black and white portrait series capturing human emotions.',
    image: '/placeholder.svg',
  },
  {
    id: 9,
    title: 'Nature Close-ups',
    category: 'Photography',
    description: 'Macro photography showcasing the intricate details of nature.',
    image: '/placeholder.svg',
  },
  {
    id: 10,
    title: 'Ambient Album',
    category: 'Music',
    description: 'An album of ambient electronic music compositions.',
    image: '/placeholder.svg',
  },
  {
    id: 11,
    title: 'Film Score',
    category: 'Music',
    description: 'Original score composed for an independent short film.',
    image: '/placeholder.svg',
  },
  {
    id: 12,
    title: 'Promotional Video',
    category: 'Video',
    description: 'A promotional video for a tech startup showcasing their product.',
    image: '/placeholder.svg',
  },
  {
    id: 13,
    title: 'Documentary',
    category: 'Video',
    description: 'A short documentary about local artisans and their crafts.',
    image: '/placeholder.svg',
  },
  {
    id: 14,
    title: 'Motion Graphics',
    category: 'Video',
    description: 'Motion graphics and animations for digital marketing campaigns.',
    image: '/placeholder.svg',
  },
]

// Categories
const categories = [
  'All',
  'Web Development',
  'Graphic Design',
  'Photography',
  'Music',
  'Video',
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <>
      {/* Header */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Projects</h1>
            <p className="text-xl text-gray-300">
              A showcase of my work across various creative disciplines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    activeCategory === category
                      ? 'bg-black text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border border-gray-200 overflow-hidden"
                >
                  <div className="relative aspect-video bg-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      Project Image Placeholder
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm font-medium text-gray-500 mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-block font-bold border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-bold mb-4">No projects found</h3>
              <p className="text-gray-600">
                No projects found in the selected category. Please try another category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}
