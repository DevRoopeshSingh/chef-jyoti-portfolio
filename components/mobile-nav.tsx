"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "./logo"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const routes = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/#services", label: "Services" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
    { href: "/recipes", label: "Recipes" },
    { href: "/booking", label: "Book Now" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden touch-target" aria-label="Open menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85%] max-w-[350px] sm:max-w-sm">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between py-4">
            <Logo />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className="h-10 w-10 rounded-full touch-target"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col mt-8">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="text-lg font-medium px-4 py-4 hover:bg-gray-100 rounded-md transition-colors active:bg-gray-200 touch-manipulation"
                onClick={() => setOpen(false)}
              >
                {route.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-8 px-4 pb-8">
            <Button
              className="w-full bg-amber-600 hover:bg-amber-700 h-14 text-lg touch-target"
              onClick={() => {
                setOpen(false)
                window.location.href = "/booking"
              }}
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

