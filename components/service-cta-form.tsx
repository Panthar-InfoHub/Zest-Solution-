"use client"

import React, { useState } from "react"
import { Service } from "@/lib/services-data"
import { submitServiceInquiry } from "@/app/actions/submit-service-inquiry"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"
import { MessageCircle, CheckCircle } from "lucide-react"

interface ServiceCTAFormProps {
  service: Service
}

export function ServiceCTAForm({ service }: ServiceCTAFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    businessType: "",
    whyNeedService: "",
  })
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; contactNumber?: string }>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = () => {
    const newErrors: { email?: string; contactNumber?: string } = {}

    // Strict Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. name@example.com)"
    }

    // Strict Phone validation (10-digit mobile or valid 10-15 digit number)
    const cleanPhone = formData.contactNumber.replace(/[\s\-\(\)]/g, "")
    const phoneRegex = /^(\+?\d{1,4})?[6-9]\d{9}$|^(\+?\d{10,15})$/
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      newErrors.contactNumber = "Please enter a valid 10-digit contact number"
    }

    setFieldErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const generateWhatsappUrl = () => {
    const messageText =
      `📋 *Free Consultation Request: ${service.title}*\n` +
      `------------------------------------\n` +
      `👤 *Full Name:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📞 *Contact Number:* ${formData.contactNumber}\n` +
      `🏢 *Business Type:* ${formData.businessType}\n` +
      `🎯 *Service:* ${service.title}\n\n` +
      `💬 *Specific Requirements / Needs:*\n${formData.whyNeedService}\n\n` +
      `*Please review my details and schedule a free consultation with me.*`

    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(messageText)}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      return // Block submission if email or number is invalid
    }

    setLoading(true)
    setError(null)

    try {
      // Record inquiry on backend (non-blocking)
      submitServiceInquiry({
        ...formData,
        service: service.title,
      }).catch((err) => console.error("Inquiry logging error:", err))

      // Open WhatsApp directly with structured details for review
      const whatsappUrl = generateWhatsappUrl()
      window.open(whatsappUrl, "_blank")

      setSubmitted(true)
    } catch (err) {
      setError("An error occurred. Please try again.")
      console.error("Form submission error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground">
              Get Your Free Consultation
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Fill out your details below to connect with our experts directly on WhatsApp for a personalized consultation.
            </p>
          </div>

          <div className="bg-background border border-border rounded-xl p-6 sm:p-8 lg:p-12 shadow-xl">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
              >
                {error}
              </motion.div>
            )}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-background text-foreground placeholder:text-foreground/40 text-sm"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="name@example.com"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-background text-foreground placeholder:text-foreground/40 text-sm ${
                        fieldErrors.email ? "border-red-500 focus:ring-red-500" : "border-input"
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="text-xs text-red-500 font-medium">{fieldErrors.email}</p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <label htmlFor="contactNumber" className="text-sm font-semibold text-foreground">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-background text-foreground placeholder:text-foreground/40 text-sm ${
                        fieldErrors.contactNumber ? "border-red-500 focus:ring-red-500" : "border-input"
                      }`}
                    />
                    {fieldErrors.contactNumber && (
                      <p className="text-xs text-red-500 font-medium">{fieldErrors.contactNumber}</p>
                    )}
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <label htmlFor="businessType" className="text-sm font-semibold text-foreground">
                    What Type of Business Do You Have? *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-background text-foreground text-sm"
                  >
                    <option value="">Select your business type</option>
                    <option value="E-commerce Store">E-commerce Store</option>
                    <option value="Amazon Seller">Amazon Seller</option>
                    <option value="Marketplace Seller">Marketplace Seller</option>
                    <option value="Dropshipping">Dropshipping</option>
                    <option value="SaaS Business">SaaS Business</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Services">Services</option>
                    <option value="Other">Other</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <label htmlFor="whyNeedService" className="text-sm font-semibold text-foreground">
                    Why Do You Need This Service? *
                  </label>
                  <textarea
                    id="whyNeedService"
                    name="whyNeedService"
                    value={formData.whyNeedService}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your specific goals or challenges..."
                    rows={4}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-background text-foreground placeholder:text-foreground/40 text-sm resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex justify-center pt-4"
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Submitting..." : "Get Your Free Consultation"}
                  </Button>
                </motion.div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 py-8"
              >
                <div className="w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Consultation Request Prepared!</h3>
                  <p className="text-muted-foreground max-w-md mx-auto text-sm sm:text-base">
                    WhatsApp should have opened with your structured consultation request for <strong>{service.title}</strong>.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href={generateWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold gap-2 rounded-full px-8 py-6 text-base">
                      <MessageCircle className="w-5 h-5" />
                      Open WhatsApp Chat Again
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto rounded-full px-6 py-6"
                  >
                    Edit Details
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

