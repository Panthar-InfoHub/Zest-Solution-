"use client"

import { Service } from "@/lib/services-data"
import { motion } from "framer-motion"

interface ServiceStepsProps {
  service: Service
}

export function ServiceSteps({ service }: ServiceStepsProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground">
              How We Work
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Our proven process ensures quality delivery and customer satisfaction at every step
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connector line */}
                {idx < service.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-secondary/50 to-transparent" />
                )}

                <div className="bg-background border border-border rounded-lg p-6 relative z-10">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white font-bold mb-4 mx-auto">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground/70 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
