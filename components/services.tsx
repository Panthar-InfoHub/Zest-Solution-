"use client"

import { Card } from "@/components/ui/card"
import { Building2, ShoppingBag } from "lucide-react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
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
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Dual Power Solutions
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            One partner for all your business needs. Whether you're selling to businesses or consumers, we have the
            expertise to help you succeed.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Building2,
              title: "B2B Marketing Services",
              description:
                "Strategic marketing, sales, brand activation, recruitment, and offline advertising solutions for enterprise clients.",
              features: ["Telemarketing", "Field Marketing", "Brand Promotions", "Event Management"],
              color: "bg-secondary/10 text-secondary",
              delay: 0,
            },
            {
              icon: ShoppingBag,
              title: "B2C E-commerce Solutions",
              description:
                "Complete marketplace management across Amazon, Flipkart, Myntra, Nykaa, and more for consumer brands.",
              features: ["Account Management", "SEO Optimization", "Advertising", "Payment Reconciliation"],
              color: "bg-accent/10 text-accent-foreground",
              delay: 0.2,
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: service.delay, duration: 0.8 }}
              whileHover={{ y: -10 }}
            >
              <Card className="p-8 hover:shadow-xl transition-all duration-500 group relative overflow-hidden h-full">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId={`card-bg-${index}`}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl ${index === 0 ? "bg-[#3d1e52] text-white" : "bg-[#ff6b00] text-white"} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <motion.span
                        key={idx}
                        className="text-xs px-3 py-1 bg-muted rounded-full font-medium hover:bg-secondary/20 transition-colors cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: service.delay + 0.1 * idx }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
