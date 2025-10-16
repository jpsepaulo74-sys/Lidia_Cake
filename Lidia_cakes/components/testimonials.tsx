import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    text: "O bolo de casamento ficou perfeito! Superou todas as expectativas. Todos os convidados elogiaram o sabor e a decoração impecável.",
    rating: 5,
  },
  {
    id: 2,
    name: "João Santos",
    text: "Os bolos no pote são viciantes! Peço toda semana. A qualidade é excepcional e o atendimento é sempre muito atencioso.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ana Costa",
    text: "Fiz o bolo de aniversário da minha filha e foi um sucesso! Lindo, delicioso e entregue no horário combinado. Recomendo muito!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">O que dizem nossos clientes</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos clientes é nossa maior recompensa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-primary">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
