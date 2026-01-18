"use client"

import { Service } from "@/lib/services-data"
import { motion } from "framer-motion"

interface ServiceHeroProps {
  service: Service
}

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <div className="relative bg-gradient-to-r from-secondary to-orange-400 min-h-[400px] flex items-center justify-between px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heading">
            {service.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-xl leading-relaxed">
            {service.heroDescription}
          </p>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <span>/</span>
            <a href="/" className="hover:text-white transition-colors">
              Services
            </a>
            <span>/</span>
            <span>{service.title}</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden lg:flex w-1/2 justify-end"
      >
        <div className="relative w-80 h-80 rounded-2xl overflow-hidden bg-white/10 border border-white/20 p-4">
          <img
            src={service.heroImage || "/placeholder.svg"}
            alt={service.title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </motion.div>
    </div>
  )
}
