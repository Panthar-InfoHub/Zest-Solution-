"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { BarChart, Package, Search, LayoutGrid, Zap, PieChart } from "lucide-react"

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

export function ToolsMegamenu({ isOpen }: MegamenuProps) {
    const menuSections: MenuSection[] = [
        {
            icon: BarChart,
            title: "Amazon Analytics & Research",
            items: [
                { title: "Jungle Scout", slug: "jungle-scout-tools" },
                { title: "Helium 10", slug: "helium-10-tools" },
                { title: "Viral Launch", slug: "viral-launch" },
                { title: "AMZScout", slug: "amz-scout" },
            ],
        },
        {
            icon: Package,
            title: "Inventory & Seller Tools",
            items: [
                { title: "Seller Central", slug: "seller-central-management" },
                { title: "Keepa", slug: "keepa-tracking" },
                { title: "InventoryLab", slug: "inventory-lab" },
                { title: "FeedbackWhiz", slug: "feedback-whiz" },
            ],
        },
        {
            icon: Search,
            title: "Marketing & SEO Tools",
            items: [
                { title: "SEMrush", slug: "semrush-marketing" },
                { title: "Ahrefs", slug: "ahrefs-seo" },
                { title: "Google Analytics 4", slug: "ga4-tracking" },
                { title: "Canva Pro", slug: "canva-design" },
            ],
        },
        {
            icon: LayoutGrid,
            title: "Platform Connectors",
            items: [
                { title: "Zapier", slug: "zapier-automation" },
                { title: "Make.com", slug: "make-automation" },
                { title: "Supermetrics", slug: "supermetrics-data" },
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
                                                href={`/tools/${item.slug}`}
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
