"use client"

import { Service } from "@/lib/services-data"
import { motion } from "framer-motion"
import { SITE_CONFIG } from "@/lib/constants"
import { Phone, Mail, Clock, ArrowRight, ShieldCheck } from "lucide-react"

interface ServiceHeroProps {
  service: Service
}

export function ServiceHero({ service }: ServiceHeroProps) {
  const isChatSupport = service.slug === "chat-support"
  const isEmailSupport = service.slug === "email-support"
  const isContactCard = isChatSupport || isEmailSupport

  return (
    <div className="relative bg-gradient-to-r from-secondary to-orange-400 min-h-[400px] flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 pt-28 pb-12 gap-8">
      <div className="w-full lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-6"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white font-heading">
            {service.heroTitle}
          </h1>
          <p className="text-base sm:text-xl text-white/90 max-w-xl leading-relaxed">
            {service.heroDescription}
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-white/80">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <span>/</span>
            <a href="/" className="hover:text-white transition-colors">
              Services
            </a>
            <span>/</span>
            <span className="font-semibold text-white">{service.title}</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full lg:w-1/2 flex justify-center lg:justify-end"
      >
        {isContactCard ? (
          <div className="w-full max-w-md bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-6 sm:p-8 shadow-2xl text-white space-y-6">
            <div className="flex items-center gap-3 border-b border-white/20 pb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white shadow-inner flex-shrink-0">
                {isChatSupport ? (
                  <Phone className="w-6 h-6 animate-pulse" />
                ) : (
                  <Mail className="w-6 h-6" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading">
                  {isChatSupport ? "Direct Phone & Chat Support" : "Official Email Support"}
                </h3>
                <p className="text-xs text-white/80">
                  {isChatSupport ? "Available 24/7 for instant assistance" : "Fast response within 1-2 hours"}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Phone Display Box */}
              <a
                href={`tel:+${SITE_CONFIG.phoneRaw}`}
                className="group flex items-center justify-between p-4 rounded-xl bg-white/20 hover:bg-white/30 border border-white/30 transition-all duration-300 shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-white/75 block font-medium">Call Support Line</span>
                    <span className="text-lg sm:text-xl font-bold tracking-wide">{SITE_CONFIG.phoneDisplay}</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>

              {/* Email Display Box */}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="group flex items-center justify-between p-4 rounded-xl bg-white/20 hover:bg-white/30 border border-white/30 transition-all duration-300 shadow-md"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-teal-500 text-white flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs text-white/75 block font-medium">Email Support</span>
                    <span className="text-sm sm:text-base font-bold tracking-wide block truncate">{SITE_CONFIG.email}</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-white/80 border-t border-white/20 pt-4">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-300 flex-shrink-0" /> Dedicated Team
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-300 flex-shrink-0" /> 24/7 Assistance
              </span>
            </div>
          </div>
        ) : (
          <div className="relative w-fit max-w-full rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 p-2 sm:p-3 shadow-2xl">
            <img
              src={service.heroImage || "/placeholder.svg"}
              alt={service.title}
              className="w-auto h-auto max-h-[380px] max-w-full object-contain rounded-xl"
            />
          </div>
        )}
      </motion.div>
    </div>
  )
}

