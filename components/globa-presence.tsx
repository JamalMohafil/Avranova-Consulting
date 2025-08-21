"use client"

import { useI18n } from "@/lib/i18n"
import { useTheme } from "next-themes"
import createGlobe from "cobe"
import { useEffect, useRef } from "react"
import { PointerHighlight } from "./ui/pointer-highlight"
import { World } from "./ui/globe"

export default function GlobalPresenceSection() {
  const { t, isRTL } = useI18n()
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
      startLat: 36.2021,
      startLng: 37.1343,
      endLat: 40.4168, // Madrid, Spain
      endLng: -3.7038,
      arcAlt: 0.3,
      color: colors[0],
    },
    {
      order: 2,
      startLat: 36.2021,
      startLng: 37.1343,
      endLat: 40.7128, // New York, USA
      endLng: -74.006,
      arcAlt: 0.2,
      color: colors[1],
    },
    {
      order: 3,
      startLat: 36.2021,
      startLng: 37.1343,
      endLat: 48.8566, // Paris, France
      endLng: 2.3522,
      arcAlt: 0.2,
      color: colors[2],
    },
    {
      order: 4,
      startLat: 36.2021,
      startLng: 37.1343,
      endLat: 39.9042, // Beijing, China
      endLng: 116.4074,
      arcAlt: 0.6,
      color: colors[0],
    },
    // From Damascus, Syria to international destinations
    {
      order: 5,
      startLat: 33.5138,
      startLng: 36.2765,
      endLat: 40.4168, // Madrid, Spain
      endLng: -3.7038,
      arcAlt: 0.4,
      color: colors[1],
    },
    {
      order: 6,
      startLat: 33.5138,
      startLng: 36.2765,
      endLat: 40.7128, // New York, USA
      endLng: -74.006,
      arcAlt: 0.7,
      color: colors[2],
    },
    {
      order: 7,
      startLat: 33.5138,
      startLng: 36.2765,
      endLat: 48.8566, // Paris, France
      endLng: 2.3522,
      arcAlt: 0.3,
      color: colors[0],
    },
    {
      order: 8,
      startLat: 33.5138,
      startLng: 36.2765,
      endLat: 39.9042, // Beijing, China
      endLng: 116.4074,
      arcAlt: 0.5,
      color: colors[1],
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

              {/* Updated responsive text layout */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {isRTL ? (
                  <div className="space-y-2 flex  flex-row gap-4 justify-start"  >
                    <div>متميز</div>
                    <PointerHighlight>
                      <span className="text-primary" dir="ltr">عالمي</span>
                    </PointerHighlight>
                    <div>حضور</div>
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

              <p className="text-lg text-muted-foreground leading-relaxed">
                {isRTL
                  ? "نخدم عملاءنا في جميع أنحاء العالم بخبرة محلية وجودة عالمية. شبكتنا الواسعة تضمن تقديم حلول مبتكرة ومتخصصة لكل مشروع."
                  : "Serving clients worldwide with local expertise and global quality. Our extensive network ensures innovative and specialized solutions for every project."}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground font-medium">{t("countriesServed")}</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground font-medium">{t("projectsCompleted")}</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">
                  {isRTL ? "دعم عالمي" : "Global Support"}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground font-medium">{t("successRate")}</div>
              </div>
            </div>

            {/* Key Features */}
            <div className={`space-y-4 ${isRTL && "flex flex-col items-start "}`}>
              <div className="flex items-center gap-3">
                {isRTL ? (<>
                   <span className="text-foreground font-medium">
                  {isRTL ? "خبرة محلية في كل منطقة" : "Local expertise in every region"}
                </span>
                   <div className="w-2 h-2 rounded-full bg-primary" />
             
                </>) : (<>   <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground font-medium">
                  {isRTL ? "خبرة محلية في كل منطقة" : "Local expertise in every region"}
                </span></>)}
             
              </div>
              <div className="flex items-center gap-3">                {isRTL ? (<>
                    <span className="text-foreground font-medium">
                  {isRTL ? "معايير جودة عالمية موحدة" : "Unified global quality standards"}
                </span>
                 <div className="w-2 h-2 rounded-full bg-primary" />
             
              </>) : (<>
                
                 <div className="w-2 h-2 rounded-full bg-primary" />   <span className="text-foreground font-medium">
                  {isRTL ? "معايير جودة عالمية موحدة" : "Unified global quality standards"}
                </span></>)}

             
              </div>
              <div className="flex items-center gap-3">                {isRTL ? (<>   <span className="text-foreground font-medium">
                  {isRTL ? "دعم متعدد اللغات والثقافات" : "Multi-language and cultural support"}
                </span> <div className="w-2 h-2 rounded-full bg-primary" />
              </>) : (<>  <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground font-medium">
                  {isRTL ? "دعم متعدد اللغات والثقافات" : "Multi-language and cultural support"}
                </span></>)}

              
              </div>
            </div>
          </div>

          {/* Globe Side */}
          <div className={`${isRTL ? "lg:order-1" : ""}`}>
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl bg-slate-900 border border-slate-700/50 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)]" />

              {/* Globe Container */}
              <div className="absolute inset-0">
                <World data={sampleArcs} globeConfig={globeConfig} />
              </div>

              <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-slate-800/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-purple-500/30">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-purple-100 font-medium">Active Connections</span>
                </div>
              </div>

              <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-slate-800/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-purple-500/30">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-purple-100 font-medium">8 Connections</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 0

    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
         { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.01
      },
    })

    return () => {
      globe.destroy()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  )
}
