import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Services } from "@/components/services"
import { B2BServices } from "@/components/b2b-services"
import { B2CServices } from "@/components/b2c-services"
import { PricingB2B } from "@/components/pricing-b2b"
import { PricingB2C } from "@/components/pricing-b2c"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Process } from "@/components/process"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { WhoWeAre } from "@/components/who-we-are"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <WhoWeAre />
      <Services />
      <B2BServices />
      <PricingB2B />
      <B2CServices />
      <PricingB2C />
      <WhyChooseUs />
      <Process />
      <CTA />
      <Footer />
    </main>
  )
}
