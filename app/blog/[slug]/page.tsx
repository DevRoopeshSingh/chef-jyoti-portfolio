"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
  category: string
  readTime: string
}

const blogPosts: BlogPost[] = [
  {
    id: "spice-journey-india",
    title: "A Journey Through Indian Spices",
    excerpt: "Discover the art of spice blending and how different regions of India create unique flavor profiles.",
    content: `Indian cuisine is renowned worldwide for its complex and aromatic spice blends. Each region of India has developed its own unique approach to spicing, creating a diverse culinary landscape that reflects the country's rich cultural heritage.

The foundation of Indian cooking lies in understanding how spices work together. The concept of "masala" - a blend of spices - is central to Indian cuisine. From the warming garam masala of North India to the curry leaves and coconut of the South, each region tells its story through spices.

## The Art of Tempering

One of the most important techniques in Indian cooking is tempering, or "tadka." This involves heating whole spices in oil to release their essential oils and create a aromatic base for the dish. Common tempering spices include cumin seeds, mustard seeds, curry leaves, and dried chilies.

## Regional Variations

**North Indian Spicing**: Characterized by warming spices like cinnamon, cardamom, and cloves. The famous garam masala blend typically includes these spices along with black peppercorns and bay leaves.

**South Indian Spicing**: Features more coconut, curry leaves, and tamarind. The spice blends tend to be more acidic and include ingredients like fenugreek and asafoetida.

**Bengali Spicing**: Known for the panch phoron (five-spice) blend consisting of cumin, fennel, fenugreek, nigella, and mustard seeds.

## Tips for Home Cooks

1. Always buy whole spices when possible and grind them fresh
2. Store spices in airtight containers away from light and heat
3. Toast whole spices before grinding for maximum flavor
4. Layer spices throughout the cooking process for depth

Understanding spices is understanding the soul of Indian cuisine. Each spice has its place and purpose, contributing to the symphony of flavors that makes Indian food so beloved worldwide.`,
    image: "/Coastal-Curry-Selection.png",
    author: "Chef Jyoti",
    date: "2024-01-15",
    category: "Techniques",
    readTime: "8 min read"
  },
  {
    id: "fusion-desserts-guide",
    title: "Creating Fusion Desserts: East Meets West",
    excerpt: "Learn how to blend traditional Indian sweets with Western dessert techniques for innovative creations.",
    content: `Fusion desserts represent the beautiful marriage of traditional Indian flavors with Western pastry techniques. This approach allows us to honor cultural heritage while creating something entirely new and exciting.

The key to successful fusion desserts lies in understanding both the flavor profiles of Indian sweets and the technical aspects of Western pastry making. By combining these elements thoughtfully, we can create desserts that surprise and delight.

## Understanding Flavor Combinations

Indian desserts often feature flavors like cardamom, rose water, saffron, pistachios, and various milk-based preparations. These can be beautifully incorporated into Western dessert formats like mousses, tarts, and layer cakes.

Some successful combinations include:
- Cardamom crème brûlée with pistachio tuile
- Gulab jamun cheesecake with rose water reduction
- Kulfi ice cream profiteroles with saffron caramel
- Masala chai tiramisu with spiced ladyfingers

## Techniques for Success

**Balancing Sweetness**: Indian desserts tend to be quite sweet, while Western palates often prefer more balanced flavors. Adjust sugar levels and add elements like citrus or salt to create harmony.

**Texture Play**: Combine the creamy, soft textures common in Indian sweets with crispy, crunchy elements from Western pastry traditions.

**Visual Appeal**: Use traditional Indian colors like saffron gold, pistachio green, and rose pink to create visually stunning presentations.

## Signature Fusion Desserts

**Ras Malai Tres Leches**: A twist on the classic tres leches cake using the flavors of ras malai - cardamom, pistachios, and rose.

**Kheer Panna Cotta**: Italian panna cotta technique with the flavors of Indian rice kheer, garnished with caramelized nuts.

**Jalebi Churros**: Spanish churros shaped like jalebis and dusted with cardamom sugar, served with saffron chocolate sauce.

The beauty of fusion desserts lies in their ability to tell a story - bridging cultures and creating new traditions while honoring the old.`,
    image: "/Fusion-Dessert-Platter.jpg",
    author: "Chef Jyoti",
    date: "2024-01-10",
    category: "Innovation",
    readTime: "6 min read"
  },
  {
    id: "seasonal-cooking-tips",
    title: "Seasonal Cooking: Making the Most of Fresh Ingredients",
    excerpt: "Discover how to adapt your cooking to seasonal ingredients for maximum flavor and nutritional value.",
    content: `Seasonal cooking is about more than just using what's available - it's about understanding how ingredients change throughout the year and adapting our cooking methods to highlight their best qualities.

When we cook seasonally, we're working with ingredients at their peak flavor and nutritional value. This approach not only results in better-tasting food but also connects us to the natural rhythm of the earth.

## Spring Cooking

Spring is the time of new growth and fresh beginnings. Ingredients are tender and delicate, requiring gentle cooking methods that preserve their subtle flavors.

**Key Spring Ingredients**:
- Asparagus, peas, artichokes
- Fresh herbs like mint, cilantro, dill
- Young garlic, spring onions
- Early greens and lettuces

**Cooking Techniques**: Light sautéing, steaming, raw preparations, and quick blanching work best for spring ingredients.

## Summer Abundance

Summer brings an abundance of fruits and vegetables at their peak. This is the time for fresh, vibrant preparations that require minimal cooking.

**Key Summer Ingredients**:
- Tomatoes, cucumbers, bell peppers
- Stone fruits like peaches, plums
- Fresh corn, zucchini, eggplant
- Berries and melons

**Cooking Techniques**: Grilling, raw preparations, light cooking, and preservation methods like pickling.

## Fall Harvest

Fall is harvest time, bringing heartier ingredients that can stand up to more robust cooking methods.

**Key Fall Ingredients**:
- Root vegetables, squashes, apples
- Cruciferous vegetables like cauliflower, Brussels sprouts
- Nuts and seeds
- Late-season herbs

**Cooking Techniques**: Roasting, braising, slow cooking, and preservation.

## Winter Comfort

Winter calls for warming, nourishing foods that provide comfort during the cold months.

**Key Winter Ingredients**:
- Hearty greens like kale, collards
- Citrus fruits, pomegranates
- Stored root vegetables
- Dried legumes and grains

**Cooking Techniques**: Slow braising, soups, stews, and warming spice preparations.

## Tips for Seasonal Success

1. Shop at farmers' markets to connect with what's truly in season
2. Learn to preserve abundance for leaner months
3. Adapt favorite recipes to use seasonal substitutions
4. Let the season guide your menu planning

Seasonal cooking teaches us patience and appreciation for nature's timing, resulting in more flavorful, nutritious, and sustainable meals.`,
    image: "/Spice-Rubbed-Grilled-Vegetables.png",
    author: "Chef Jyoti",
    date: "2024-01-05",
    category: "Techniques",
    readTime: "7 min read"
  }
]

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find(p => p.id === slug)
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
        <Link href="/blog">
          <Button className="bg-amber-600 hover:bg-amber-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <Link href="/blog" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
        
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>
          
          <div className="flex items-center gap-6 text-gray-500">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative h-96 md:h-[500px] mb-8 rounded-lg overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        {post.content.split('\n\n').map((paragraph, index) => {
          if (paragraph.startsWith('## ')) {
            return (
              <h2 key={index} className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">
                {paragraph.replace('## ', '')}
              </h2>
            )
          } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
            return (
              <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                {paragraph.replace(/\*\*/g, '')}
              </h3>
            )
          } else if (paragraph.includes('- ')) {
            const listItems = paragraph.split('\n').filter(item => item.startsWith('- '))
            return (
              <ul key={index} className="list-disc pl-6 mb-6">
                {listItems.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-2">
                    {item.replace('- ', '')}
                  </li>
                ))}
              </ul>
            )
          } else if (paragraph.includes(': ')) {
            const listItems = paragraph.split('\n').filter(item => item.includes(': '))
            return (
              <div key={index} className="mb-6">
                {listItems.map((item, itemIndex) => {
                  const [term, definition] = item.split(': ')
                  return (
                    <div key={itemIndex} className="mb-3">
                      <strong className="text-gray-900">{term}:</strong>{' '}
                      <span className="text-gray-700">{definition}</span>
                    </div>
                  )
                })}
              </div>
            )
          } else {
            return (
              <p key={index} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            )
          }
        })}
      </div>

      {/* Call to Action */}
      <Card className="mt-12 bg-amber-50 border-amber-200">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            Want to Learn More?
          </h3>
          <p className="text-gray-600 mb-6">
            Book a culinary workshop with Chef Jyoti to master these techniques hands-on.
          </p>
          <Link href="/booking">
            <Button className="bg-amber-600 hover:bg-amber-700">
              Book a Workshop
            </Button>
          </Link>
        </CardContent>
      </Card>
    </article>
  )
}