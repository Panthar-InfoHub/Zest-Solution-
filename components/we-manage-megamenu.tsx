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
      color: "text-foreground",
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
      color: "text-foreground",
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
      color: "text-foreground",
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
      color: "text-foreground",
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
      color: "text-foreground",
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
      color: "text-foreground",
      items: [
        { title: "Chat Support", slug: "chat-support" },
        { title: "Email Support", slug: "email-support" },
      ],
    },
  ]

  // Column structure: Column 1: Data Entry + Amazon Management, Column 2: Ecommerce + Image Editing, Column 3: Marketplaces + Virtual Assistant
  const columns = [
    [menuSections[0], menuSections[3]], // Column 1: Data Entry Services + Amazon Management
    [menuSections[1], menuSections[4]], // Column 2: e commerce platforms + Image Editing
    [menuSections[2], menuSections[5]], // Column 3: Marketplaces + Virtual Assistant
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-background border border-border shadow-lg max-w-4xl w-[calc(100vw-4rem)] rounded-lg ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col space-y-6">
              {column.map((section, sectionIdx) => {
                const IconComponent = section.icon
                return (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 4 }}
                    animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
                    transition={{ duration: 0.2, delay: (colIdx * 0.06) + (sectionIdx * 0.03) }}
                    className="flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/50">
                      <IconComponent className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <h3 className="text-xs font-semibold text-orange-500">
                        {section.title}
                      </h3>
                    </div>

                    <ul className="space-y-1.5 flex-1">
                      {section.items.map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={`/services/${item.slug}`}
                            className="text-xs text-foreground/70 hover:text-foreground transition-colors block py-0.5"
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
          ))}
        </div>
      </div>
    </motion.div>
  )
}
