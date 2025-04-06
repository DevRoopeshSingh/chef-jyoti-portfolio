import { ChefHat } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <ChefHat className="h-8 w-8 text-amber-600" />
        <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-red-500"></div>
      </div>
      <span className="font-serif text-xl font-bold">Chef Jyoti</span>
    </div>
  )
}

