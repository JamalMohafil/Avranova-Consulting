import { SiteHeader } from "@/components/site-header"
import { HeroSlider } from "@/components/hero-slider"
import { ServicesPreview } from "@/components/services-preview"
import { AchievementsDisplay } from "@/components/achievements-display"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactForm } from "@/components/contact-form"
import { SiteFooter } from "@/components/site-footer"
import GlobalPresence from "@/components/globa-presence"
import { SparklesCore } from "@/components/ui/sprakles"
import { HeroSection } from "@/components/hero-section"

export default async  function HomePage() {
    await new Promise((resolve) => setTimeout(resolve, 1000)) 

  return (
    <div className="flex min-h-screen flex-col">
       <main className="flex-1">
      
        <HeroSection />
        <ServicesPreview />
        <GlobalPresence/>
        <AchievementsDisplay />

        <TestimonialsSection />
        <ContactForm />
      </main>
     </div>
  )
}
