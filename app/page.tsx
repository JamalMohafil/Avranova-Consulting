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
import { Suspense } from "react"
import { PartnersSection } from "@/components/partners-section"

export default async  function HomePage() {
 
  return (
    <div className="flex min-h-screen flex-col">
       <main className="flex-1">
      
        <HeroSection />
        <Suspense fallback={<p>Loading</p>}>

        <ServicesPreview />
        <GlobalPresence/>
        <AchievementsDisplay />
              <PartnersSection />

        {/* <TestimonialsSection /> */}
        <ContactForm />
        </Suspense>
      </main>
     </div>
  )
}
