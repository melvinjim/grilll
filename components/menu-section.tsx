"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Flame, Sparkles } from "lucide-react"

const menuCategories = {
  todos: [
    {
      id: 1,
      name: "Arepa Rellena de Carne",
      description: "Deliciosa arepa crujiente rellena de carne desmechada, queso fundido y salsas especiales",
      price: 12000,
      image: "/images/arepa.jpg",
      popular: true,
      category: "arepas",
    },
    {
      id: 2,
      name: "Patacon Mixto",
      description: "Patacon gigante con carne, pollo, queso, salsas rosada y tartara, vegetales frescos",
      price: 18000,
      image: "/images/patacon.jpg",
      popular: true,
      category: "patacones",
    },
    {
      id: 3,
      name: "Salchipapa Especial",
      description: "Papas fritas crujientes con salchicha, chorizo, queso derretido y todas las salsas",
      price: 15000,
      image: "/images/salchipapa.jpg",
      popular: false,
      category: "salchipapas",
      isNew: true,
    },
    {
      id: 4,
      name: "Desgranado Costeno",
      description: "Maiz desgranado con pollo, carne, chorizo, queso y salsa rosada al estilo costeno",
      price: 16000,
      image: "/images/desgranado.jpg",
      popular: false,
      category: "otros",
    },
    {
      id: 5,
      name: "Arepa de Pollo",
      description: "Arepa rellena de pollo desmechado con queso, aguacate y salsas de la casa",
      price: 12000,
      image: "/images/arepa.jpg",
      popular: false,
      category: "arepas",
    },
    {
      id: 6,
      name: "Super Patacon",
      description: "Nuestro patacon mas grande con triple proteina: carne, pollo y chorizo",
      price: 25000,
      image: "/images/patacon.jpg",
      popular: true,
      category: "patacones",
    },
    {
      id: 7,
      name: "Salchipapa Sencilla",
      description: "Papas fritas doradas con salchichas picadas y salsas clasicas",
      price: 10000,
      image: "/images/salchipapa.jpg",
      popular: false,
      category: "salchipapas",
    },
    {
      id: 8,
      name: "Arepa Mixta",
      description: "Arepa rellena con carne y pollo desmechado, doble queso y salsas",
      price: 15000,
      image: "/images/arepa.jpg",
      popular: true,
      category: "arepas",
      isNew: true,
    },
  ],
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price)
}

type MenuItem = (typeof menuCategories.todos)[number]

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <Card className="group bg-card border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 left-2 flex flex-wrap gap-1.5">
          {item.popular && (
            <Badge variant="default" className="bg-accent text-accent-foreground text-xs font-bold flex items-center gap-1">
              <Flame className="w-3 h-3" />
              Popular
            </Badge>
          )}
          {item.isNew && (
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground text-xs font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Nuevo
            </Badge>
          )}
        </div>
        <div className="absolute top-2 right-2">
          <Badge className="bg-primary text-primary-foreground text-sm font-bold px-2.5 py-1">
            {formatPrice(item.price)}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4 md:p-5">
        <h3 className="text-base md:text-lg font-bold text-card-foreground mb-1.5">{item.name}</h3>
        <p className="text-muted-foreground text-xs md:text-sm mb-3 line-clamp-2">{item.description}</p>
        <Button
          asChild
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm"
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
  )
}

export function MenuSection() {
  const arepas = menuCategories.todos.filter((item) => item.category === "arepas")
  const patacones = menuCategories.todos.filter((item) => item.category === "patacones")
  const salchipapas = menuCategories.todos.filter((item) => item.category === "salchipapas")
  const otros = menuCategories.todos.filter((item) => item.category === "otros")

  return (
    <section id="menu" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Nuestro Menu
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-foreground mb-3 text-balance">
            Sabores que te <span className="text-primary">Encantaran</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Preparados con ingredientes frescos y el sazon costeno que nos caracteriza
          </p>
        </div>

        {/* Tabs Menu */}
        <Tabs defaultValue="todos" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8 md:mb-10">
            <TabsTrigger 
              value="todos" 
              className="px-4 md:px-6 py-2.5 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card border border-border font-semibold text-sm"
            >
              Todos
            </TabsTrigger>
            <TabsTrigger 
              value="arepas" 
              className="px-4 md:px-6 py-2.5 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card border border-border font-semibold text-sm"
            >
              Arepas
            </TabsTrigger>
            <TabsTrigger 
              value="patacones" 
              className="px-4 md:px-6 py-2.5 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card border border-border font-semibold text-sm"
            >
              Patacones
            </TabsTrigger>
            <TabsTrigger 
              value="salchipapas" 
              className="px-4 md:px-6 py-2.5 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card border border-border font-semibold text-sm"
            >
              Salchipapas
            </TabsTrigger>
            <TabsTrigger 
              value="otros" 
              className="px-4 md:px-6 py-2.5 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card border border-border font-semibold text-sm"
            >
              Otros
            </TabsTrigger>
          </TabsList>

          <TabsContent value="todos" className="data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-2 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0 duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {menuCategories.todos.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="arepas" className="data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-2 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0 duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {arepas.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="patacones" className="data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-2 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0 duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {patacones.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="salchipapas" className="data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-2 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0 duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {salchipapas.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="otros" className="data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-2 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0 duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {otros.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="mt-10 md:mt-14 text-center">
          <p className="text-muted-foreground mb-4 text-sm md:text-base">
            No encuentras lo que buscas? Contactanos y pregunta por nuestras opciones especiales
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 md:px-8 rounded-full"
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
