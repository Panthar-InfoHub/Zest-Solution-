"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ShoppingCart, Package, Store, Briefcase, ImageIcon, Users, ArrowRight } from "lucide-react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Variants } from "framer-motion"

export function WeManageSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const services = [
    {
      icon: ShoppingCart,
      title: "Data Entry Services",
      description: "Accurate and efficient data entry solutions for businesses of all sizes.",
      color: "from-teal-500 to-teal-600",
      slug: "online-data-entry-services",
      items: [
        "Online Data Entry",
        "Offline Data Entry",
        "Image Data Entry",
        "Data Capture Service",
      ],
    },
    {
      icon: Package,
      title: "E-commerce Platforms",
      description: "Complete product listing and catalog management across all major platforms.",
      color: "from-blue-500 to-blue-600",
      slug: "product-upload-listing-services",
      items: [
        "Product Upload Listing",
        "Catalog Management",
        "Shopify Optimization",
        "WooCommerce Setup",
      ],
    },
    {
      icon: Store,
      title: "Marketplaces",
      description: "Expert management for Amazon, eBay, Walmart, Etsy, and more.",
      color: "from-pink-500 to-pink-600",
      slug: "amazon-marketplace",
      items: ["Amazon", "eBay", "Walmart", "Etsy", "Souq"],
    },
    {
      icon: Briefcase,
      title: "Amazon Management",
      description: "Specialized Amazon selling solutions including listings, SEO, and PPC.",
      color: "from-rose-500 to-rose-600",
      slug: "amazon-listing-creation-services",
      items: [
        "Listing Creation",
        "Product Optimization",
        "Amazon SEO",
        "PPC Management",
      ],
    },
    {
      icon: ImageIcon,
      title: "Image Editing",
      description: "Professional image retouching and editing services for product photos.",
      color: "from-purple-500 to-purple-600",
      slug: "image-retouching",
      items: [
        "Image Retouching",
        "Image Restoration",
        "Image Manipulation",
        "Watermark Removal",
      ],
    },
    {
      icon: Users,
      title: "Virtual Assistant",
      description: "24/7 virtual assistant support for your e-commerce store.",
      color: "from-orange-500 to-orange-600",
      slug: "chat-support",
      items: ["Chat Support", "Email Support", "Customer Service", "Order Management"],
    },
  ]

  const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

  const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
}

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(var(--secondary)) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
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
            Our Expertise
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mt-6 mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            What We <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Manage</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Comprehensive management services across data entry, e-commerce platforms, marketplaces, and more. We handle the complexity so you can focus on growth.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }}>
                <Link href={`/services/${service.slug}`}>
                  <Card className="p-6 h-full hover:shadow-2xl transition-all duration-500 group relative overflow-hidden cursor-pointer">
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-4 shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="w-7 h-7" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

                      {/* Service items */}
                      <div className="space-y-1.5 mb-4">
                        {service.items.map((item, idx) => (
                          <motion.div
                            key={idx}
                            className="text-xs text-muted-foreground flex items-center gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.1 * index + 0.05 * idx }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.div
                              className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"
                              whileHover={{ scale: 2 }}
                            />
                            <span className="truncate">{item}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Arrow */}
                      <motion.div
                        className="flex items-center gap-2 text-secondary font-semibold text-sm group-hover:gap-3 transition-all"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 + index * 0.05 }}
                      >
                        <span>Learn More</span>
                        <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Hover corner decoration */}
                    <motion.div
                      className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.color} rounded-bl-full opacity-0 group-hover:opacity-5 transition-opacity`}
                    />
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-muted-foreground mb-4">Need help with a specific service?</p>
          <Link href="#cta">
            <motion.button
              className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
