import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ServiceDescription } from "@/components/service-description"
import { ServiceSteps } from "@/components/service-steps"
import { ServiceCTAForm } from "@/components/service-cta-form"
import { getServiceBySlug } from "@/lib/services-data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.title} | Zest Solution`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <ServiceHero service={service} />
      <ServiceDescription service={service} />
      <ServiceSteps service={service} />
      <ServiceCTAForm service={service} />
      <Footer />
    </main>
  )
}
