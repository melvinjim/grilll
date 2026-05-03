"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Flame } from "lucide-react"

const menuItems = [
  {
    id: 1,
    name: "Arepa Rellena de Carne",
    description: "Deliciosa arepa crujiente rellena de carne desmechada, queso fundido y salsas especiales",
    price: 12000,
    image: "/images/arepa.jpg",
    popular: true,
  },
  {
    id: 2,
    name: "Patacón Mixto",
    description: "Patacón gigante con carne, pollo, queso, salsas rosada y tártara, vegetales frescos",
    price: 18000,
    image: "/images/patacon.jpg",
    popular: true,
  },
  {
    id: 3,
    name: "Salchipapa Especial",
    description: "Papas fritas crujientes con salchicha, chorizo, queso derretido y todas las salsas",
    price: 15000,
    image: "/images/salchipapa.jpg",
    popular: false,
  },
  {
    id: 4,
    name: "Desgranado Costeño",
    description: "Maíz desgranado con pollo, carne, chorizo, queso y salsa rosada al estilo costeño",
    price: 16000,
    image: "/images/desgranado.jpg",
    popular: false,
  },
  {
    id: 5,
    name: "Arepa de Pollo",
    description: "Arepa rellena de pollo desmechado con queso, aguacate y salsas de la casa",
    price: 12000,
    image: "/images/arepa.jpg",
    popular: false,
  },
  {
    id: 6,
    name: "Super Patacón",
    description: "Nuestro patacón más grande con triple proteína: carne, pollo y chorizo",
    price: 25000,
    image: "/images/patacon.jpg",
    popular: true,
  },
]

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price)
}

export function MenuSection() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Nuestro Menú
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Sabores que te <span className="text-primary">Encantarán</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Preparados con ingredientes frescos y el sazón costeño que nos caracteriza. 
            ¡Cada plato es una explosión de sabor!
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuItems.map((item) => (
            <Card
              key={item.id}
              className="group bg-card border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.popular && (
                  <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Flame className="w-3 h-3" />
                    Popular
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  {formatPrice(item.price)}
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-bold text-card-foreground mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{item.description}</p>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  <a
                    href={`https://wa.me/573135591473?text=${encodeURIComponent(`Hola, estoy interesado en "${item.name}"`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pedir este plato
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            No encuentras lo que buscas? Contactanos y pregunta por nuestras opciones especiales
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-full"
          >
            <a
              href="https://wa.me/573135591473?text=Hola%2C%20quisiera%20ver%20el%20menu%20completo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Menu Completo
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
