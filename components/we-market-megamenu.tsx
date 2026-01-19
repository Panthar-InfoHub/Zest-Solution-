"use client"

import React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { BookOpen, Facebook, BarChart3, Megaphone } from "lucide-react"

interface MegamenuProps {
  isOpen: boolean
}

interface MenuItem {
  title: string
  slug: string
}

interface MenuSection {
  icon: React.ComponentType<any>
  title: string
  color: string
  items: MenuItem[]
}

export function WeMarketMegamenu({ isOpen }: MegamenuProps) {
  const menuSections: MenuSection[] = [
    {
      icon: BookOpen,
      title: "Content Writing Services",
      color: "text-pink-500",
      items: [
        { title: "Article Writing & Rewriting", slug: "article-writing-rewriting" },
        { title: "Blog Writing Services", slug: "blog-writing-services" },
        { title: "Web Content Writing", slug: "web-content-writing" },
        { title: "Press Release Writing", slug: "press-release-writing" },
        { title: "Company Profile Writing", slug: "company-profile-writing" },
        { title: "Travel Writing", slug: "travel-writing" },
        { title: "Review Writing", slug: "review-writing" },
      ],
    },
    {
      icon: Facebook,
      title: "Social Media",
      color: "text-blue-500",
      items: [
        { title: "Social Media Marketing", slug: "social-media-marketing" },
        { title: "SMO Services", slug: "smo-services" },
        { title: "Instagram Ads", slug: "instagram-ads" },
        { title: "Facebook Ads", slug: "facebook-ads" },
      ],
    },
    {
      icon: BarChart3,
      title: "Search Engine Optimization",
      color: "text-purple-500",
      items: [
        { title: "On Page Optimization", slug: "on-page-optimization" },
        { title: "Off Page Optimization Services", slug: "off-page-optimization-services" },
      ],
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      color: "text-orange-500",
      items: [
        { title: "Search Engine Optimization Company", slug: "search-engine-optimization-company" },
        { title: "Affiliate Marketing Services", slug: "affiliate-marketing-services" },
      ],
    },
  ]

  // Organize sections into 3 columns
  const columns = [
    [menuSections[0]], // Column 1: Content Writing Services
    [menuSections[1], menuSections[2]], // Column 2: Social Media + SEO
    [menuSections[3]], // Column 3: Digital Marketing
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className={`fixed top-16 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-2xl overflow-x-hidden max-w-7xl w-[calc(100%-2rem)] z-40 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {columns.map((column, colIdx) => (
            <div key={colIdx} className="space-y-4 lg:space-y-6">
              {column.map((section, sectionIdx) => {
                const IconComponent = section.icon
                return (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, delay: (colIdx * 0.1) + (sectionIdx * 0.05) }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2 pb-2 border-b border-accent/40">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <IconComponent className={`w-5 h-5 ${section.color}`} />
                      </motion.div>
                      <h3 className="font-bold text-foreground text-sm">{section.title}</h3>
                    </div>

                    <ul className="space-y-1.5">
                      {section.items.map((item, itemIdx) => (
                        <motion.li
                          key={item.slug}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.2, delay: (colIdx * 0.1) + (sectionIdx * 0.05) + (itemIdx * 0.01) }}
                        >
                          <Link
                            href={`/services/${item.slug}`}
                            className="text-xs text-foreground/70 hover:text-accent transition-colors flex items-center gap-2 group"
                          >
                            <span className="w-1 h-1 rounded-full bg-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                            <span className="group-hover:translate-x-0.5 transition-transform">{item.title}</span>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
