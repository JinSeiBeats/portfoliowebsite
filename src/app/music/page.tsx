'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

// Music data
const musicTracks = [
  {
    id: 1,
    title: 'Ambient Reflections',
    description: 'A calm ambient piece with atmospheric textures and subtle piano melodies.',
    duration: '4:32',
    genre: 'Ambient',
    year: '2023',
    audioSrc: '/placeholder.svg',
  },
  {
    id: 2,
    title: 'Urban Rhythm',
    description: 'Electronic beats with urban soundscapes and synth layers.',
    duration: '3:45',
    genre: 'Electronic',
    year: '2023',
    audioSrc: '/placeholder.svg',
  },
  {
    id: 3,
    title: 'Midnight Jazz',
    description: 'Smooth jazz composition with saxophone and piano improvisation.',
    duration: '5:18',
    genre: 'Jazz',
    year: '2022',
    audioSrc: '/placeholder.svg',
  },
  {
    id: 4,
    title: 'Cinematic Journey',
    description: 'Orchestral composition with dramatic dynamics and emotional themes.',
    duration: '6:24',
    genre: 'Cinematic',
    year: '2022',
    audioSrc: '/placeholder.svg',
  },
  {
    id: 5,
    title: 'Acoustic Memories',
    description: 'Intimate acoustic guitar piece with minimalist arrangement.',
    duration: '3:56',
    genre: 'Acoustic',
    year: '2021',
    audioSrc: '/placeholder.svg',
  },
  {
    id: 6,
    title: 'Electronic Pulse',
    description: 'Energetic electronic track with driving beats and synthesizer arpeggios.',
    duration: '4:12',
    genre: 'Electronic',
    year: '2021',
    audioSrc: '/placeholder.svg',
  },
]

// Custom audio player component
function AudioPlayer({ track }: { track: typeof musicTracks[0] }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value)
    setCurrentTime(newTime)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  return (
    <div className="bg-white border border-gray-200 p-6">
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">{track.title}</h3>
        <p className="text-gray-600 mb-2">{track.description}</p>
        <div className="flex text-sm text-gray-500 space-x-4">
          <span>{track.genre}</span>
          <span>{track.year}</span>
          <span>{track.duration}</span>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <audio
          ref={audioRef}
          src={track.audioSrc}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          className="hidden"
        />

        <div className="flex items-center space-x-4">
          <button
            onClick={togglePlay}
            className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full focus:outline-none hover:bg-gray-800 transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            )}
          </button>

          <div className="flex-1 flex items-center space-x-2">
            <span className="text-sm w-10">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="flex-1 h-1 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black"
            />
            <span className="text-sm w-10">{formatTime(duration || 0)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Music() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Music</h1>
            <p className="text-xl text-gray-300">
              A collection of original music compositions and productions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Music Tracks */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {musicTracks.map((track, index) => (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AudioPlayer track={track} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Music Background */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">About My Music</h2>
              <p>
                My approach to music production combines traditional composition techniques with 
                modern electronic production. I focus on creating atmospheric soundscapes that 
                evoke emotion and tell a story through sound.
              </p>
              <p>
                Each track is carefully crafted with attention to detail in sound design, 
                mixing, and mastering to create a professional and immersive listening experience.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-[400px] w-full"
            >
              <div className="absolute top-0 left-0 w-4/5 h-4/5 bg-gray-800 z-0"></div>
              <div className="absolute bottom-0 right-0 w-4/5 h-4/5 bg-gray-700 z-10">
                <div className="relative w-full h-full">
                  {/* Replace with your actual image */}
                  <div className="absolute inset-0 flex items-center justify-center text-white text-xl">
                    Music Studio Image Placeholder
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
