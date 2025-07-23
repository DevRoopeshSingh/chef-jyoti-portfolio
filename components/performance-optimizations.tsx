"use client"

import { useEffect } from "react"

export function PerformanceOptimizations() {
  useEffect(() => {
    // Implement passive event listeners for better scroll performance
    const supportsPassive = () => {
      let passive = false
      try {
        const options = {
          get passive() {
            passive = true
            return true
          },
        }
        window.addEventListener("test", () => {}, options)
        window.removeEventListener("test", () => {})
      } catch (e) {
        // Do nothing
      }
      return passive
    }

    // Preload critical images
    const preloadImages = [
      "/Crafting-culinary-experiences.jpg", // Hero image
      "/About-Chef-Jyoti.jpg", // About image
    ]

    preloadImages.forEach((src) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.as = "image"
      link.href = src
      document.head.appendChild(link)
    })

    // Implement intersection observer for lazy loading
    const lazyLoadImages = () => {
      if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement
              const src = img.dataset.src

              if (src) {
                img.src = src
                img.removeAttribute("data-src")
              }

              observer.unobserve(img)
            }
          })
        })

        document.querySelectorAll("img[data-src]").forEach((img) => {
          imageObserver.observe(img)
        })
      }
    }

    lazyLoadImages()

    return () => {
      // Cleanup if needed
    }
  }, [])

  return null
}

