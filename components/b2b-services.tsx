"use client"

import { Card } from "@/components/ui/card"
import { Megaphone, Users, TrendingUp, Calendar, Target, Phone, BarChart3, Radio } from "lucide-react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function B2BServices() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const services = [
    {
      icon: Megaphone,
      title: "Marketing",
      description: "Wide range of marketing services to help you reach your target customers effectively.",
    },
    {
      icon: TrendingUp,
      title: "Sales",
      description: "Develop and manage complete sales channels on behalf of clients with expert teams.",
    },
    {
      icon: Target,
      title: "Brand Activation",
      description: "Create immediate positive impact on your brand with strategic promotion campaigns.",
    },
    {
      icon: Users,
      title: "Recruitment",
      description: "Expert training and dedicated resources for diversity-empowered recruitment solutions.",
    },
    {
      icon: Radio,
      title: "Advertising",
      description: "Amazing advertising experiences and stands that help you grow your business.",
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "SEO, pay-per-click, and video ads to get your business noticed online.",
    },
    {
      icon: Calendar,
      title: "Events & Exhibition",
      description: "Complete event staffing and management services from start to finish.",
    },
    {
      icon: Phone,
      title: "Telemarketing",
      description: "Collaborative team-based approach to optimize operational efficiencies.",
    },
  ]

  return (
    <section id="b2b" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-sm font-semibold px-4 py-2 bg-secondary/10 text-secondary rounded-full inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            B2B Solutions
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mt-6 mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Enterprise Marketing Services
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Comprehensive B2B marketing solutions that connect you with your business customers through strategic
            offline and digital channels.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6, type: "spring" }}
              whileHover={{ y: -10, scale: 1.03 }}
              style={{ perspective: 1000 }}
            >
              <Card className="p-6 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden h-full">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0, borderRadius: "100%" }}
                  whileHover={{ scale: 2, borderRadius: "0%" }}
                  transition={{ duration: 0.6 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-secondary/20 to-transparent rounded-bl-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
