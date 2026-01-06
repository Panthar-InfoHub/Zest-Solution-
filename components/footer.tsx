import { Building2, ShoppingBag } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    b2b: [
      { label: "Marketing Services", href: "#" },
      { label: "Sales Solutions", href: "#" },
      { label: "Brand Activation", href: "#" },
      { label: "Recruitment", href: "#" },
    ],
    b2c: [
      { label: "Account Management", href: "#" },
      { label: "Platform Onboarding", href: "#" },
      { label: "Store Branding", href: "#" },
      { label: "SEO Services", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Process", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4">
              Zest<span className="text-accent">•</span>Solution
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed max-w-sm">
              Your comprehensive partner for B2B marketing excellence and B2C e-commerce success. Connecting businesses
              to powerful growth opportunities.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Building2 className="w-4 h-4" />
                <span>B2B Marketing</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <ShoppingBag className="w-4 h-4" />
                <span>B2C E-commerce</span>
              </div>
            </div>
          </div>

          {/* B2B Services */}
          <div>
            <h4 className="font-bold mb-4">B2B Services</h4>
            <ul className="space-y-2">
              {links.b2b.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* B2C Services */}
          <div>
            <h4 className="font-bold mb-4">B2C Services</h4>
            <ul className="space-y-2">
              {links.b2c.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} Zest Solution. All rights reserved.</p>
            <p className="text-primary-foreground/60">Designed and Developed By Panther Inhub Pvt. Ltd.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
