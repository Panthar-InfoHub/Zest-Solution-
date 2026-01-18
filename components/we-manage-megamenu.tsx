"use client"

import React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { ShoppingCart, Package, Store, Briefcase, ImageIcon, Users } from "lucide-react"

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

export function WeManageMegamenu({ isOpen }: MegamenuProps) {
  const menuSections: MenuSection[] = [
    {
      icon: ShoppingCart,
      title: "Data Entry Services",
      color: "text-teal-500",
      items: [
        { title: "Online Data Entry Services", slug: "online-data-entry-services" },
        { title: "Offline Data Entry Services", slug: "offline-data-entry-services" },
        { title: "Image Data Entry Services", slug: "image-data-entry-services" },
        { title: "Data Capture Service", slug: "data-capture-service" },
      ],
    },
    {
      icon: Package,
      title: "e commerce platforms",
      color: "text-blue-500",
      items: [
        { title: "Product Upload Listing Services", slug: "product-upload-listing-services" },
        {
          title: "Ecommerce Product Listing services",
          slug: "ecommerce-product-listing-services",
        },
        { title: "catalog management services", slug: "catalog-management-services" },
        { title: "catalog processing services", slug: "catalog-processing-services" },
        { title: "Magento Product Upload Services", slug: "magento-product-upload-services" },
        { title: "Shopify Product Listing", slug: "shopify-product-listing" },
        { title: "WooCommerce Product Upload", slug: "woocommerce-product-upload" },
        { title: "BigCommerce Product Listing", slug: "bigcommerce-product-listing" },
        { title: "opencart product listing", slug: "opencart-product-listing" },
        { title: "Volusion product listing", slug: "volusion-product-listing" },
        { title: "3dcart product listing", slug: "3dcart-product-listing" },
      ],
    },
    {
      icon: Store,
      title: "Marketplaces",
      color: "text-pink-500",
      items: [
        { title: "Amazon", slug: "amazon-marketplace" },
        { title: "Ebay", slug: "ebay-marketplace" },
        { title: "walmart", slug: "walmart-marketplace" },
        { title: "etsy", slug: "etsy-marketplace" },
        { title: "souq", slug: "souq-marketplace" },
      ],
    },
    {
      icon: Briefcase,
      title: "Amazon Management",
      color: "text-pink-500",
      items: [
        { title: "amazon listing creation services", slug: "amazon-listing-creation-services" },
        {
          title: "Amazon Product Listing Optimization Services",
          slug: "amazon-product-listing-optimization-services",
        },
        { title: "Amazon Seo Services", slug: "amazon-seo-services" },
        { title: "Amazon Listing Services", slug: "amazon-listing-services" },
        { title: "Amazon Specialists", slug: "amazon-specialists" },
        { title: "Amazon PPC Agency", slug: "amazon-ppc-agency" },
      ],
    },
    {
      icon: ImageIcon,
      title: "Image Editing",
      color: "text-purple-500",
      items: [
        { title: "Image Retouching", slug: "image-retouching" },
        { title: "Image Restoration", slug: "image-restoration" },
        { title: "Image Manipulation", slug: "image-manipulation" },
        { title: "Watermark Removal", slug: "watermark-removal" },
        { title: "Add Watermark", slug: "add-watermark" },
      ],
    },
    {
      icon: Users,
      title: "Virtual Assistant For eCommerce Store",
      color: "text-orange-500",
      items: [
        { title: "Chat Support", slug: "chat-support" },
        { title: "Email Support", slug: "email-support" },
      ],
    },
  ]

  // Organize sections into 3 columns with 2 sections each
  const columns = [
    [menuSections[0], menuSections[3]], // Column 1: Data Entry + Amazon Management
    [menuSections[1], menuSections[5]], // Column 2: e-commerce platforms + Virtual Assistant
    [menuSections[2], menuSections[4]], // Column 3: Marketplaces + Image Editing
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className={`fixed top-16 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-2xl overflow-x-hidden max-w-7xl w-[calc(100%-2rem)] ${
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
