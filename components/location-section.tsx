import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone, Navigation } from "lucide-react"

const schedules = [
  { day: "Lunes - Viernes", hours: "11:00 AM - 10:00 PM" },
  { day: "Sábado", hours: "11:00 AM - 11:00 PM" },
  { day: "Domingo", hours: "12:00 PM - 9:00 PM" },
]

export function LocationSection() {
  return (
    <section id="ubicacion" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Encuéntranos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            ¿Dónde <span className="text-primary">Estamos</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visítanos en nuestro local o pide a domicilio. ¡Estamos cerca de ti!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123!2d-74.815!3d10.985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU5JzA2LjAiTiA3NMKwNDgnNTQuMCJX!5e0!3m2!1ses!2sco!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Samuel Grill"
            />
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Address Card */}
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-card-foreground mb-1">Dirección</h3>
                    <p className="text-muted-foreground">Calle 68 #26B-64</p>
                    <p className="text-muted-foreground">Barranquilla, Colombia</p>
                    <Button
                      asChild
                      variant="link"
                      className="text-primary p-0 h-auto mt-2 font-semibold"
                    >
                      <a
                        href="https://maps.google.com/?q=Calle+68+26B-64+Barranquilla+Colombia"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Navigation className="w-4 h-4 mr-1" />
                        Cómo llegar
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Schedule Card */}
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-card-foreground mb-3">Horarios</h3>
                    <div className="space-y-2">
                      {schedules.map((schedule, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{schedule.day}</span>
                          <span className="text-card-foreground font-medium">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
