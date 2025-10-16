"use client"

import { Cake, Cookie, PartyPopper, Sparkles, Heart, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
  { id: "todos", name: "Todos", icon: Sparkles },
  { id: "bolo-pote", name: "Bolo no Pote", icon: Cake },
  { id: "casamento", name: "Casamento", icon: Heart },
  { id: "aniversario", name: "Aniversário", icon: PartyPopper },
  { id: "eventos", name: "Eventos", icon: Gift },
  { id: "biscoitos", name: "Biscoitos", icon: Cookie },
]

interface CategoriesProps {
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
  return (
    <section id="categorias" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Nossas Categorias</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore nossa variedade de produtos artesanais
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={cn(
                  "flex items-center gap-2 px-6 py-6 text-base transition-all",
                  selectedCategory === category.id
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg scale-105"
                    : "border-border hover:border-accent hover:text-accent",
                )}
                onClick={() => {
                  onSelectCategory(category.id)
                  // Scroll to products section
                  document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <Icon className="h-5 w-5" />
                {category.name}
              </Button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
