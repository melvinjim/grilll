"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Maria Garcia",
    initials: "MG",
    rating: 5,
    comment: "Los patacones son increibles! El mejor sabor de Barranquilla. Siempre pido domicilio y llega caliente.",
  },
  {
    id: 2,
    name: "Carlos Rodriguez",
    initials: "CR",
    rating: 5,
    comment: "Las arepas rellenas son adictivas. El queso derretido con la carne es una combinacion perfecta.",
  },
  {
    id: 3,
    name: "Ana Martinez",
    initials: "AM",
    rating: 5,
    comment: "Excelente atencion y comida deliciosa. Las salchipapas son generosas y muy sabrosas!",
  },
  {
    id: 4,
    name: "Pedro Jimenez",
    initials: "PJ",
    rating: 5,
    comment: "El desgranado costeno es espectacular. Me recuerda a la comida de mi abuela. 100% recomendado.",
  },
  {
    id: 5,
    name: "Laura Hernandez",
    initials: "LH",
    rating: 5,
    comment: "Encontre mi lugar favorito de comida rapida. Precios justos y porciones enormes. Volvere!",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Testimonios
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 text-balance">
            Lo que dicen <span className="text-secondary">nuestros clientes</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Mas de 188 seguidores en Instagram nos respaldan
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <Card className="bg-card border-border h-full">
                  <CardContent className="p-5 md:p-6 flex flex-col h-full">
                    <Quote className="w-8 h-8 text-primary/30 mb-3" />
                    
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                      &quot;{testimonial.comment}&quot;
                    </p>
                    
                    <div className="flex items-center gap-3 pt-3 border-t border-border">
                      <Avatar className="size-10">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-card-foreground text-sm">{testimonial.name}</p>
                        <p className="text-muted-foreground text-xs">Cliente frecuente</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-6">
            <CarouselPrevious className="static translate-y-0 bg-card border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
            <CarouselNext className="static translate-y-0 bg-card border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
