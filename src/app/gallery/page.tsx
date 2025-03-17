'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Gallery data
const galleryItems = [
  {
    id: 1,
    title: 'Urban Architecture',
    category: 'Photography',
    description: 'Modern urban architecture with clean lines and geometric shapes.',
    image: '/placeholder.svg',
  },
  {
    id: 2,
    title: 'Abstract Composition',
    category: 'Graphic Design',
    description: 'Abstract geometric composition with bold colors and shapes.',
    image: '/placeholder.svg',
  },
  {
    id: 3,
    title: 'Portrait Study',
    category: 'Photography',
    description: 'Black and white portrait study focusing on light and shadow.',
    image: '/placeholder.svg',
  },
  {
    id: 4,
    title: 'Brand Logo',
    category: 'Graphic Design',
    description: 'Minimalist logo design for a luxury brand.',
    image: '/placeholder.svg',
  },
  {
    id: 5,
    title: 'Nature Close-up',
    category: 'Photography',
    description: 'Macro photography of natural elements and textures.',
    image: '/placeholder.svg',
  },
  {
    id: 6,
    title: 'UI Design',
    category: 'Graphic Design',
    description: 'Clean and modern user interface design for a mobile app.',
    image: '/placeholder.svg',
  },
  {
    id: 7,
    title: 'Street Photography',
    category: 'Photography',
    description: 'Candid street photography capturing urban life moments.',
    image: '/placeholder.svg',
  },
  {
    id: 8,
    title: 'Poster Design',
    category: 'Graphic Design',
    description: 'Minimalist poster design with typography focus.',
    image: '/placeholder.svg',
  },
  {
    id: 9,
    title: 'Landscape',
    category: 'Photography',
    description: 'Dramatic landscape photography with moody atmosphere.',
    image: '/placeholder.svg',
  },
  {
    id: 10,
    title: 'Product Packaging',
    category: 'Graphic Design',
    description: 'Elegant packaging design for a premium product line.',
    image: '/placeholder.svg',
  },
  {
    id: 11,
    title: 'Architectural Detail',
    category: 'Photography',
    description: 'Close-up study of architectural details and textures.',
    image: '/placeholder.svg',
  },
  {
    id: 12,
    title: 'Editorial Layout',
    category: 'Graphic Design',
    description: 'Clean editorial layout design for a magazine spread.',
    image: '/placeholder.svg',
  },
]

// Categories
const categories = [
  'All',
  'Photography',
  'Graphic Design',
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null)

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  const openLightbox = (item: typeof galleryItems[0]) => {
    setSelectedItem(item)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedItem(null)
    document.body.style.overflow = 'auto'
  }

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-gray-300">
              A collection of photography and graphic design work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="cursor-pointer"
                  onClick={() => openLightbox(item)}
                >
                  <div className="relative aspect-square bg-gray-100 overflow-hidden group">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      Gallery Image Placeholder
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <p className="text-white font-bold text-lg">{item.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-bold mb-4">No items found</h3>
              <p className="text-gray-600">
                No items found in the selected category. Please try another category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 md:p-10"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white bg-black w-10 h-10 flex items-center justify-center rounded-full z-10"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="aspect-video bg-gray-100 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xl">
                  Gallery Image Placeholder
                </div>
              </div>

              <div className="p-8 bg-white">
                <span className="text-sm font-medium text-gray-500 mb-2 block">
                  {selectedItem.category}
                </span>
                <h2 className="text-2xl font-bold mb-4">{selectedItem.title}</h2>
                <p className="text-gray-600">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
