"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

interface Product {
  id: number
  name: string
  category: string
  price: string
  description: string
  image: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const handleOrder = () => {
    const message = `Olá! Gostaria de encomendar: ${product.name} - ${product.price}`
 const whatsappUrl = `https://wa.me/258862468796?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank")
  }

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-border/50">
      <div className="relative aspect-square overflow-hidden bg-secondary/30">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-3 line-clamp-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
        <p className="text-2xl md:text-3xl font-bold text-accent">{product.price}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 shadow-md hover:shadow-lg transition-all"
          onClick={handleOrder}
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Encomendar
        </Button>
      </CardFooter>
    </Card>
  )
}
