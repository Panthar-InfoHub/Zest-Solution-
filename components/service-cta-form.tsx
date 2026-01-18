"use client"

import React from "react"

import { useState } from "react"
import { Service } from "@/lib/services-data"
import { submitServiceInquiry } from "@/app/actions/submit-service-inquiry"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface ServiceCTAFormProps {
  service: Service
}

export function ServiceCTAForm({ service }: ServiceCTAFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    businessType: "",
    whyNeedService: "",
  })
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
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const result = await submitServiceInquiry({
        ...formData,
        service: service.title,
      })

      if (result.success) {
        setSubmitted(true)
        setFormData({
          name: "",
          contactNumber: "",
          businessType: "",
          whyNeedService: "",
        })
        setTimeout(() => {
          setSubmitted(false)
        }, 3000)
      } else {
        setError(result.error || "An error occurred. Please try again.")
      }
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
              Get Started Today
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Fill out the form below and our team will contact you within 24 hours
            </p>
          </div>

          <div className="bg-background border border-border rounded-lg p-6 sm:p-8 lg:p-12">
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
                <div className="grid sm:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-2.5 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-background text-foreground placeholder:text-foreground/40"
                    />
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
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2.5 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-background text-foreground placeholder:text-foreground/40"
                    />
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
                    className="w-full px-4 py-2.5 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-background text-foreground"
                  >
                    <option value="">Select your business type</option>
                    <option value="ecommerce">E-commerce Store</option>
                    <option value="amazon">Amazon Seller</option>
                    <option value="marketplace">Marketplace Seller</option>
                    <option value="dropshipping">Dropshipping</option>
                    <option value="saas">SaaS Business</option>
                    <option value="consulting">Consulting</option>
                    <option value="services">Services</option>
                    <option value="other">Other</option>
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
                    placeholder="Tell us about your specific needs..."
                    rows={4}
                    className="w-full px-4 py-2.5 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-background text-foreground placeholder:text-foreground/40 resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex justify-center pt-2"
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-4 py-12"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Thank you!</h3>
                <p className="text-foreground/70">
                  We've received your information and will contact you soon.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
