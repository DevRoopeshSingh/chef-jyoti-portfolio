import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Spice Blending: Creating Your Own Masalas",
      excerpt:
        "Learn how to create custom spice blends that will elevate your cooking and bring authentic Indian flavors to your kitchen.",
      date: "April 2, 2023",
      category: "Techniques",
      imageSrc: "/placeholder.svg?height=400&width=600&text=Spice+Blending",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Regional Rice Dishes: Beyond Biryani",
      excerpt:
        "Explore the diverse world of Indian rice preparations, from the fragrant Pulao to the comforting Khichdi.",
      date: "March 15, 2023",
      category: "Recipes",
      imageSrc: "/placeholder.svg?height=400&width=600&text=Rice+Dishes",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Food Styling Tips for Home Cooks",
      excerpt:
        "Simple techniques to make your home-cooked meals look as good as they taste, using props and styling techniques from professional food photographers.",
      date: "February 28, 2023",
      category: "Food Styling",
      imageSrc: "/placeholder.svg?height=400&width=600&text=Food+Styling",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Sustainable Cooking Practices in Modern Kitchens",
      excerpt:
        "How to reduce waste, source ingredients responsibly, and make environmentally conscious choices in your cooking.",
      date: "February 10, 2023",
      category: "Sustainability",
      imageSrc: "/placeholder.svg?height=400&width=600&text=Sustainable+Cooking",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "The Perfect Indian Dinner Party Menu",
      excerpt: "Plan an impressive multi-course Indian meal with make-ahead tips and a complete shopping list.",
      date: "January 25, 2023",
      category: "Entertaining",
      imageSrc: "/placeholder.svg?height=400&width=600&text=Dinner+Party",
      readTime: "12 min read",
    },
    {
      id: 6,
      title: "Cooking with Children: Indian Recipes for Family Fun",
      excerpt:
        "Kid-friendly Indian recipes that introduce young chefs to new flavors while creating memorable family experiences.",
      date: "January 8, 2023",
      category: "Family",
      imageSrc: "/placeholder.svg?height=400&width=600&text=Cooking+with+Kids",
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
              src="/placeholder.svg?height=600&width=1200&text=Featured+Post"
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
            <Button className="bg-white text-gray-900 hover:bg-gray-100">Read Article</Button>
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

