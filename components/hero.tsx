"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Sparkles, Zap, TrendingUp, Award } from "lucide-react"
import { useEffect, useMemo } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"

export function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smoothed mouse tracking with spring
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const { scrollY } = useScroll()

  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

  const mouseMoveX = useTransform(springX, (val) => val / 100)
  const mouseMoveY = useTransform(springY, (val) => val / 100)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // Memoize particles to prevent re-creation on any parent re-render
  // Reduced count to 18 for better performance
  const particles = useMemo(() => [...Array(18)].map((_, i) => ({
    width: Math.random() * 6 + 2,
    height: Math.random() * 6 + 2,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 4 + Math.random() * 4,
    delay: Math.random() * 2,
    yMove: -50 - Math.random() * 50,
    xMove: Math.random() * 30 - 15,
  })), [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Gradients - Simplified for rendering speed */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(61,26,82,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,53,0.1),transparent_55%)]" />
      </div>

      {/* Floating Background Elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform"
        style={{
          x: mouseMoveX,
          y: mouseMoveY,
        }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-[100px] will-change-transform"
          style={{ y: y1 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-secondary/15 to-primary/15 rounded-full blur-[120px] will-change-transform"
          style={{ y: y2 }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 will-change-transform"
            style={{
              width: p.width,
              height: p.height,
              left: p.left,
              top: p.top,
            }}
            animate={{
              y: [0, p.yMove, 0],
              x: [0, p.xMove, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tagline */}
            <motion.div
              className="inline-block mb-4 sm:mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            >
              <span className="relative text-xs sm:text-sm font-semibold px-3 sm:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-md text-foreground rounded-full inline-flex items-center gap-1 sm:gap-2 border border-primary/20 shadow-md">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                <span>Trusted by 5000+ Businesses Worldwide</span>
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="mb-4 sm:mb-6 md:mb-8 overflow-hidden">
              <motion.h1
                className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="block text-foreground/90">Transform Your</span>
                <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Business Journey
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-2xl text-muted-foreground mb-6 sm:mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Elevate your brand with cutting-edge{" "}
              <span className="text-primary font-semibold">B2B marketing strategies</span> and dominate online
              marketplaces with our <span className="text-secondary font-semibold">B2C e-commerce solutions</span>
            </motion.p>

            {/* Actions */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-8 sm:mb-12 md:mb-16 px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative group w-full sm:w-auto">
                <Button
                  size="lg"
                  className="rounded-full gap-2 bg-primary text-white px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-base shadow-lg w-full sm:w-auto"
                >
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Start Your Growth</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full gap-2 sm:gap-3 px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-base hover:bg-muted w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>+91 8484099961</span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto px-2">
              {[
                { value: "5000+", label: "Clients Served", icon: Award, color: "from-primary to-primary/80" },
                { value: "15+", label: "Years Experience", icon: TrendingUp, color: "from-secondary to-secondary/80" },
                { value: "98%", label: "Satisfaction", icon: Sparkles, color: "from-primary to-secondary" },
                { value: "24/7", label: "Support", icon: Zap, color: "from-secondary to-primary" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="glass-card rounded-xl p-3 sm:p-4 md:p-6 border border-border/50 bg-white/5 backdrop-blur-sm"
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="text-xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center p-1 bg-white/5 backdrop-blur-sm">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
