import Image from "next/image"
import Link from "next/link"
import { Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RecipesPage() {
  const recipeCategories = [
    { id: "all", label: "All Recipes" },
    { id: "vegetarian", label: "Vegetarian" },
    { id: "non-veg", label: "Non-Vegetarian" },
    { id: "desserts", label: "Desserts" },
    { id: "breads", label: "Breads" },
  ]

  const recipes = [
    {
      id: "saffron-biryani",
      title: "Saffron-Infused Chicken Biryani",
      description: "A royal and aromatic biryani with tender chicken, fragrant basmati rice, and the luxurious touch of saffron.",
      prepTime: "45 min",
      cookTime: "1 hour",
      servings: 6,
      difficulty: "Medium",
      category: "non-veg",
      imageSrc: "/Saffron-Infused-Biryani.jpg",
    },
    {
      id: "fusion-dessert-platter",
      title: "Indo-French Fusion Dessert Platter",
      description: "An elegant dessert platter combining Indian flavors with French pastry techniques.",
      prepTime: "2 hours",
      cookTime: "1 hour",
      servings: 8,
      difficulty: "Hard",
      category: "desserts",
      imageSrc: "/Fusion-Dessert-Platter.jpg",
    },
    {
      id: "coastal-curry",
      title: "Coastal Coconut Fish Curry",
      description: "A vibrant fish curry inspired by coastal India, with coconut milk and curry leaves.",
      prepTime: "20 min",
      cookTime: "25 min",
      servings: 4,
      difficulty: "Easy",
      category: "non-veg",
      imageSrc: "/Coastal-Curry-Selection.png",
    },
    {
      id: 4,
      title: "Artisanal Bread with Chutneys",
      description: "Fresh homemade bread paired with traditional Indian chutneys and preserves.",
      prepTime: "2 hours",
      cookTime: "45 min",
      servings: 6,
      difficulty: "Medium",
      category: "breads",
      imageSrc: "/Artisanal-Bread-&-Chutneys.png",
    },
    {
      id: 5,
      title: "Modern Thali Presentation",
      description: "Traditional Indian thali meal with contemporary plating and presentation techniques.",
      prepTime: "1 hour",
      cookTime: "1.5 hours",
      servings: 2,
      difficulty: "Medium",
      category: "vegetarian",
      imageSrc: "/Modern-Thali-Presentation.jpg",
    },
    {
      id: 6,
      title: "Spice-Rubbed Grilled Vegetables",
      description: "Seasonal vegetables marinated in aromatic spices and perfectly grilled.",
      prepTime: "30 min",
      cookTime: "20 min",
      servings: 4,
      difficulty: "Easy",
      category: "vegetarian",
      imageSrc: "/Spice-Rubbed-Grilled-Vegetables.png",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Chef Jyoti's Recipes</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          A collection of signature recipes from my kitchen to yours
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="mb-8 overflow-x-auto">
          <TabsList className="inline-flex w-auto">
            {recipeCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {recipeCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recipes
                .filter((recipe) => category.id === "all" || recipe.category === category.id)
                .map((recipe) => (
                  <Card key={recipe.id} className="overflow-hidden">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={recipe.imageSrc || "/placeholder.svg"}
                        alt={recipe.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="mb-2 font-serif text-xl font-bold">{recipe.title}</h3>
                      <p className="mb-4 text-gray-600">{recipe.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="mr-1 h-4 w-4" />
                          <span>Prep: {recipe.prepTime}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-4 w-4" />
                          <span>Cook: {recipe.cookTime}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-1 h-4 w-4" />
                          <span>Serves: {recipe.servings}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t p-6 pt-4">
                      <Link href={`/recipes/${recipe.id}`} className="w-full">
                        <Button className="w-full bg-amber-600 hover:bg-amber-700">View Recipe</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

