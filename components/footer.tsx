import Link from "next/link"
import { Instagram, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">SG</span>
              </div>
              <span className="font-bold text-xl text-background">
                Samuel <span className="text-secondary">Grill</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              La mejor comida rápida que deleita tu paladar. Sabor colombiano auténtico en cada bocado.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-secondary">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-background/70 hover:text-secondary transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#menu" className="text-background/70 hover:text-secondary transition-colors text-sm">
                  Menú
                </Link>
              </li>
              <li>
                <Link href="#ubicacion" className="text-background/70 hover:text-secondary transition-colors text-sm">
                  Ubicación
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-background/70 hover:text-secondary transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-secondary">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:+573135591473" className="hover:text-secondary transition-colors">
                  +57 313 559 1473
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                <span>Calle 68 #26B-64<br />Barranquilla, Colombia</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-secondary">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/samuelgrill_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-background group-hover:text-primary-foreground" />
              </a>
            </div>
            <p className="text-background/70 text-sm mt-4">
              @samuelgrill_
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Samuel Grill. Todos los derechos reservados.
          </p>
          <p className="text-background/50 text-sm">
            Hecho con ❤️ en Barranquilla
          </p>
        </div>
      </div>
    </footer>
  )
}
