"use client"

import { useI18n } from "@/lib/i18n"
import { useTheme } from "next-themes"
import { PointerHighlight } from "./ui/pointer-highlight"
import { World } from "./ui/globe"

export default function GlobalPresenceSection() {
  const { t, isRTL } = useI18n()
  const { theme } = useTheme()

  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  }

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"]
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    // ... existing arcs data ...
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className={`space-y-8 ${isRTL ? "lg:order-2" : ""}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {t("growing_strong")}
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {isRTL ? (
                  <div className="space-y-2">
                    <div>حضور</div>
                    <PointerHighlight>
                      <span className="text-primary">عالمي</span>
                    </PointerHighlight>
                    <div>متميز</div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span>Global</span>
                      <PointerHighlight>
                        <span className="text-primary">Presence</span>
                      </PointerHighlight>
                    </div>
                    <div>Worldwide Excellence</div>
                  </div>
                )}
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {isRTL
                  ? "نخدم عملاءنا في جميع أنحاء العالم بخبرة محلية وجودة عالمية. شبكتنا الواسعة تضمن تقديم حلول مبتكرة ومتخصصة لكل مشروع."
                  : "Serving clients worldwide with local expertise and global quality. Our extensive network ensures innovative and specialized solutions for every project."}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-primary">50+</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">{t("countriesServed")}</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-primary">1000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">{t("projectsCompleted")}</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-primary">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {isRTL ? "دعم عالمي" : "Global Support"}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-primary">99%</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">{t("successRate")}</div>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm sm:text-base text-foreground font-medium">
                  {isRTL ? "خبرة محلية في كل منطقة" : "Local expertise in every region"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm sm:text-base text-foreground font-medium">
                  {isRTL ? "معايير جودة عالمية موحدة" : "Unified global quality standards"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm sm:text-base text-foreground font-medium">
                  {isRTL ? "دعم متعدد اللغات والثقافات" : "Multi-language and cultural support"}
                </span>
              </div>
            </div>
          </div>

          {/* Globe Side */}
          <div className={`${isRTL ? "lg:order-1" : ""}`}>
            <div className="relative w-full h-[700px] rounded-2xl bg-slate-900 border border-slate-700/50 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)]" />

              {/* Globe Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <World data={sampleArcs} globeConfig={globeConfig} />
              </div>

              {/* Status Indicators */}
              <div className="absolute top-6 left-6 bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 border border-purple-500/30">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-purple-100 font-medium">{isRTL ? "اتصالات نشطة" : "Active Connections"}</span>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 border border-purple-500/30">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-purple-100 font-medium">50+ {isRTL ? "دولة" : "Countries"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
