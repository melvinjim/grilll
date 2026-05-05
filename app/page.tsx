import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MenuSection } from "@/components/menu-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MenuSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
