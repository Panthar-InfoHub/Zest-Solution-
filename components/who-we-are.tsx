"use client";

import { motion } from "framer-motion";
import { Users, Award, Clock } from "lucide-react";
import type { Variants } from "framer-motion";

export function WhoWeAre() {
  const stats = [
    {
      value: "1,200+",
      label: "Projects Delivered",
      icon: Award,
      color: "from-blue-500 to-blue-600",
    },
    {
      value: "110+",
      label: "Employees",
      icon: Users,
      color: "from-blue-500 to-blue-600",
    },
    {
      value: "12+",
      label: "Years of Experience",
      icon: Clock,
      color: "from-blue-500 to-blue-600",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(61,26,82,0.08), transparent 50%)",
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Content and Stats */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            variants={itemVariants}
          >
            {/* Heading */}
            <motion.div variants={itemVariants}>
              <motion.h2
                className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Who We{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Are
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                At Zest Solutions, we are your trusted digital growth partner.
                With over a decade of expertise, we provide comprehensive B2B
                and B2C solutions including digital marketing, marketplace
                management, e-commerce optimization, and brand development. Our
                dedicated team of 110+ professionals is committed to delivering
                exceptional results for 1,200+ successful projects worldwide.
              </motion.p>

              <motion.p
                className="text-base text-muted-foreground/80 leading-relaxed mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                We empower businesses of all sizes to achieve their growth
                objectives through innovative strategies, cutting-edge
                technology, and personalized service. From startups to
                enterprises, we're here to transform your vision into measurable
                success.
              </motion.p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity" />

                  <motion.div
                    className="relative bg-card/50 backdrop-blur-md border border-primary/20 rounded-2xl p-8 transition-all"
                    whileHover={{
                      borderColor: "rgba(255, 107, 53, 0.5)",
                    }}
                  >
                    <motion.div
                      className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 20,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        },
                        scale: {
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <stat.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    <motion.div
                      className="text-4xl md:text-5xl font-bold text-center mb-2 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.5 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.div>

                    <p className="text-center text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                      {stat.label}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* YouTube Video */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <motion.div
              className="relative group rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="relative pt-[56.25%] bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&fs=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Badge */}
              <motion.div
                className="absolute top-4 left-4 bg-gradient-to-r from-secondary to-secondary/80 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                About Zest Solutions
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
