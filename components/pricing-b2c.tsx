"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, ShoppingCart, TrendingUp, Rocket } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function PricingB2C() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const plans = [
    {
      name: "Launch",
      icon: ShoppingCart,
      price: "₹15,000",
      period: "/month",
      description: "Ideal for brands starting their e-commerce journey",
      features: [
        "Account setup (1 marketplace)",
        "Product listing (up to 50)",
        "Basic SEO optimization",
        "Monthly sales report",
        "Email support",
      ],
      popular: false,
      color: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20",
    },
    {
      name: "Growth",
      icon: TrendingUp,
      price: "₹45,000",
      period: "/month",
      description: "Complete marketplace management for scaling brands",
      features: [
        "Multi-marketplace management (3+)",
        "Unlimited product listings",
        "Advanced SEO & A+ content",
        "PPC campaign management",
        "Inventory management",
        "Payment reconciliation",
        "Bi-weekly performance reports",
        "Dedicated account manager",
      ],
      popular: true,
      color: "from-accent/10 to-orange-500/10",
      borderColor: "border-accent",
    },
    {
      name: "Dominate",
      icon: Rocket,
      price: "₹1,25,000",
      period: "/month",
      description: "Full-service solution for market leaders",
      features: [
        "All major marketplaces",
        "Premium brand stores",
        "Full-scale advertising",
        "Advanced analytics & BI",
        "Customer service management",
        "Returns & logistics support",
        "Competitor analysis",
        "International expansion support",
        "White-label reporting",
        "Dedicated team",
      ],
      popular: false,
      color: "from-violet-500/10 to-fuchsia-500/10",
      borderColor: "border-violet-500/20",
    },
  ]

  const marketplaces = [
    { name: "Amazon", logo: "🛒" },
    { name: "Flipkart", logo: "🛍️" },
    { name: "Myntra", logo: "👕" },
    { name: "Nykaa", logo: "💄" },
    { name: "Meesho", logo: "📱" },
    { name: "Ajio", logo: "👗" },
  ]

  return (
    <section id="pricing-b2c" ref={sectionRef} className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {marketplaces.map((marketplace, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          >
            {marketplace.logo}
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
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-sm font-semibold px-4 py-2 bg-[#ff6b00] text-white rounded-full shadow-lg">
              B2C E-commerce Packages
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Scale Your E-commerce Business
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            From startup to market leader - we've got the perfect package for your growth stage
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative"
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="bg-gradient-to-r from-accent to-orange-500 text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    Best Value
                  </span>
                </motion.div>
              )}

              <Card
                className={`p-8 h-full border-2 ${plan.borderColor} ${plan.popular ? "shadow-2xl" : ""} bg-gradient-to-br ${plan.color} relative overflow-hidden group`}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(60deg, transparent, ${plan.popular ? "rgba(255,107,0,0.1)" : "rgba(100,100,255,0.1)"}, transparent)`,
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff6b00] to-[#ff8c00] flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <plan.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6 h-12">{plan.description}</p>

                  <div className="mb-6">
                    <motion.span
                      className="text-4xl font-bold"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    >
                      {plan.price}
                    </motion.span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      className={`w-full mb-6 ${plan.popular ? "bg-gradient-to-r from-accent to-orange-500" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Start Selling
                    </Button>
                  </motion.div>

                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.7 + index * 0.1 + idx * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        </motion.div>
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-center text-muted-foreground mb-6">We manage your presence across all major platforms</p>
          <div className="flex flex-wrap justify-center gap-6">
            {marketplaces.map((marketplace, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-border"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + idx * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <span className="text-2xl">{marketplace.logo}</span>
                <span className="font-medium">{marketplace.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
