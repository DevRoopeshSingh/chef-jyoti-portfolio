"use client"; // Added because we're using hooks and event handlers

import Image from "next/image";
import { useCallback } from "react";
import {
  ChefHat,
  Clock,
  Globe,
  MessageSquare,
  Star,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ImageGallery } from "@/components/image-gallery";
import { ContactForm } from "@/components/contact-form";
import { SocialLinks } from "@/components/social-links";
import { TestimonialCard } from "@/components/testimonial-card";

export default function Home() {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex h-[80vh] items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Crafting-culinary-experiences.jpg"
            alt="Chef Jyoti cooking"
            fill
            className="object-cover brightness-50"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Chef Jyoti
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl lg:text-2xl">
            Crafting culinary experiences that blend Indian traditions with
            global flavors
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700"
              onClick={() => scrollToSection("portfolio")}
              aria-label="View portfolio section">
              View Portfolio
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/50 transition-colors"
              onClick={() => scrollToSection("contact")}
              aria-label="Contact me section">
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8 md:flex-row md:gap-12">
            <div className="md:w-1/2">
              <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
                About Chef Jyoti
              </h2>
              <p className="mb-4 text-base text-gray-700 md:text-lg">
                With over a decade of culinary expertise, I've dedicated my
                career to elevating Indian cuisine while embracing global
                flavors and techniques. My journey began in the vibrant kitchens
                of Mumbai and has taken me through prestigious restaurants
                across Europe and North America.
              </p>
              <p className="mb-6 text-base text-gray-700 md:text-lg">
                As a chef, food stylist, and culinary consultant, I bring a
                unique perspective that honors traditional recipes while
                reimagining them for contemporary palates. My approach combines
                meticulous technique with artistic presentation, creating
                memorable dining experiences.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <ChefHat className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">Global Cuisine</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">Culinary Workshops</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">Consulting Services</span>
                </div>
              </div>
            </div>
            <div className="relative mt-8 h-64 w-full md:mt-0 md:h-[400px] md:w-1/2">
              <Image
                src="/About-Chef-Jyoti.jpg"
                alt="Chef Jyoti portrait"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Culinary Portfolio
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-base text-gray-600 md:text-lg">
            A showcase of my signature dishes, food styling projects, and
            culinary creations
          </p>
          <ImageGallery />
          <div className="mt-8 text-center md:mt-12">
            <Button
              className="bg-amber-600 hover:bg-amber-700"
              onClick={() => scrollToSection("gallery")}>
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Culinary Services
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-base text-gray-600 md:text-lg">
            Elevate your culinary experience with my professional services
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Private Chef Experience",
                description:
                  "Bespoke dining experiences in the comfort of your home, tailored to your preferences and dietary needs.",
                icon: <ChefHat className="h-10 w-10 text-amber-600" />,
              },
              {
                title: "Culinary Workshops",
                description:
                  "Interactive cooking classes focusing on Indian cuisine fundamentals, spice blending, and regional specialties.",
                icon: <Users className="h-10 w-10 text-amber-600" />,
              },
              {
                title: "Menu Development",
                description:
                  "Creative menu design for restaurants and food businesses looking to incorporate authentic Indian flavors.",
                icon: <Clock className="h-10 w-10 text-amber-600" />,
              },
              {
                title: "Food Styling",
                description:
                  "Professional food styling for photography, film, and media projects that require appetizing visual presentations.",
                icon: <Star className="h-10 w-10 text-amber-600" />,
              },
              {
                title: "Culinary Consulting",
                description:
                  "Expert guidance on kitchen operations, ingredient sourcing, and culinary team training.",
                icon: <MessageSquare className="h-10 w-10 text-amber-600" />,
              },
              {
                title: "Brand Collaborations",
                description:
                  "Partnership opportunities for food brands seeking authentic representation and recipe development.",
                icon: <Globe className="h-10 w-10 text-amber-600" />,
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-none shadow-lg transition-all hover:shadow-xl">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-amber-50 p-4">
                    {service.icon}
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-bold">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-amber-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Client Testimonials
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-base text-gray-600 md:text-lg">
            What clients and collaborators have to say about working with Chef
            Jyoti
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "Chef Jyoti transformed our restaurant's menu with authentic yet innovative Indian dishes that have become customer favorites.",
                name: "Michael Chen",
                title: "Restaurant Owner",
                image: "/images/testimonials/michael-chen.png",
              },
              {
                quote:
                  "Her food styling for our cookbook was impeccable. She understands how to make Indian cuisine visually stunning while maintaining authenticity.",
                name: "Priya Sharma",
                title: "Cookbook Publisher",
                image: "/images/testimonials/priya-sharma.png",
              },
              {
                quote:
                  "The private dining experience Chef Jyoti created for our anniversary was unforgettable. Every dish told a story and took us on a culinary journey.",
                name: "James & Sarah Wilson",
                title: "Private Clients",
                image: "/images/testimonials/wilson-couple.png",
              },
            ].map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-900 py-16 text-white md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8 md:flex-row md:gap-12">
            <div className="md:w-1/2">
              <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
                Let's Create Something Extraordinary
              </h2>
              <p className="mb-6 text-base text-gray-300 md:text-lg">
                Whether you're looking for a private chef, culinary consultant,
                or food styling expert, I'm here to bring your vision to life.
                Contact me to discuss your project.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-amber-600 p-2">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <span>Jyotimaity3008@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-amber-600 p-2">
                    <Globe className="h-5 w-5" />
                  </div>
                  <span>Available for projects worldwide</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 text-center text-gray-400">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <SocialLinks />
          </div>
          <p>© {new Date().getFullYear()} Chef Jyoti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
