"use client"
import { useEffect, useState } from "react"
import { Award } from "lucide-react"
import { useI18n } from "@/lib/i18n"
 
const partners = [
  {
    name: "Autodesk",
    logo: "/autodesk-logo.png",
  },
  {
    name: "Bentley Systems",
    logo: "/bentley-systems-logo.png",
  },
  {
    name: "Trimble",
    logo: "/trimble-logo.png",
  },
  {
    name: "Tekla",
    logo: "/tekla-logo.png",
  },
  {
    name: "Revit Technology",
    logo: "/revit-technology-logo.png",
  },
  {
    name: "Navisworks",
    logo: "/navisworks-logo.png",
  },
]

const duplicatedPartners = [...partners, ...partners, ...partners]

export function PartnersSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { t, isRTL } = useI18n()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20" />

      <div className="container mx-auto px-4 relative">
        <div className={`text-center mb-16 space-y-6 ${isRTL ? "rtl" : "ltr"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t("trusted_partners")}</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {t("powering_innovation")}
            <span className="block text-primary">{t("together")}</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("partners_description")}</p>
        </div>

        <div className="relative mb-16">
          <div className="overflow-hidden mask-gradient">
            <div
              className={`flex gap-12 transition-transform duration-1000 ${isVisible ? "animate-infinite-scroll" : ""}`}
              style={{
                width: `${duplicatedPartners.length * 280}px`,
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="flex-shrink-0 w-64 group py-8">
                  <div className="h-40 flex items-center justify-center p-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-primary/30 transition-all duration-500 hover:scale-110 mx-4">
                    <img
                      src={partner.logo || "/placeholder.svg?height=80&width=160&query=technology company logo"}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0 dark:invert dark:group-hover:invert-0 w-32 h-16"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`text-center ${isRTL ? "rtl" : "ltr"}`}>
          <div className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-3xl p-12 text-primary-foreground overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />

            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold">{t("ready_to_partner")}</h3>
                <p className="text-xl opacity-90 leading-relaxed">{t("partner_cta_description")}</p>
              </div>

              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? "sm:flex-row-reverse" : ""}`}
              >
                <button className="bg-background text-foreground px-16 cursor-pointer py-4 rounded-xl font-semibold hover:bg-muted transition-all duration-300 hover:scale-105 shadow-lg">
                  {t("become_partner")}
                </button>
            
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mask-gradient {
          mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
          -webkit-mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
        }
        
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${partners.length * 280}px);
          }
        }
        
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }
        
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
