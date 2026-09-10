import type React from "react"
import type { Metadata } from "next"
import { Poppins, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const poppins = Poppins({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "600", "700"] })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" })

export const metadata: Metadata = {
  title: "Zest Solution | B2B Marketing & B2C E-commerce Solutions",
  description:
    "Your comprehensive partner for B2B marketing services and B2C e-commerce solutions. From offline marketing to online marketplace management.",
  icons: {
    icon: "/images/zs-logo.svg",
    shortcut: "/images/zs-logo.svg",
    apple: "/images/zs-logo.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${poppins.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
