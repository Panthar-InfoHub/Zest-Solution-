"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"

export function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section id="contact" className="py-12 sm:py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">Ready to Transform Your Business?</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto px-2">
              Get in touch with us today. Whether you need B2B marketing solutions or B2C e-commerce management, we're
              here to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Form */}
            <Card className="p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="text-sm"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="text-sm"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="text-sm"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your requirements"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    required
                    className="text-sm"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full text-sm sm:text-base">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <Card className="p-4 sm:p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#3d1e52] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold mb-1 text-sm sm:text-base">Call Us</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">+91 8484099961</p>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">+91 7042163504</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#ff6b00] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold mb-1 text-sm sm:text-base">Email Us</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">info@zestsolution.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#3d1e52] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold mb-1 text-sm sm:text-base">Visit Us</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Available across India</p>
                    <p className="text-xs text-muted-foreground mt-1">24/7 Support & Service</p>
                  </div>
                </div>
              </Card>

              <div className="bg-gradient-to-br from-secondary to-accent p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-2xl text-primary-foreground">
                <h4 className="text-lg sm:text-2xl font-bold mb-2">Join 5000+ Successful Clients</h4>
                <p className="text-xs sm:text-sm text-primary-foreground/90 mb-3 sm:mb-4">Average 3x revenue growth with our proven strategies</p>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full flex-shrink-0" />
                  <span>100% Secure & Confidential</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
