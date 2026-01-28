"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We dive deep to understand your business goals, target audience, and unique challenges.",
    },
    {
      number: "02",
      title: "Planning & Setup",
      description: "Develop comprehensive roadmap with clear milestones, KPIs, and resource allocation.",
    },
    {
      number: "03",
      title: "Execution & Launch",
      description: "Implement strategies with precision, ensuring quality delivery across all touchpoints.",
    },
    {
      number: "04",
      title: "Optimize & Scale",
      description: "Continuous monitoring, testing, and optimization to maximize results and growth.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <motion.div
        className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our Proven Process
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed px-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A systematic approach that transforms strategy into results. We follow a clear, collaborative process to
            ensure your success.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.2 * index, duration: 0.6, type: "spring" }}
                whileHover={{ y: -15, scale: 1.05 }}
              >
                <Card className="p-4 sm:p-5 md:p-6 h-full hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary/20 mb-2 sm:mb-3 md:mb-4"
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.8, type: "spring" }}
                      whileHover={{ scale: 1.2, rotate: 10, color: "hsl(var(--secondary))" }}
                    >
                      {step.number}
                    </motion.div>
                    <motion.h3
                      className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-secondary transition-colors line-clamp-2"
                      whileHover={{ x: 5 }}
                    >
                      {step.title}
                    </motion.h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: "left" }}
                  />
                </Card>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-1/2 -right-2 md:-right-3 transform -translate-y-1/2 z-10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                >
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                  >
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                  </motion.div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
