"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Sparkles, Zap, TrendingUp, Award } from "lucide-react"
import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()

  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(61,26,82,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,53,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(61,26,82,0.1),transparent_50%)]" />
      </div>

      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          x: mousePosition.x / 100,
          y: mousePosition.y / 100,
        }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl"
          style={{ y: y1 }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl"
          style={{ y: y2 }}
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-primary/20 to-secondary/20"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50 - Math.random() * 50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <motion.div className="container mx-auto px-4 pt-32 pb-20 relative z-10" style={{ opacity, scale }}>
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
            >
              <span className="relative text-sm font-semibold px-6 py-3 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 bg-[length:200%_auto] text-foreground rounded-full inline-flex items-center gap-2 overflow-hidden border border-primary/30 shadow-lg shadow-primary/10 animate-gradient">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: [-300, 300] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="relative">Trusted by 5000+ Businesses Worldwide</span>
                <Award className="w-4 h-4 text-primary" />
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <motion.span
                className="block mb-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Transform Your
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
              >
                Business Journey
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              Elevate your brand with cutting-edge{" "}
              <span className="text-primary font-semibold">B2B marketing strategies</span> and dominate online
              marketplaces with our <span className="text-secondary font-semibold">B2C e-commerce solutions</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity animate-pulse-glow" />
                <Button
                  size="lg"
                  className="relative rounded-full gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-6 text-base shadow-xl"
                >
                  <Zap className="w-5 h-5" />
                  <span>Start Your Growth</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full gap-3 bg-background/50 backdrop-blur-sm border-2 px-8 py-6 text-base hover:bg-background/80 hover:border-secondary/50 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 8484099961</span>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              {[
                { value: "5000+", label: "Clients Served", icon: Award, color: "from-primary to-primary/70" },
                { value: "15+", label: "Years Experience", icon: TrendingUp, color: "from-secondary to-secondary/70" },
                { value: "98%", label: "Satisfaction Rate", icon: Sparkles, color: "from-primary to-secondary" },
                { value: "24/7", label: "Support", icon: Zap, color: "from-secondary to-primary" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    delay: 1.5 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="glass-card rounded-2xl p-6 transition-all duration-300 group-hover:shadow-2xl">
                    <motion.div
                      className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.div
                      className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent mb-2"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.7 + index * 0.1, type: "spring" }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.5 },
          y: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      >
        <div className="relative">
          <div className="absolute inset-0 blur-xl bg-gradient-to-b from-primary/50 to-secondary/50 rounded-full animate-pulse" />
          <div className="relative w-8 h-12 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2 bg-background/30 backdrop-blur-sm">
            <motion.div
              className="w-2 h-3 bg-gradient-to-b from-primary to-secondary rounded-full"
              animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
