import { Award, Heart, Clock, Star } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Ingredientes selecionados e receitas artesanais testadas",
  },
  {
    icon: Heart,
    title: "Feito com Amor",
    description: "Cada produto é preparado com carinho e dedicação",
  },
  {
    icon: Clock,
    title: "Sempre Frescos",
    description: "Produtos preparados diariamente para máxima qualidade",
  },
  {
    icon: Star,
    title: "Personalização",
    description: "Criamos produtos únicos para tornar seu momento especial",
  },
]

export function About() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">Por que nos escolher?</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Somos apaixonados por criar experiências doces inesquecíveis. Cada produto é uma obra de arte feita com
            ingredientes premium e muito carinho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
