"use client"

import { Cake, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Cake className="h-9 w-9 text-accent" />
          <span className="font-serif text-2xl md:text-3xl font-bold text-primary">Quitutes da Lily</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#categorias"
            className="text-base font-medium hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
          >
            Categorias
          </a>
          <a
            href="#produtos"
            className="text-base font-medium hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
          >
            Produtos
          </a>
          <a
            href="#contato"
            className="text-base font-medium hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
          >
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-md hover:shadow-lg transition-all"
            onClick={() => window.open("https://wa.me/862468796?text=Olá! Gostaria de fazer um pedido", "_blank")}
          >
            Fazer Pedido
          </Button>

          <button
            className="md:hidden p-2 hover:bg-secondary/50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a
              href="#categorias"
              className="text-base font-medium hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Categorias
            </a>
            <a
              href="#produtos"
              className="text-base font-medium hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Produtos
            </a>
            <a
              href="#contato"
              className="text-base font-medium hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
