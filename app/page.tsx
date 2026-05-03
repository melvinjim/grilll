import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MenuSection } from "@/components/menu-section"
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
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
