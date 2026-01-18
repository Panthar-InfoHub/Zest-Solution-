"use server"

import type { Service } from "@/lib/services-data"

interface FormData {
  name: string
  contactNumber: string
  businessType: string
  whyNeedService: string
  service: string
}

export async function submitServiceInquiry(data: FormData) {
  try {
    // Validation
    if (!data.name || !data.contactNumber || !data.businessType || !data.whyNeedService) {
      return {
        success: false,
        error: "Please fill in all required fields",
      }
    }

    // Phone number validation
    const phoneRegex = /^\+?[1-9]\d{1,14}$/
    if (!phoneRegex.test(data.contactNumber.replace(/\D/g, ""))) {
      return {
        success: false,
        error: "Please enter a valid phone number",
      }
    }

    // Log the inquiry (in production, you would save this to a database or send an email)
    console.log("Service Inquiry Received:", {
      timestamp: new Date().toISOString(),
      ...data,
    })

    // TODO: In production, implement one of these:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send to CRM system
    // 4. Send to analytics/tracking service

    return {
      success: true,
      message: "Thank you for your inquiry. We will contact you within 24 hours.",
    }
  } catch (error) {
    console.error("Error submitting service inquiry:", error)
    return {
      success: false,
      error: "An error occurred. Please try again later.",
    }
  }
}
