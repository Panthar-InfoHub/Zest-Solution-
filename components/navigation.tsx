"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { WeManageMegamenu } from "./we-manage-megamenu";
import { WeMarketMegamenu } from "./we-market-megamenu";
import { ToolsMegamenu } from "./tools-megamenu";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isManageMegamenuOpen, setIsManageMegamenuOpen] = useState(false);
  const [isMarketMegamenuOpen, setIsMarketMegamenuOpen] = useState(false);
  const [isToolsMegamenuOpen, setIsToolsMegamenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const navRef = useRef<HTMLElement>(null);

  const logoScale = useTransform(scrollY, [0, 100], [1, 0.85]);
  const logoOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Close menus on outside click
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsManageMegamenuOpen(false);
        setIsMarketMegamenuOpen(false);
        setIsToolsMegamenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/", label: "About Us" },
    { href: "#", label: "We Manage" },
    { href: "#", label: "We Market" },
    { href: "#", label: "Tools" },
  ];

  const toggleMegamenu = (label: string) => {
    if (label === "We Manage") {
      setIsManageMegamenuOpen(!isManageMegamenuOpen);
      setIsMarketMegamenuOpen(false);
      setIsToolsMegamenuOpen(false);
    } else if (label === "We Market") {
      setIsMarketMegamenuOpen(!isMarketMegamenuOpen);
      setIsManageMegamenuOpen(false);
      setIsToolsMegamenuOpen(false);
    } else if (label === "Tools") {
      setIsToolsMegamenuOpen(!isToolsMegamenuOpen);
      setIsManageMegamenuOpen(false);
      setIsMarketMegamenuOpen(false);
    } else {
      setIsManageMegamenuOpen(false);
      setIsMarketMegamenuOpen(false);
      setIsToolsMegamenuOpen(false);
    }
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-primary/5"
        : "lg:bg-transparent bg-background"
        }`}
    >
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20 md:h-24">
          <motion.a
            href="#"
            className="flex items-center gap-3 cursor-pointer group"
            style={{ scale: logoScale, opacity: logoOpacity }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => {
              setIsManageMegamenuOpen(false);
              setIsMarketMegamenuOpen(false);
              setIsToolsMegamenuOpen(false);
            }}
          >
            <motion.div
              className="relative w-32 h-12 md:w-40 md:h-14"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Image
                src="/images/zs-20logo.png"
                alt="Zest Solutions"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <motion.span
              className="text-xs text-muted-foreground tracking-wider hidden md:block"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              B2B • B2C Excellence
            </motion.span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 relative">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="group"
              >
                <motion.a
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => {
                    if (link.label === "We Manage" || link.label === "We Market" || link.label === "Tools") {
                      e.preventDefault();
                      toggleMegamenu(link.label);
                    } else {
                      setIsManageMegamenuOpen(false);
                      setIsMarketMegamenuOpen(false);
                      setIsToolsMegamenuOpen(false);
                    }
                  }}
                  className="relative text-base font-semibold text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1 tracking-tight cursor-pointer"
                >
                  {link.label}
                  {(link.label === "We Manage" ||
                    link.label === "We Market" ||
                    link.label === "Tools") && (
                      <motion.div
                        animate={{
                          rotate:
                            (link.label === "We Manage" &&
                              isManageMegamenuOpen) ||
                              (link.label === "We Market" && isMarketMegamenuOpen) ||
                              (link.label === "Tools" && isToolsMegamenuOpen)
                              ? 180
                              : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    )}
                  <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-accent group-hover:w-full transition-all duration-300" />
                </motion.a>
              </div>
            ))}
            <WeManageMegamenu isOpen={isManageMegamenuOpen} />
            <WeMarketMegamenu isOpen={isMarketMegamenuOpen} />
            <ToolsMegamenu isOpen={isToolsMegamenuOpen} />
            {/* <ThemeToggle /> */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="sm"
                className="rounded-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 shadow-lg shadow-secondary/25 transition-all"
              >
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* <ThemeToggle /> */}
            <motion.button
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={isMobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={
            isMobileMenuOpen
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                initial={{ x: -50, opacity: 0 }}
                animate={
                  isMobileMenuOpen
                    ? { x: 0, opacity: 1 }
                    : { x: -50, opacity: 0 }
                }
                transition={{ delay: index * 0.1 }}
                className="block py-3 px-4 text-base font-semibold text-foreground/70 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all tracking-tight"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={
                isMobileMenuOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
              }
              transition={{ delay: navLinks.length * 0.1 }}
              className="pt-2"
            >
              <Button
                size="sm"
                className="w-full rounded-full bg-gradient-to-r from-secondary to-accent"
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
