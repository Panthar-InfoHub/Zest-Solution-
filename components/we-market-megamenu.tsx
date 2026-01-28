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
  items: MenuItem[]
}

export function WeMarketMegamenu({ isOpen }: MegamenuProps) {
  const menuSections: MenuSection[] = [
    {
      icon: BookOpen,
      title: "Content Writing Services",
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
      items: [
        { title: "On Page Optimization", slug: "on-page-optimization" },
        { title: "Off Page Optimization Services", slug: "off-page-optimization-services" },
      ],
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      items: [
        { title: "Search Engine Optimization Company", slug: "search-engine-optimization-company" },
        { title: "Affiliate Marketing Services", slug: "affiliate-marketing-services" },
      ],
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`absolute top-full mt-3
left-1/2 -translate-x-1/2
bg-background border border-border shadow-lg
w-full max-w-4xl
rounded-xl
${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div className="p-6 min-w-max md:min-w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {menuSections.map((section, idx) => {
            const IconComponent = section.icon
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 4 }}
                animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
                transition={{ duration: 0.2, delay: idx * 0.03 }}
                className="flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/50">
                  <IconComponent className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <h3 className="text-xs font-semibold text-orange-500">
                    {section.title}
                  </h3>
                </div>

                <ul className="space-y-2 flex-1">
                  {section.items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/services/${item.slug}`}
                        className="text-xs text-foreground/70 hover:text-foreground transition-colors block py-1"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
