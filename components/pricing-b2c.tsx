"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Sparkles, TrendingUp, Rocket } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function PricingB2C() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const plans = [
    {
      name: "Launch",
      tagline: "Essential management for new sellers",
      price: "14,999",
      period: "/month",
      description: "Everything you need to launch and establish your brand on top marketplaces",
      features: [
        "1 Marketplace Account (Amazon/Flipkart)",
        "Up to 50 Product Listings",
        "Basic SEO & Keyword Optimization",
        "Catalog Creation & Image Formatting",
        "Basic PPC Setup",
        "Monthly Sales & Performance Report",
        "Standard Email Support",
      ],
      popular: false,
      cta: "Get Started",
      color: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20",
      icon: Sparkles,
    },
    {
      name: "Growth",
      tagline: "Comprehensive expansion across major channels",
      price: "29,999",
      period: "/month",
      description: "Designed for scaling brands aiming for top-tier marketplace positions",
      features: [
        "Up to 3 Marketplace Accounts",
        "Up to 200 Product Listings",
        "Advanced SEO & A+ Content/EBC",
        "PPC Advertising Management",
        "Review & Rating Management",
        "Bi-weekly Reports & Strategy Calls",
        "Dedicated Account Manager",
        "Dispute & Reimbursement Handling",
      ],
      popular: true,
      cta: "Scale Now",
      color: "from-secondary/10 to-accent/10",
      borderColor: "border-secondary/30",
      icon: TrendingUp,
    },
    {
      name: "Dominance",
      tagline: "Full-suite management & aggressive scale",
      price: "49,999",
      period: "/month",
      description: "End-to-end management for established brands seeking maximum market share",
      features: [
        "Unlimited Marketplace Accounts",
        "Unlimited Product Listings",
        "Complete Brand Store Creation",
        "Full Advertising & Campaign Optimization",
        "3D/Infographic Visual Merchandising",
        "Daily Monitoring & Real-time Alerts",
        "Priority 24/7 Dedicated Team",
        "Custom Growth & Expansion Roadmap",
        "Multi-warehouse FBA/FBF Strategy",
      ],
      popular: false,
      cta: "Contact Us",
      color: "from-violet-500/10 to-fuchsia-500/10",
      borderColor: "border-violet-500/20",
      icon: Rocket,
    },
  ]

  const marketplaces = [
    { name: "Amazon", logo: "/images/marketplaces/amazon.svg" },
    { name: "Flipkart", logo: "/images/marketplaces/flipkart.svg" },
    { name: "Myntra", logo: "/images/marketplaces/myntra.svg" },
    { name: "Nykaa", logo: "/images/marketplaces/nykaa.svg" },
    { name: "Meesho", logo: "/images/marketplaces/meesho.svg" },
    { name: "Ajio", logo: "/images/marketplaces/ajio.svg" },
  ]

  return (
    <section id="pricing-b2c" ref={sectionRef} className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
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
                  transition={{ delay: 0.5 }}
                >
                  <span className="bg-gradient-to-r from-accent to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    Most Popular
                  </span>
                </motion.div>
              )}

              <Card
                className={`p-8 h-full flex flex-col justify-between relative overflow-hidden bg-card transition-all duration-300 ${
                  plan.popular ? "border-2 border-accent shadow-xl shadow-accent/10" : "border-border/60 hover:border-border"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${plan.color} ${plan.borderColor} border`}>
                        <plan.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        <p className="text-xs text-muted-foreground">{plan.tagline}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">{plan.description}</p>

                  <div className="mb-6 pb-6 border-b border-border">
                    <span className="text-4xl font-bold">₹{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <a href="/#cta" className="w-full block">
                      <Button
                        className={`w-full mb-6 ${plan.popular ? "bg-gradient-to-r from-accent to-orange-500 text-white" : ""}`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        {plan.cta}
                      </Button>
                    </a>
                  </motion.div>

                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center overflow-hidden mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-center text-muted-foreground mb-6 font-medium">We manage your presence across all major platforms</p>
          <div className="relative w-full overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <motion.div
              className="flex gap-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              {[...marketplaces, ...marketplaces].map((marketplace, idx) => (
                <div
                  key={`${marketplace.name}-${idx}`}
                  className="flex items-center gap-3 px-5 py-2.5 bg-background rounded-full border border-border/80 shadow-sm hover:border-accent transition-colors flex-shrink-0 cursor-pointer"
                >
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <Image
                      src={marketplace.logo}
                      alt={marketplace.name}
                      width={24}
                      height={24}
                      className="object-contain max-h-6"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <span className="font-semibold text-sm whitespace-nowrap">{marketplace.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
