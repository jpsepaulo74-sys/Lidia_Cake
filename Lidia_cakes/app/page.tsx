"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { Products } from "@/components/products"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("todos")

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Categories selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <Products selectedCategory={selectedCategory} />
      <Testimonials />
      <Footer />
    </main>
  )
}
