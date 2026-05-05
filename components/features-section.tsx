"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Truck, Clock, Award, Utensils } from "lucide-react"

const features = [
  {
    icon: Utensils,
    title: "Ingredientes Frescos",
    description: "Seleccionamos los mejores ingredientes cada dia para garantizar el sabor autentico",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Clock,
    title: "Rapido y Caliente",
    description: "Tu pedido listo en minutos, siempre caliente y recien preparado",
    color: "bg-secondary/20 text-secondary",
  },
  {
    icon: Truck,
    title: "Domicilios",
    description: "Llevamos el sabor de Samuel Grill hasta la puerta de tu casa",
    color: "bg-accent/20 text-accent",
  },
  {
    icon: Award,
    title: "Calidad Garantizada",
    description: "Mas de 188 clientes felices nos respaldan con su preferencia",
    color: "bg-primary/10 text-primary",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block bg-secondary/20 text-secondary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Por que elegirnos
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Lo que nos hace <span className="text-primary">diferentes</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-4 md:p-6 text-center">
                <div className={`w-12 h-12 md:w-14 md:h-14 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="font-bold text-sm md:text-base text-card-foreground mb-1 md:mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
