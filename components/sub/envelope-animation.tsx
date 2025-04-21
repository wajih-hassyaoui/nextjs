"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"

export default function EnvelopeAnimation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative w-full max-w-md mx-auto cursor-pointer"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="aspect-[4/3] relative">
        {/* Envelope body */}
        <div className="absolute inset-0 bg-teal-600 rounded-lg shadow-lg overflow-hidden">
          {/* Envelope content */}
          <motion.div
            className="absolute inset-x-0 top-0 bottom-0 bg-white rounded-b-lg p-6 flex items-center justify-center"
            initial={{ y: 0 }}
            animate={{ y: isOpen ? 0 : "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-teal-600" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Get in Touch</h3>
              <p className="text-gray-600">We'd love to hear from you!</p>
            </div>
          </motion.div>

          {/* Envelope flap */}
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-teal-500 origin-top z-10"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            }}
            initial={{ rotateX: 0 }}
            animate={{ rotateX: isOpen ? -180 : 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          />

          {/* Envelope back flap (visible when open) */}
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-teal-700 origin-top"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              backfaceVisibility: "hidden",
            }}
            initial={{ rotateX: 180 }}
            animate={{ rotateX: isOpen ? 0 : 180 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          />

          {/* Side flaps (decorative) */}
          <div className="absolute inset-y-0 left-0 w-[10%] bg-teal-700 transform -skew-y-6 origin-top-left" />
          <div className="absolute inset-y-0 right-0 w-[10%] bg-teal-700 transform skew-y-6 origin-top-right" />

          {/* Bottom flap */}
          <div className="absolute inset-x-0 bottom-0 h-[10%] bg-teal-700 rounded-b-lg" />
        </div>
      </div>
    </div>
  )
}
