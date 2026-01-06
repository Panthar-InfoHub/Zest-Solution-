"use client"

import { Card } from "@/components/ui/card"
import { ShoppingCart, Store, TrendingUp, CreditCard, Megaphone, Search, FileText, HeadphonesIcon } from "lucide-react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function B2CServices() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const services = [
    {
      icon: ShoppingCart,
      title: "Account Management",
      description: "Comprehensive management across Amazon, Flipkart, Myntra, Nykaa, Ajio, and more.",
      features: ["24/7 Monitoring", "Inventory Management", "Order Processing"],
    },
    {
      icon: Store,
      title: "Platform Onboarding",
      description: "Streamlined onboarding with expert guidance throughout the journey.",
      features: ["Documentation Support", "Quick Setup", "Compliance Handling"],
    },
    {
      icon: TrendingUp,
      title: "Store Setup & Branding",
      description: "Professional store design capturing your unique brand identity.",
      features: ["Brand Store Design", "Visual Merchandising", "Content Strategy"],
    },
    {
      icon: CreditCard,
      title: "Payment Reconciliation",
      description: "Accurate tracking across multiple platforms for financial management.",
      features: ["Payment Tracking", "Dispute Resolution", "Financial Reporting"],
    },
    {
      icon: Megaphone,
      title: "Platform Advertising",
      description: "Strategic campaigns to maximize visibility and sales.",
      features: ["PPC Management", "Campaign Optimization", "ROI Tracking"],
    },
    {
      icon: Search,
      title: "Organic Growth & SEO",
      description: "Comprehensive optimization for improved visibility and rankings.",
      features: ["Keyword Optimization", "Content Enhancement", "Search Rankings"],
    },
    {
      icon: FileText,
      title: "Brand Documentation",
      description: "Expert assistance with documentation and approval processes.",
      features: ["Document Preparation", "Brand Registry", "Approval Support"],
    },
    {
      icon: HeadphonesIcon,
      title: "E-commerce Consultation",
      description: "Professional consultation for business growth and optimization.",
      features: ["Strategy Planning", "Growth Consulting", "Market Analysis"],
    },
  ]

  return (
    <section id="b2c" ref={sectionRef} className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {["🛒", "📦", "💳", "📱", "🎯", "📊"].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-sm font-semibold px-4 py-2 bg-accent/20 text-accent-foreground rounded-full inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            B2C Solutions
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mt-6 mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            E-commerce Excellence
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Unlock your e-commerce potential across all major marketplaces with our comprehensive management and
            optimization services.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <Card className="p-6 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden h-full">
                <motion.div
                  className="absolute inset-0 border-2 border-accent rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 0.3, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  {/* Improved icon visibility with solid orange background */}
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-[#ff6b00] text-white flex items-center justify-center mb-4 shadow-lg"
                    whileHover={{
                      rotate: 360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-7 h-7" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <div className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="text-xs text-muted-foreground flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.1 * index + 0.1 * idx }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="w-1 h-1 rounded-full bg-accent"
                          whileHover={{ scale: 2 }}
                          transition={{ type: "spring" }}
                        />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-sm text-muted-foreground mb-4">Supported Marketplaces</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Amazon", "Flipkart", "Myntra", "Nykaa", "Ajio", "FirstCry", "eBay", "Alibaba"].map((platform, idx) => (
              <motion.span
                key={platform}
                className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 + idx * 0.05 }}
                whileHover={{
                  scale: 1.1,
                  borderColor: "hsl(var(--accent))",
                  backgroundColor: "hsl(var(--accent) / 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {platform}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
