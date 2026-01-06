"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Sparkles, Zap, Crown } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function PricingB2B() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const plans = [
    {
      name: "Starter",
      icon: Sparkles,
      price: "₹25,000",
      period: "/month",
      description: "Perfect for small businesses starting their B2B marketing journey",
      features: [
        "Telemarketing (50 calls/day)",
        "Basic field marketing support",
        "Email marketing campaigns",
        "Monthly performance reports",
        "Email support",
      ],
      popular: false,
      color: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      name: "Professional",
      icon: Zap,
      price: "₹75,000",
      period: "/month",
      description: "Comprehensive marketing solution for growing businesses",
      features: [
        "Telemarketing (150 calls/day)",
        "Full field marketing team",
        "Brand activation campaigns",
        "Event management (2/month)",
        "Sales support & training",
        "Weekly reports & analytics",
        "Dedicated account manager",
        "24/7 priority support",
      ],
      popular: true,
      color: "from-secondary/10 to-accent/10",
      borderColor: "border-secondary",
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large-scale B2B operations",
      features: [
        "Unlimited telemarketing",
        "Multi-location field marketing",
        "Large-scale brand activations",
        "Recruitment services",
        "Complete sales outsourcing",
        "Custom reporting & BI tools",
        "Dedicated team & manager",
        "White-label solutions",
        "SLA guarantees",
      ],
      popular: false,
      color: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20",
    },
  ]

  return (
    <section id="pricing-b2b" ref={sectionRef} className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

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
            <span className="text-sm font-semibold px-4 py-2 bg-secondary/20 text-secondary rounded-full">
              B2B Marketing Packages
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Flexible Plans for Every Business
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Choose the perfect marketing package that scales with your business needs
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
                >
                  <span className="bg-gradient-to-r from-secondary to-accent text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </motion.div>
              )}

              <Card
                className={`p-8 h-full border-2 ${plan.borderColor} ${plan.popular ? "shadow-2xl" : ""} bg-gradient-to-br ${plan.color} relative overflow-hidden group`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 1 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <plan.icon className="w-6 h-6 text-primary-foreground" />
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
                      className={`w-full mb-6 ${plan.popular ? "bg-gradient-to-r from-secondary to-accent" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Get Started
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
                      >
                        <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                          <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
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
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-muted-foreground mb-4">Need a custom solution?</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="lg" className="rounded-full bg-transparent">
              Contact Sales Team
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
