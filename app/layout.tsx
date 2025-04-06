import type React from "react"
import { Playfair_Display, Raleway } from "next/font/google"
import Link from "next/link"

import { Logo } from "@/components/logo"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { PerformanceOptimizations } from "@/components/performance-optimizations"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
})

export const metadata = {
  title: "Chef Jyoti | Culinary Portfolio",
  description: "Professional chef specializing in Indian and global cuisine, food styling, and culinary consulting.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#d97706",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${playfair.variable} ${raleway.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <PerformanceOptimizations />
          <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4">
              <Link href="/" className="z-10">
                <Logo />
              </Link>
              <nav className="hidden space-x-4 lg:space-x-8 md:flex">
                <Link href="/" className="font-medium text-gray-900 hover:text-amber-600">
                  Home
                </Link>
                <Link href="/#about" className="font-medium text-gray-900 hover:text-amber-600">
                  About
                </Link>
                <Link href="/#portfolio" className="font-medium text-gray-900 hover:text-amber-600">
                  Portfolio
                </Link>
                <Link href="/#services" className="font-medium text-gray-900 hover:text-amber-600">
                  Services
                </Link>
                <Link href="/blog" className="font-medium text-gray-900 hover:text-amber-600">
                  Blog
                </Link>
                <Link href="/recipes" className="font-medium text-gray-900 hover:text-amber-600">
                  Recipes
                </Link>
                <Link href="/booking" className="font-medium text-gray-900 hover:text-amber-600">
                  Book
                </Link>
              </nav>
              <Link href="/booking" className="hidden bg-amber-600 hover:bg-amber-700 md:inline-flex">
                <Button className="bg-amber-600 hover:bg-amber-700">Book a Consultation</Button>
              </Link>
              <MobileNav />
            </div>
          </header>
          <main className="pt-16 sm:pt-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'