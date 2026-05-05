import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 md:mb-6 text-balance">
            Antojo de algo delicioso?
          </h2>
          <p className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            No esperes mas! Haz tu pedido ahora y disfruta del mejor sabor costeno de Barranquilla
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <a
                href="https://wa.me/573135591473?text=Hola%2C%20quiero%20hacer%20un%20pedido"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                Pedir por WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full"
            >
              <a href="tel:+573135591473">
                <Phone className="mr-2" />
                Llamar Ahora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
