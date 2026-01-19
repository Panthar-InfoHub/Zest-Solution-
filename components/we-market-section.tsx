"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"
import { PenTool, Share2, Search, TrendingUp, ArrowRight } from "lucide-react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Variants } from "framer-motion"

export function WeMarketSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const services = [
    {
      icon: PenTool,
      title: "Content Writing Services",
      description: "Professional content creation across blogs, articles, and web copy.",
      color: "from-pink-500 to-pink-600",
      slug: "article-writing-rewriting",
      items: [
        "Article Writing",
        "Blog Writing",
        "Web Content",
        "Press Releases",
        "Company Profiles",
        "Travel Writing",
        "Review Writing",
      ],
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build brand presence and engage audiences across all social platforms.",
      color: "from-blue-500 to-blue-600",
      slug: "social-media-marketing",
      items: [
        "Social Media Marketing",
        "SMO Services",
        "Instagram Ads",
        "Facebook Ads",
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing solutions to drive growth and conversions.",
      color: "from-orange-500 to-orange-600",
      slug: "search-engine-optimization-company",
      items: [
        "SEO Services",
        "Affiliate Marketing",
        "PPC Campaigns",
        "Email Marketing",
      ],
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Expert SEO services to boost your online visibility and rankings.",
      color: "from-purple-500 to-purple-600",
      slug: "on-page-optimization",
      items: [
        "On-Page Optimization",
        "Off-Page Optimization",
        "Technical SEO",
        "Local SEO",
      ],
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
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            We Market
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto text-pretty">
            Drive growth with our comprehensive marketing and content solutions designed to boost your online presence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <Link href={`/services/${service.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group overflow-hidden">
                    <div className="p-6 sm:p-8 h-full flex flex-col">
                      {/* Icon with gradient background */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className={`inline-flex w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${service.color} items-center justify-center mb-4 text-white`}
                      >
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-foreground/70 mb-4 flex-grow">
                        {service.description}
                      </p>

                      {/* Service Items */}
                      {/* <div className="space-y-1 mb-4">
                        {service.items.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-foreground/70">{item}</span>
                          </div>
                        ))}
                      </div> */}

                      {/* CTA */}
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-2 text-accent font-semibold text-sm sm:text-base"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-base sm:text-lg text-foreground/70 mb-6">
            Ready to accelerate your marketing strategy?
          </p>
          <Link href="#cta">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors"
            >
              Get Started Today
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
