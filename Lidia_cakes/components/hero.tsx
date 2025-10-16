"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/beautiful-colorful-artisan-bakery-display-with-dec.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/40" />
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-2xl space-y-8">
          <div className="inline-block px-4 py-2 bg-accent/20 rounded-full border border-accent/30 backdrop-blur-md">
            <p className="text-sm font-medium text-accent">✨ Feito com amor e dedicação</p>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary text-balance leading-[1.1] drop-shadow-lg">
            Doces momentos
            <span className="block text-accent mt-2">começam aqui</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/90 text-pretty leading-relaxed drop-shadow-md">
            Transformamos ingredientes selecionados em experiências inesquecíveis. Cada bolo, doce e biscoito é
            preparado artesanalmente para adoçar seus momentos especiais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all hover:scale-105"
              onClick={() => document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explorar Produtos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 h-auto border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-md hover:shadow-lg transition-all bg-background/90 backdrop-blur-md"
              onClick={() => window.open("https://wa.me/862468796?text=Olá! Gostaria de fazer um pedido", "_blank")}
            >
              Fazer Pedido
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground pt-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span className="drop-shadow">Entrega rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span className="drop-shadow">Ingredientes frescos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span className="drop-shadow">Feito sob encomenda</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="h-8 w-8 text-accent/60" />
      </div>
    </section>
  )
}
