"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"

interface ResponsiveSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function ResponsiveSection({ children, className = "", id }: ResponsiveSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add animation class when section comes into view
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the element is visible
      },
    )

    observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`${className} ${isVisible ? "animate-fadeIn" : "opacity-0"} transition-opacity duration-500`}
    >
      {children}
    </section>
  )
}

