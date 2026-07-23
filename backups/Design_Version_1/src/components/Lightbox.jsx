import { useState, useEffect, useCallback } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const easePremium = [0.22, 1, 0.36, 1]

export default function Lightbox({ images, currentIndex, onClose }) {
  const [index, setIndex] = useState(currentIndex)

  const prev = useCallback(() => {
    setIndex((i) => (i > 0 ? i - 1 : images.length - 1))
  }, [images.length])

  const next = useCallback(() => {
    setIndex((i) => (i < images.length - 1 ? i + 1 : 0))
  }, [images.length])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: easePremium }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </>
        )}

        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: easePremium }}
          className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[index]}
            alt={`Screenshot ${index + 1}`}
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            loading="eager"
          />
        </motion.div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setIndex(i) }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
