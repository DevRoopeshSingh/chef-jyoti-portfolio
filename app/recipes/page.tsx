import Image from "next/image"
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
      id: 1,
      title: "Butter Chicken",
      description: "Tender chicken in a rich, creamy tomato sauce with aromatic spices.",
      prepTime: "30 min",
      cookTime: "45 min",
      servings: 4,
      difficulty: "Medium",
      category: "non-veg",
      imageSrc: "/placeholder.svg?height=400&width=600&text=Butter+Chicken",
    },
    {
      id: 2,
      title: "Palak Paneer",
      description: "Cottage cheese cubes in a smooth, spiced spinach gravy.",
      prepTime: "20 min",
      cookTime: "30 min",
      servings: 4,
      difficulty: "Easy",
      category: "vegetarian",
      imageSrc: "/placeholder.svg?height=400&width=600&text=Palak+Paneer",
    },
    {
      id: 3,
      title: "Naan Bread",
      description: "Soft, fluffy flatbread perfect for scooping up curries and dals.",
      prepTime: "1 hour",
      cookTime: "15 min",
      servings: 6,
      difficulty: "Medium",
      category: "breads",
      imageSrc: "/placeholder.svg?height=400&width=600&text=Naan+Bread",
    },
    {
      id: 4,
      title: "Gulab Jamun",
      description: "Soft milk solids dumplings soaked in aromatic sugar syrup.",
      prepTime: "30 min",
      cookTime: "20 min",
      servings: 8,
      difficulty: "Medium",
      category: "desserts",
      imageSrc: "/placeholder.svg?height=400&width=600&text=Gulab+Jamun",
    },
    {
      id: 5,
      title: "Chana Masala",
      description: "Spiced chickpeas in a tangy tomato sauce, a popular street food.",
      prepTime: "15 min",
      cookTime: "30 min",
      servings: 4,
      difficulty: "Easy",
      category: "vegetarian",
      imageSrc: "/placeholder.svg?height=400&width=600&text=Chana+Masala",
    },
    {
      id: 6,
      title: "Tandoori Chicken",
      description: "Chicken marinated in yogurt and spices, traditionally cooked in a clay oven.",
      prepTime: "4 hours",
      cookTime: "40 min",
      servings: 4,
      difficulty: "Medium",
      category: "non-veg",
      imageSrc: "/placeholder.svg?height=400&width=600&text=Tandoori+Chicken",
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
                      <Button className="w-full bg-amber-600 hover:bg-amber-700">View Recipe</Button>
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

