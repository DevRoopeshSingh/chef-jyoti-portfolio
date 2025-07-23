"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Users, ChefHat } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Recipe {
  id: string
  title: string
  description: string
  image: string
  prepTime: string
  cookTime: string
  totalTime: string
  servings: number
  difficulty: "Easy" | "Medium" | "Hard"
  cuisine: string
  ingredients: Array<{
    amount: string
    item: string
  }>
  instructions: string[]
  tips: string[]
  nutrition?: {
    calories: number
    protein: string
    carbs: string
    fat: string
  }
}

const recipes: Recipe[] = [
  {
    id: "saffron-biryani",
    title: "Saffron-Infused Chicken Biryani",
    description: "A royal and aromatic biryani with tender chicken, fragrant basmati rice, and the luxurious touch of saffron. This recipe combines traditional techniques with modern presentation.",
    image: "/Saffron-Infused-Biryani.jpg",
    prepTime: "45 mins",
    cookTime: "1 hour",
    totalTime: "1 hour 45 mins",
    servings: 6,
    difficulty: "Medium",
    cuisine: "Indian",
    ingredients: [
      { amount: "2 cups", item: "Basmati rice" },
      { amount: "1 kg", item: "Chicken, cut into pieces" },
      { amount: "1/2 cup", item: "Plain yogurt" },
      { amount: "2 large", item: "Onions, thinly sliced" },
      { amount: "1/4 cup", item: "Ghee" },
      { amount: "1 tsp", item: "Saffron threads" },
      { amount: "1/4 cup", item: "Warm milk" },
      { amount: "2", item: "Bay leaves" },
      { amount: "4-5", item: "Green cardamom pods" },
      { amount: "2", item: "Black cardamom pods" },
      { amount: "1 inch", item: "Cinnamon stick" },
      { amount: "4-5", item: "Cloves" },
      { amount: "1 tsp", item: "Cumin seeds" },
      { amount: "2 tbsp", item: "Ginger-garlic paste" },
      { amount: "1 tsp", item: "Red chili powder" },
      { amount: "1/2 tsp", item: "Turmeric powder" },
      { amount: "1 tsp", item: "Garam masala" },
      { amount: "To taste", item: "Salt" },
      { amount: "1/4 cup", item: "Fresh mint leaves" },
      { amount: "1/4 cup", item: "Fresh coriander leaves" },
      { amount: "2 tbsp", item: "Fried onions (birista)" }
    ],
    instructions: [
      "Soak basmati rice in water for 30 minutes, then drain.",
      "Soak saffron threads in warm milk and set aside.",
      "Marinate chicken with yogurt, half the ginger-garlic paste, red chili powder, turmeric, and salt. Let it rest for 30 minutes.",
      "Deep fry the sliced onions until golden brown and crispy. Drain and set aside.",
      "In a heavy-bottomed pot, heat ghee and add whole spices (bay leaves, cardamom, cinnamon, cloves, cumin seeds).",
      "Add the remaining ginger-garlic paste and cook for 1 minute.",
      "Add marinated chicken and cook on high heat for 8-10 minutes until chicken is 80% cooked.",
      "In another pot, boil water with salt and whole spices. Add rice and cook until 70% done. Drain.",
      "Layer the partially cooked rice over the chicken.",
      "Sprinkle fried onions, mint leaves, coriander leaves, and saffron milk on top.",
      "Cover the pot with aluminum foil, then place the lid tightly.",
      "Cook on high heat for 3-4 minutes, then reduce to low heat and cook for 45 minutes.",
      "Turn off heat and let it rest for 10 minutes before opening.",
      "Gently mix and serve hot with raita and boiled eggs."
    ],
    tips: [
      "Use aged basmati rice for the best texture and aroma.",
      "Don't overcook the rice in step 8 - it should be firm to bite.",
      "The dum cooking (slow cooking) is crucial for the flavors to develop.",
      "Let the biryani rest after cooking to allow the flavors to meld.",
      "Garnish with boiled eggs, fried onions, and fresh herbs before serving."
    ],
    nutrition: {
      calories: 520,
      protein: "28g",
      carbs: "45g",
      fat: "24g"
    }
  },
  {
    id: "fusion-dessert-platter",
    title: "Indo-French Fusion Dessert Platter",
    description: "An elegant dessert platter combining Indian flavors like cardamom, rose, and pistachios with French pastry techniques.",
    image: "/Fusion-Dessert-Platter.jpg",
    prepTime: "2 hours",
    cookTime: "1 hour",
    totalTime: "3 hours",
    servings: 8,
    difficulty: "Hard",
    cuisine: "Fusion",
    ingredients: [
      { amount: "For Cardamom Crème Brûlée:", item: "" },
      { amount: "2 cups", item: "Heavy cream" },
      { amount: "6", item: "Egg yolks" },
      { amount: "1/3 cup", item: "Sugar" },
      { amount: "1 tsp", item: "Cardamom powder" },
      { amount: "2 tbsp", item: "Brown sugar for topping" },
      { amount: "For Rose Macarons:", item: "" },
      { amount: "100g", item: "Almond flour" },
      { amount: "175g", item: "Powdered sugar" },
      { amount: "75g", item: "Egg whites" },
      { amount: "75g", item: "Granulated sugar" },
      { amount: "1 tsp", item: "Rose water" },
      { amount: "Pink food coloring", item: "" },
      { amount: "For Pistachio Kulfi:", item: "" },
      { amount: "1 cup", item: "Heavy cream" },
      { amount: "1 cup", item: "Whole milk" },
      { amount: "1/3 cup", item: "Sugar" },
      { amount: "1/2 cup", item: "Pistachios, blanched" },
      { amount: "1 tbsp", item: "Cornstarch" }
    ],
    instructions: [
      "For Cardamom Crème Brûlée: Preheat oven to 325°F (160°C).",
      "Heat cream with cardamom powder in a saucepan until simmering.",
      "Whisk egg yolks with sugar until pale. Gradually add warm cream while whisking.",
      "Strain mixture and pour into ramekins. Bake in water bath for 35-40 minutes.",
      "Chill for at least 2 hours. Before serving, sprinkle with brown sugar and torch.",
      "For Rose Macarons: Sift almond flour and powdered sugar together.",
      "Whip egg whites to soft peaks, gradually add granulated sugar, whip to stiff peaks.",
      "Add rose water and food coloring. Fold in almond flour mixture in three additions.",
      "Pipe circles on parchment paper, let sit for 30 minutes to form skin.",
      "Bake at 300°F (150°C) for 15-18 minutes. Cool completely before removing.",
      "For Pistachio Kulfi: Blend pistachios with a little milk to make smooth paste.",
      "Heat remaining milk and cream, add sugar and pistachio paste.",
      "Mix cornstarch with water, add to milk mixture, cook until thickened.",
      "Pour into molds and freeze for 4-6 hours.",
      "Arrange all desserts on a platter with fresh rose petals and chopped pistachios."
    ],
    tips: [
      "Make each component ahead of time for easier assembly.",
      "Use high-quality ingredients for the best flavor.",
      "Chill all serving plates before plating for better presentation.",
      "Garnish with edible flowers and gold leaf for special occasions.",
      "Serve immediately after plating to maintain textures."
    ],
    nutrition: {
      calories: 420,
      protein: "8g",
      carbs: "35g",
      fat: "28g"
    }
  },
  {
    id: "coastal-curry",
    title: "Coastal Coconut Fish Curry",
    description: "A vibrant and aromatic fish curry inspired by the coastal regions of India, featuring coconut milk, curry leaves, and fresh spices.",
    image: "/Coastal-Curry-Selection.png",
    prepTime: "20 mins",
    cookTime: "25 mins",
    totalTime: "45 mins",
    servings: 4,
    difficulty: "Easy",
    cuisine: "Indian Coastal",
    ingredients: [
      { amount: "500g", item: "White fish fillets (kingfish or pomfret)" },
      { amount: "1 cup", item: "Coconut milk" },
      { amount: "1/2 cup", item: "Coconut cream" },
      { amount: "2 tbsp", item: "Coconut oil" },
      { amount: "1 large", item: "Onion, sliced" },
      { amount: "3-4", item: "Green chilies, slit" },
      { amount: "15-20", item: "Fresh curry leaves" },
      { amount: "1 tbsp", item: "Ginger-garlic paste" },
      { amount: "2", item: "Tomatoes, chopped" },
      { amount: "1 tsp", item: "Turmeric powder" },
      { amount: "2 tsp", item: "Coriander powder" },
      { amount: "1 tsp", item: "Red chili powder" },
      { amount: "1 tsp", item: "Garam masala" },
      { amount: "To taste", item: "Salt" },
      { amount: "2 tbsp", item: "Tamarind paste" },
      { amount: "For garnish", item: "Fresh coriander leaves" }
    ],
    instructions: [
      "Cut fish into medium-sized pieces and marinate with turmeric, salt, and a little red chili powder.",
      "Heat coconut oil in a wide pan over medium heat.",
      "Add curry leaves and let them splutter, then add sliced onions.",
      "Sauté onions until golden brown, about 5-6 minutes.",
      "Add ginger-garlic paste and green chilies, cook for 1 minute.",
      "Add chopped tomatoes and cook until they break down, about 5 minutes.",
      "Add all dry spices (turmeric, coriander powder, red chili powder, garam masala) and cook for 30 seconds.",
      "Pour in coconut milk and tamarind paste, bring to a gentle simmer.",
      "Gently add the marinated fish pieces to the simmering curry.",
      "Cook for 8-10 minutes without stirring too much to prevent fish from breaking.",
      "Add coconut cream in the last 2 minutes of cooking.",
      "Taste and adjust salt and spice levels.",
      "Garnish with fresh curry leaves and coriander leaves.",
      "Serve hot with steamed rice or appam."
    ],
    tips: [
      "Use fresh fish for the best flavor and texture.",
      "Don't overcook the fish to prevent it from becoming tough.",
      "Fresh curry leaves make a huge difference in flavor.",
      "Adjust the consistency with water if the curry is too thick.",
      "Add a squeeze of lime juice before serving for extra freshness."
    ],
    nutrition: {
      calories: 280,
      protein: "24g",
      carbs: "8g",
      fat: "18g"
    }
  }
]

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const recipe = recipes.find(r => r.id === slug)
  
  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Recipe Not Found</h1>
        <p className="text-gray-600 mb-8">The recipe you're looking for doesn't exist.</p>
        <Link href="/recipes">
          <Button className="bg-amber-600 hover:bg-amber-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Recipes
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <Link href="/recipes" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Recipes
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recipe Image */}
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Recipe Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{recipe.cuisine}</Badge>
              <Badge variant={recipe.difficulty === "Easy" ? "default" : recipe.difficulty === "Medium" ? "secondary" : "destructive"}>
                {recipe.difficulty}
              </Badge>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              {recipe.title}
            </h1>
            
            <p className="text-lg text-gray-600 mb-6">{recipe.description}</p>
            
            {/* Recipe Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <Clock className="h-5 w-5 mx-auto text-amber-600 mb-1" />
                <div className="text-sm font-medium">Prep Time</div>
                <div className="text-sm text-gray-600">{recipe.prepTime}</div>
              </div>
              <div className="text-center">
                <ChefHat className="h-5 w-5 mx-auto text-amber-600 mb-1" />
                <div className="text-sm font-medium">Cook Time</div>
                <div className="text-sm text-gray-600">{recipe.cookTime}</div>
              </div>
              <div className="text-center">
                <Clock className="h-5 w-5 mx-auto text-amber-600 mb-1" />
                <div className="text-sm font-medium">Total Time</div>
                <div className="text-sm text-gray-600">{recipe.totalTime}</div>
              </div>
              <div className="text-center">
                <Users className="h-5 w-5 mx-auto text-amber-600 mb-1" />
                <div className="text-sm font-medium">Servings</div>
                <div className="text-sm text-gray-600">{recipe.servings}</div>
              </div>
            </div>

            {/* Nutrition Info */}
            {recipe.nutrition && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Nutrition (per serving)</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="font-semibold text-amber-600">{recipe.nutrition.calories}</div>
                    <div className="text-sm text-gray-600">Calories</div>
                  </div>
                  <div>
                    <div className="font-semibold text-amber-600">{recipe.nutrition.protein}</div>
                    <div className="text-sm text-gray-600">Protein</div>
                  </div>
                  <div>
                    <div className="font-semibold text-amber-600">{recipe.nutrition.carbs}</div>
                    <div className="text-sm text-gray-600">Carbs</div>
                  </div>
                  <div>
                    <div className="font-semibold text-amber-600">{recipe.nutrition.fat}</div>
                    <div className="text-sm text-gray-600">Fat</div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Recipe Content */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Ingredients */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ChefHat className="h-5 w-5 text-amber-600" />
              Ingredients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex justify-between">
                  {ingredient.item ? (
                    <>
                      <span className="font-medium text-amber-700">{ingredient.amount}</span>
                      <span>{ingredient.item}</span>
                    </>
                  ) : (
                    <span className="font-semibold text-gray-900 col-span-2">{ingredient.amount}</span>
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Instructions & Tips */}
        <div className="lg:col-span-2 space-y-6">
          {/* Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </span>
                    <p className="text-gray-700">{instruction}</p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          {/* Chef's Tips */}
          <Card className="bg-amber-50 border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-800">Chef's Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-amber-700">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gray-900 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Want to Master This Recipe?
              </h3>
              <p className="text-gray-300 mb-6">
                Join Chef Jyoti for a hands-on cooking workshop and learn the secrets behind authentic Indian cuisine.
              </p>
              <Link href="/booking">
                <Button className="bg-amber-600 hover:bg-amber-700">
                  Book a Cooking Workshop
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}