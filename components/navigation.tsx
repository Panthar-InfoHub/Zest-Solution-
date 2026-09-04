"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { WeManageMegamenu, weManageSections } from "./we-manage-megamenu";
import { WeMarketMegamenu, weMarketSections } from "./we-market-megamenu";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isManageMegamenuOpen, setIsManageMegamenuOpen] = useState(false);
  const [isMarketMegamenuOpen, setIsMarketMegamenuOpen] = useState(false);
  const [isMobileManageOpen, setIsMobileManageOpen] = useState(false);
  const [isMobileMarketOpen, setIsMobileMarketOpen] = useState(false);
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
    { href: "/#about", label: "About Us" },
    { href: "#", label: "We Manage" },
    { href: "#", label: "We Market" },
  ];

  const toggleMegamenu = (label: string) => {
    if (label === "We Manage") {
      setIsManageMegamenuOpen(!isManageMegamenuOpen);
      setIsMarketMegamenuOpen(false);
    } else if (label === "We Market") {
      setIsMarketMegamenuOpen(!isMarketMegamenuOpen);
      setIsManageMegamenuOpen(false);
    } else {
      setIsManageMegamenuOpen(false);
      setIsMarketMegamenuOpen(false);
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    setIsMobileMenuOpen(false);
    setIsManageMegamenuOpen(false);
    setIsMarketMegamenuOpen(false);

    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 150);
    }
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsManageMegamenuOpen(false);
    setIsMarketMegamenuOpen(false);

    setTimeout(() => {
      if (typeof window !== "undefined" && window.location.pathname === "/") {
        const aboutElement = document.getElementById("about");
        if (aboutElement) {
          const headerOffset = 90;
          const elementPosition = aboutElement.getBoundingClientRect().top;
          const currentScroll = window.scrollY || window.pageYOffset;
          const offsetPosition = elementPosition + currentScroll - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        } else {
          window.location.href = "/#about";
        }
      } else {
        window.location.href = "/#about";
      }
    }, 150);
  };

  const handleGetStartedClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsManageMegamenuOpen(false);
    setIsMarketMegamenuOpen(false);

    setTimeout(() => {
      if (typeof window !== "undefined" && window.location.pathname === "/") {
        const ctaElement = document.getElementById("cta");
        if (ctaElement) {
          const headerOffset = 90;
          const elementPosition = ctaElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        } else {
          window.location.href = "/#cta";
        }
      } else {
        window.location.href = "/#cta";
      }
    }, 150);
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-primary/5"
          : "lg:bg-transparent bg-background"
      }`}
    >
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link
            href="/"
            className="flex items-center gap-3 cursor-pointer group"
            onClick={handleHomeClick}
          >
            <motion.div
              className="relative w-32 h-12 md:w-40 md:h-14"
              style={{ scale: logoScale, opacity: logoOpacity }}
              whileHover={{ y: -2, scale: 1.05 }}
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
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 relative">
            {navLinks.map((link, index) => (
              <div key={index} className="group">
                <motion.a
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => {
                    if (link.label === "We Manage" || link.label === "We Market") {
                      e.preventDefault();
                      toggleMegamenu(link.label);
                    } else if (link.label === "About Us") {
                      handleAboutClick(e);
                    } else if (link.label === "Home") {
                      handleHomeClick(e);
                    } else {
                      setIsManageMegamenuOpen(false);
                      setIsMarketMegamenuOpen(false);
                    }
                  }}
                  className="relative text-base font-semibold text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1 tracking-tight cursor-pointer"
                >
                  {link.label}
                  {(link.label === "We Manage" || link.label === "We Market") && (
                    <motion.div
                      animate={{
                        rotate:
                          (link.label === "We Manage" && isManageMegamenuOpen) ||
                          (link.label === "We Market" && isMarketMegamenuOpen)
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
            {/* <ThemeToggle /> */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#cta"
                onClick={handleGetStartedClick}
                className="cursor-pointer"
              >
                <Button
                  type="button"
                  size="sm"
                  className="rounded-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 shadow-lg shadow-secondary/25 transition-all cursor-pointer"
                >
                  Get Started
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* <ThemeToggle /> */}
            <motion.button
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle navigation menu"
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

        {/* Mobile Menu Drawer */}
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
          <div className="py-4 space-y-2 max-h-[calc(100vh-6rem)] overflow-y-auto px-1 pb-6">
            {/* Home Link */}
            <a
              href="/"
              className="block py-3 px-4 text-base font-semibold text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all tracking-tight cursor-pointer"
              onClick={handleHomeClick}
            >
              Home
            </a>

            {/* About Us Link */}
            <a
              href="/#about"
              className="block py-3 px-4 text-base font-semibold text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all tracking-tight cursor-pointer"
              onClick={handleAboutClick}
            >
              About Us
            </a>

            {/* We Manage Accordion */}
            <div className="rounded-lg overflow-hidden border border-border/30 bg-muted/20">
              <button
                type="button"
                className="w-full py-3 px-4 flex items-center justify-between text-base font-semibold text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-all tracking-tight"
                onClick={() => {
                  setIsMobileManageOpen(!isMobileManageOpen);
                  setIsMobileMarketOpen(false);
                }}
              >
                <span>We Manage</span>
                <ChevronDown
                  className={`w-5 h-5 text-orange-500 transition-transform duration-200 ${
                    isMobileManageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {isMobileManageOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden bg-background/50 border-t border-border/40 px-4 py-3 space-y-4"
                  >
                    {weManageSections.map((section) => {
                      const IconComp = section.icon;
                      return (
                        <div key={section.title} className="space-y-2">
                          <div className="flex items-center gap-2 text-xs font-semibold text-orange-500 border-b border-border/30 pb-1">
                            <IconComp className="w-4 h-4 flex-shrink-0" />
                            <span>{section.title}</span>
                          </div>
                          <div className="grid grid-cols-1 gap-1 pl-2">
                            {section.items.map((item) => (
                              <Link
                                key={item.slug}
                                href={`/services/${item.slug}`}
                                className="text-xs text-foreground/75 hover:text-orange-500 py-1.5 transition-colors block"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileManageOpen(false);
                                }}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* We Market Accordion */}
            <div className="rounded-lg overflow-hidden border border-border/30 bg-muted/20">
              <button
                type="button"
                className="w-full py-3 px-4 flex items-center justify-between text-base font-semibold text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-all tracking-tight"
                onClick={() => {
                  setIsMobileMarketOpen(!isMobileMarketOpen);
                  setIsMobileManageOpen(false);
                }}
              >
                <span>We Market</span>
                <ChevronDown
                  className={`w-5 h-5 text-orange-500 transition-transform duration-200 ${
                    isMobileMarketOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {isMobileMarketOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden bg-background/50 border-t border-border/40 px-4 py-3 space-y-4"
                  >
                    {weMarketSections.map((section) => {
                      const IconComp = section.icon;
                      return (
                        <div key={section.title} className="space-y-2">
                          <div className="flex items-center gap-2 text-xs font-semibold text-orange-500 border-b border-border/30 pb-1">
                            <IconComp className="w-4 h-4 flex-shrink-0" />
                            <span>{section.title}</span>
                          </div>
                          <div className="grid grid-cols-1 gap-1 pl-2">
                            {section.items.map((item) => (
                              <Link
                                key={item.slug}
                                href={`/services/${item.slug}`}
                                className="text-xs text-foreground/75 hover:text-orange-500 py-1.5 transition-colors block"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileMarketOpen(false);
                                }}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Get Started Button */}
            <div className="pt-2">
              <a
                href="#cta"
                onClick={handleGetStartedClick}
                className="block w-full cursor-pointer"
              >
                <Button
                  type="button"
                  size="sm"
                  className="w-full rounded-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white font-semibold py-3 text-base shadow-md cursor-pointer"
                >
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

