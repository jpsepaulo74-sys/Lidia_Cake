import { ProductCard } from "@/components/product-card"

const products = [
  // Bolo no Pote - 4 produtos
  {
    id: 1,
    name: "Bolo no Pote Brigadeiro",
    category: "bolo-pote",
    price: "300 MT",
    description: "Delicioso bolo de chocolate com brigadeiro cremoso em camadas",
    image: "/chocolate-cake-in-glass-jar-with-brigadeiro-layers.jpg",
  },
  {
    id: 2,
    name: "Bolo no Pote Morango",
    category: "bolo-pote",
    price: "300 MT",
    description: "Bolo de baunilha com morangos frescos e chantilly",
    image: "/strawberry-vanilla-cake-in-glass-jar-with-whipped-.jpg",
  },
  {
    id: 3,
    name: "Bolo no Pote Ninho",
    category: "bolo-pote",
    price: "350 MT",
    description: "Bolo branco com recheio de leite ninho cremoso",
    image: "/white-cake-in-glass-jar-with-creamy-milk-filling.jpg",
  },
  {
    id: 4,
    name: "Bolo no Pote Red Velvet",
    category: "bolo-pote",
    price: "400 MT",
    description: "Bolo red velvet com cream cheese em camadas",
    image: "/red-velvet-cake-in-glass-jar-with-cream-cheese-lay.jpg",
  },
  // Casamento - 4 produtos
  {
    id: 5,
    name: "Bolo de Casamento Clássico",
    category: "casamento",
    price: "A partir de 12.500 MT",
    description: "Bolo elegante de 3 andares com decoração clássica em branco",
    image: "/elegant-three-tier-white-wedding-cake-with-classic.jpg",
  },
  {
    id: 6,
    name: "Bolo de Casamento Rústico",
    category: "casamento",
    price: "A partir de 13.500 MT",
    description: "Bolo semi-naked com flores naturais e estilo rústico",
    image: "/rustic-semi-naked-wedding-cake-with-fresh-flowers.jpg",
  },
  {
    id: 7,
    name: "Bolo de Casamento Moderno",
    category: "casamento",
    price: "A partir de 15.000 MT",
    description: "Design contemporâneo com detalhes em dourado e flores",
    image: "/modern-wedding-cake-with-gold-details-and-flowers.jpg",
  },
  {
    id: 8,
    name: "Bolo de Casamento Romântico",
    category: "casamento",
    price: "A partir de 16.000 MT",
    description: "Bolo romântico decorado com flores comestíveis delicadas",
    image: "/romantic-wedding-cake-with-delicate-edible-flowers.jpg",
  },
  // Aniversário - 4 produtos
  {
    id: 9,
    name: "Bolo de Aniversário Personalizado",
    category: "aniversario",
    price: "A partir de 2.000 MT",
    description: "Bolo decorado personalizado para sua festa especial",
    image: "/decorated-birthday-cake-with-colorful-frosting-and.jpg",
  },
  {
    id: 10,
    name: "Bolo de Aniversário Infantil",
    category: "aniversario",
    price: "A partir de 2.200 MT",
    description: "Bolos temáticos para festas infantis com personagens",
    image: "/kids-birthday-cake-with-cartoon-characters-and-bri.jpg",
  },
  {
    id: 11,
    name: "Bolo de Aniversário Adulto",
    category: "aniversario",
    price: "A partir de 2.500 MT",
    description: "Designs sofisticados para celebrações adultas",
    image: "/elegant-sophisticated-adult-birthday-cake.jpg",
  },
  {
    id: 12,
    name: "Bolo de Aniversário Temático",
    category: "aniversario",
    price: "A partir de 3.000 MT",
    description: "Bolos com temas especiais e decoração elaborada",
    image: "/themed-birthday-cake-with-elaborate-decorations.jpg",
  },
  // Eventos - 4 produtos
  {
    id: 13,
    name: "Bolo para Eventos Corporativos",
    category: "eventos",
    price: "Sob consulta",
    description: "Bolos personalizados para eventos empresariais",
    image: "/corporate-event-cake-with-company-logo-professiona.jpg",
  },
  {
    id: 14,
    name: "Bolo para Formatura",
    category: "eventos",
    price: "A partir de 3.000 MT",
    description: "Bolos temáticos para celebrar conquistas acadêmicas",
    image: "/graduation-themed-celebration-cake-with-cap-and-di.jpg",
  },
  {
    id: 15,
    name: "Bolo para Chá de Bebê",
    category: "eventos",
    price: "A partir de 2.500 MT",
    description: "Bolos delicados para celebrar a chegada do bebê",
    image: "/baby-shower-cake-with-pastel-colors-and-cute-decor.jpg",
  },
  {
    id: 16,
    name: "Bolo para Bodas",
    category: "eventos",
    price: "A partir de 3.500 MT",
    description: "Bolos elegantes para celebrar aniversários de casamento",
    image: "/elegant-anniversary-wedding-cake-with-gold-details.jpg",
  },
  // Biscoitos - 4 produtos
  {
    id: 17,
    name: "Biscoitos Amanteigados",
    category: "biscoitos",
    price: "600 MT/kg",
    description: "Biscoitos crocantes e amanteigados que derretem na boca",
    image: "/buttery-shortbread-cookies-golden-and-crispy.jpg",
  },
  {
    id: 18,
    name: "Biscoitos Decorados",
    category: "biscoitos",
    price: "120 MT/unid",
    description: "Biscoitos decorados artesanalmente para todas as ocasiões",
    image: "/decorated-sugar-cookies-with-colorful-icing.jpg",
  },
  {
    id: 19,
    name: "Cookies Americanos",
    category: "biscoitos",
    price: "150 MT/unid",
    description: "Cookies macios com gotas de chocolate",
    image: "/soft-chocolate-chip-cookies-american-style.jpg",
  },
  {
    id: 20,
    name: "Biscoitos de Mel",
    category: "biscoitos",
    price: "700 MT/kg",
    description: "Biscoitos aromáticos com mel e especiarias",
    image: "/honey-spice-cookies-aromatic-and-golden.jpg",
  },
]

interface ProductsProps {
  selectedCategory: string
}

export function Products({ selectedCategory }: ProductsProps) {
  const filteredProducts =
    selectedCategory === "todos" ? products : products.filter((product) => product.category === selectedCategory)

  const getCategoryTitle = () => {
    switch (selectedCategory) {
      case "bolo-pote":
        return "Bolo no Pote"
      case "casamento":
        return "Bolos de Casamento"
      case "aniversario":
        return "Bolos de Aniversário"
      case "eventos":
        return "Bolos para Eventos"
      case "biscoitos":
        return "Biscoitos Artesanais"
      default:
        return "Todos os Produtos"
    }
  }

  return (
    <section id="produtos" className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">{getCategoryTitle()}</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {selectedCategory === "todos"
              ? "Cada produto é feito com amor e ingredientes de qualidade premium"
              : "Produtos selecionados especialmente para você"}
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">Nenhum produto encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
