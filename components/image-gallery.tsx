"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useMobile } from "@/hooks/use-mobile"

interface GalleryItem {
  id: number
  title: string
  category: string
  description: string
  imageSrc: string
}

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const isMobile = useMobile()
  const galleryRef = useRef<HTMLDivElement>(null)

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Saffron-Infused Biryani",
      category: "Signature Dish",
      description:
        "A fragrant rice dish layered with aromatic spices, tender meat, and caramelized onions, finished with a touch of saffron.",
      imageSrc: "/Saffron-Infused-Biryani.jpg?height=600&width=800&text=1",
    },
    {
      id: 2,
      title: "Modern Thali Presentation",
      category: "Food Styling",
      description:
        "A contemporary take on the traditional Indian thali, featuring a curated selection of dishes presented with artistic flair.",
      imageSrc: "/Modern-Thali-Presentation.jpg?height=600&width=800&text=2",
    },
    {
      id: 3,
      title: "Fusion Dessert Platter",
      category: "Innovation",
      description:
        "A creative blend of Indian and Western dessert techniques, combining traditional flavors with modern presentation.",
      imageSrc: "/Fusion-Dessert-Platter.jpg?height=600&width=800&text=3",
    },
    {
      id: 4,
      title: "Coastal Curry Selection",
      category: "Regional Cuisine",
      description:
        "A showcase of India's diverse coastal flavors, featuring seafood preparations from Kerala, Goa, and Bengal.",
      imageSrc: "/Coastal-Curry-Selection.png?height=600&width=800&text=4",
    },
    {
      id: 5,
      title: "Spice-Rubbed Grilled Vegetables",
      category: "Vegetarian",
      description:
        "Farm-fresh vegetables marinated in a signature spice blend and grilled to perfection, highlighting seasonal produce.",
      imageSrc: "/Spice-Rubbed-Grilled-Vegetables.png?height=600&width=800&text=5",
    },
    {
      id: 6,
      title: "Artisanal Bread & Chutneys",
      category: "Accompaniments",
      description:
        "Handcrafted breads paired with a selection of house-made chutneys, showcasing traditional techniques with a modern twist.",
      imageSrc: "/Artisanal-Bread-&-Chutneys.png?height=600&width=800&text=6",
    },
  ]

  const handleItemClick = (item: GalleryItem, index: number) => {
    setSelectedImage(item)
    setCurrentIndex(index)
    setIsDialogOpen(true)
  }

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length
    setCurrentIndex(newIndex)
    setSelectedImage(galleryItems[newIndex])
  }

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % galleryItems.length
    setCurrentIndex(newIndex)
    setSelectedImage(galleryItems[newIndex])
  }

  // Touch handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      handleNext()
    }

    if (isRightSwipe) {
      handlePrevious()
    }

    // Reset values
    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <>
      <div ref={galleryRef} className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl cursor-pointer touch-manipulation"
            onClick={() => handleItemClick(item, index)}
          >
            <div className="relative h-56 sm:h-64 w-full overflow-hidden">
              <Image
                src={item.imageSrc || "/placeholder.svg"}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-6">
              <span className="mb-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                {item.category}
              </span>
              <h3 className="mb-2 font-serif text-xl font-bold">{item.title}</h3>
              <button
                className="text-amber-600 hover:text-amber-800 touch-target"
                aria-label={`View details for ${item.title}`}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[90%] md:max-w-[700px] p-0 overflow-hidden">
          {selectedImage && (
            <div
              className="relative"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 z-50 bg-black/20 hover:bg-black/40 rounded-full text-white touch-target"
                onClick={() => setIsDialogOpen(false)}
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </Button>

              <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                <div className="relative h-[300px] md:h-[400px] bg-gray-100">
                  <Image
                    src={selectedImage.imageSrc || "/placeholder.svg"}
                    alt={selectedImage.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover"
                    priority
                  />

                  {/* Navigation arrows */}
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation()
                        handlePrevious()
                      }}
                      className="h-10 w-10 rounded-full bg-black/20 hover:bg-black/40 text-white ml-2 touch-target"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                  </div>

                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleNext()
                      }}
                      className="h-10 w-10 rounded-full bg-black/20 hover:bg-black/40 text-white mr-2 touch-target"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </div>

                  {/* Swipe indicator for mobile */}
                  {isMobile && (
                    <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm bg-black/30 py-1">
                      Swipe to navigate
                    </div>
                  )}
                </div>

                <div className="flex flex-col p-6">
                  <div>
                    <span className="mb-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                      {selectedImage.category}
                    </span>
                    <h3 className="mb-4 font-serif text-2xl font-bold">{selectedImage.title}</h3>
                    <p className="mb-6 text-gray-700">{selectedImage.description}</p>
                  </div>
                  <div className="mt-auto">
                    <Button
                      className="w-full bg-amber-600 hover:bg-amber-700 h-12 touch-target"
                      onClick={() => {
                        setIsDialogOpen(false)
                        window.location.href = "/booking"
                      }}
                    >
                      Request This Dish
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

