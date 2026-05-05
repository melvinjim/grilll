"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Hacen domicilios?",
    answer: "Si! Hacemos domicilios en Barranquilla. Puedes pedir directamente por WhatsApp al +57 313 559 1473 y te llevamos tu pedido caliente hasta tu casa.",
  },
  {
    question: "Cuales son los metodos de pago?",
    answer: "Aceptamos efectivo, transferencias bancarias (Nequi, Daviplata, Bancolombia) y pagos con tarjeta en el local. Para domicilios, efectivo o transferencia.",
  },
  {
    question: "Cuanto tiempo demora un pedido?",
    answer: "En el local, tu pedido esta listo en 10-15 minutos. Para domicilios, dependiendo de la zona, entre 20-40 minutos aproximadamente.",
  },
  {
    question: "Tienen opciones vegetarianas?",
    answer: "Claro! Ofrecemos arepas con queso, patacones con vegetales y queso, y podemos preparar opciones sin carne bajo pedido. Solo indicanos al ordenar.",
  },
  {
    question: "Puedo hacer pedidos grandes para eventos?",
    answer: "Si! Manejamos pedidos para eventos, fiestas y reuniones. Contactanos con anticipacion por WhatsApp para coordinar cantidades especiales y precios.",
  },
]

export function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent font-semibold px-4 py-2 rounded-full text-sm mb-4">
              <HelpCircle className="w-4 h-4" />
              Preguntas Frecuentes
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Tienes <span className="text-primary">dudas</span>?
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-4 md:px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-sm md:text-base font-semibold hover:text-primary hover:no-underline py-4 md:py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base pb-4 md:pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
