"use client"

import { Service } from "@/lib/services-data"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

interface ServiceDescriptionProps {
  service: Service
}

export function ServiceDescription({ service }: ServiceDescriptionProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12 lg:space-y-16"
        >
          {/* What We Offer */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-6">
                What We Offer
              </h2>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="space-y-4">
              {service.whatWeOffer.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start"
                >
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-muted/50 rounded-lg p-8 lg:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-8">
              Why Choose Zest Solution?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {service.whyChooseUs.map((reason, idx) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-lg p-4 border border-border"
                >
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {reason}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
