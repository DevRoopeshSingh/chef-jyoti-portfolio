import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function BlogPage() {
  const blogPosts = [
    {
      id: "spice-journey-india",
      title: "A Journey Through Indian Spices",
      excerpt:
        "Discover the art of spice blending and how different regions of India create unique flavor profiles.",
      date: "January 15, 2024",
      category: "Techniques",
      imageSrc: "/Coastal-Curry-Selection.png",
      readTime: "8 min read",
    },
    {
      id: "fusion-desserts-guide",
      title: "Creating Fusion Desserts: East Meets West",
      excerpt:
        "Learn how to blend traditional Indian sweets with Western dessert techniques for innovative creations.",
      date: "January 10, 2024",
      category: "Innovation",
      imageSrc: "/Fusion-Dessert-Platter.jpg",
      readTime: "6 min read",
    },
    {
      id: "seasonal-cooking-tips",
      title: "Seasonal Cooking: Making the Most of Fresh Ingredients",
      excerpt:
        "Discover how to adapt your cooking to seasonal ingredients for maximum flavor and nutritional value.",
      date: "January 5, 2024",
      category: "Techniques",
      imageSrc: "/Spice-Rubbed-Grilled-Vegetables.png",
      readTime: "7 min read",
    },
    {
      id: 4,
      title: "The Perfect Modern Thali Presentation",
      excerpt:
        "Learn how to present traditional Indian thali meals with modern plating techniques and visual appeal.",
      date: "December 28, 2023",
      category: "Food Styling",
      imageSrc: "/Modern-Thali-Presentation.jpg",
      readTime: "10 min read",
    },
    {
      id: 5,
      title: "Artisanal Bread and Homemade Chutneys",
      excerpt: "Master the art of making fresh bread and pairing it with traditional Indian chutneys and preserves.",
      date: "December 20, 2023",
      category: "Techniques",
      imageSrc: "/Artisanal-Bread-&-Chutneys.png",
      readTime: "12 min read",
    },
    {
      id: 6,
      title: "Breakfast Around the World: A Culinary Journey",
      excerpt:
        "Explore how different cultures start their day, from Indian parathas to continental breakfast spreads.",
      date: "December 15, 2023",
      category: "Culture",
      imageSrc: "/appetizing-breakfast.jpg",
      readTime: "5 min read",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Culinary Journal</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Recipes, techniques, and culinary insights from Chef Jyoti's kitchen to yours
        </p>
      </div>

      <div className="mb-16">
        <div className="relative mb-8 overflow-hidden rounded-xl">
          <div className="relative aspect-[21/9] w-full">
            <Image
              src="/Saffron-Infused-Biryani.jpg"
              alt="Featured blog post"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="mb-2 inline-block rounded-full bg-amber-600 px-3 py-1 text-sm font-medium text-white">
              Featured
            </span>
            <h2 className="mb-2 font-serif text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              The Evolution of Indian Cuisine in Modern Gastronomy
            </h2>
            <p className="mb-4 max-w-2xl text-gray-200">
              How traditional Indian cooking techniques and flavors are influencing contemporary fine dining around the
              world.
            </p>
            <Link href="/blog/spice-journey-india">
              <Button className="bg-white text-gray-900 hover:bg-gray-100">Read Article</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={post.imageSrc || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500">{post.readTime}</span>
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold">{post.title}</h3>
              <p className="mb-4 text-gray-600">{post.excerpt}</p>
              <time className="text-sm text-gray-500">{post.date}</time>
            </CardContent>
            <CardFooter className="border-t p-6 pt-4">
              <Link href={`/blog/${post.id}`} className="inline-flex items-center text-amber-600 hover:text-amber-800">
                Read more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
          Load More Articles
        </Button>
      </div>
    </div>
  )
}

