import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center pt-16 md:pt-20">
      {/* Background Image - Optimized for mobile */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-food.jpg"
          alt="Deliciosa comida de Samuel Grill"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 text-secondary" />
            <span className="text-secondary font-medium text-sm">Barranquilla, Colombia</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-card mb-6 leading-tight text-balance">
            La Mejor{" "}
            <span className="text-secondary">Comida Rapida</span>{" "}
            que Deleita tu Paladar
          </h1>

          {/* Description */}
          <p className="text-card/90 text-base sm:text-lg md:text-xl mb-6 max-w-xl leading-relaxed">
            Disfruta de nuestras deliciosas arepas rellenas, patacones mixtos, salchipapas y mucho mas. 
            Sabor colombiano autentico en cada bocado.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-card/80 text-xs sm:text-sm">Calificacion de nuestros clientes</span>
          </div>

          {/* CTA Button - Only one main CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <a href="#menu">Ver Menu</a>
            </Button>
          </div>

          {/* Quick Info */}
          <div className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-card/80">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm">Abierto ahora</span>
            </div>
            <div className="flex items-center gap-2 text-card/80">
              <MapPin className="w-3 h-3" />
              <span className="text-xs sm:text-sm">Calle 68 #26B-64</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
