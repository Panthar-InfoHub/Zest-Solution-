"use client"

import { Card } from "@/components/ui/card"
import { Target, Award, LineChart, Users } from "lucide-react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const reasons = [
    {
      icon: Target,
      title: "Strategic Approach",
      description:
        "Holistic approach to campaigns ensuring targeted messages across best-performing channels with ongoing strategic planning.",
    },
    {
      icon: Award,
      title: "Proven Experience",
      description:
        "Team of analysts with up-to-date technology and industry trends ensuring greatest ROI from your marketing investment.",
    },
    {
      icon: LineChart,
      title: "Data-Driven Results",
      description:
        "Clear, measurable results with key performance metrics tracking. Average 3x revenue growth for our clients.",
    },
    {
      icon: Users,
      title: "One-Stop Solution",
      description: "Complete B2B and B2C solutions under one roof. Better leads, more customers, and bigger profits.",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(var(--secondary) / 0.2) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Why Partner With Us?
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We combine strategic thinking, proven experience, and cutting-edge technology to deliver exceptional results
            for both B2B and B2C clients.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 * index, duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -1 : 1 }}
            >
              <Card className="p-8 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden h-full">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%", y: "-100%" }}
                  whileHover={{ x: "0%", y: "0%" }}
                  transition={{ duration: 0.6 }}
                />

                <div className="flex items-start gap-4 relative z-10">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 relative"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      backgroundColor: "hsl(var(--secondary) / 0.2)",
                    }}
                    transition={{ duration: 0.8, type: "spring" }}
                  >
                    <reason.icon className="w-7 h-7" />
                    <motion.div
                      className="absolute inset-0 rounded-xl border-2 border-secondary"
                      initial={{ scale: 1, opacity: 0.5 }}
                      whileHover={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                  <div>
                    <motion.h3
                      className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {reason.title}
                    </motion.h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-secondary/10 to-transparent rounded-tl-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
