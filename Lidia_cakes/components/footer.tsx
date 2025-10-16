import { Cake, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Sobre */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Cake className="h-10 w-10" />
            <span className="font-serif text-3xl font-bold">Doce Encanto</span>
          </div>
          <p className="text-primary-foreground/80 leading-relaxed text-lg">
            Transformando momentos especiais em memórias deliciosas desde 2020. Qualidade, sabor e carinho em cada
            produto.
          </p>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-serif text-2xl font-bold mb-6">Contato</h3>
          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/843962791"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-lg"
            >
              <Phone className="h-5 w-5" />
              843962791 / 870657579
            </a>
            <a
              href="mailto:jpsepaulo74@gmail.com"
              className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-lg"
            >
              <Mail className="h-5 w-5" />
              Quitutes_da_lily@gmail.com
            </a>
            <div className="flex items-center gap-3 text-primary-foreground/80 text-lg">
              <MapPin className="h-5 w-5" />
              Maputo / Bairro Ferroviário
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-serif text-2xl font-bold mb-6">Redes Sociais</h3>
          <p className="text-primary-foreground/80 mb-6 leading-relaxed">
            Siga-nos para ver nossas criações e novidades
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all hover:scale-110"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all hover:scale-110"
            >
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
