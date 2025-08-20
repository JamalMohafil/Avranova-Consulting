"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Building2, Layers3, Ruler, Cog, ArrowRight, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewriterEffectSmooth } from "./ui/typewriter-effect"
import { useI18n } from "@/lib/i18n"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { t, isRTL } = useI18n()

  useEffect(() => {
    setMounted(true)
  }, [])

  const getTypewriterWords = () => {
    const transformText = t("transform_business")

    if (isRTL) {
      return [{ text: transformText, className: "text-primary dark:text-primary lg:text-5xl md:text-4xl text-2xl" }]
    } else {
      // For English, split normally
      const words = transformText.split(" ")
      return words.map((word, index) => ({
        text: word,
        className:
          index < 2
            ? "text-white lg:text-5xl md:text-4xl text-2xl"
            : "text-primary dark:text-primary lg:text-5xl md:text-4xl text-2xl",
      }))
    }
  }

  const words = getTypewriterWords()

  const stats = [
    { number: "500+", label: t("bim_coordination_stat"), icon: Building2 },
    { number: "99.8%", label: t("precision_rate"), icon: Target },
    { number: "15+", label: t("industry_leadership"), icon: Layers3 },
    { number: "100+", label: t("certifications"), icon: Ruler },
  ]

  if (!mounted) return null

  return (
    <section
      className="relative w-full h-[78vh] sm:h-[80vh] lg:h-[95vh] pb-12 sm:py-20 lg:py-60 flex justify-center items-center
     min-h-[500px] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900"
    >
      <div
        className={`absolute top-20 z-15 opacity-60 animate-pulse hidden lg:block ${isRTL ? "left-20" : "right-20"}`}
      >
        <Cog className="h-20 w-20 text-primary" />
      </div>
      <div
        className={`absolute bottom-16 z-15 opacity-50 animate-bounce hidden lg:block ${isRTL ? "right-16" : "left-16"}`}
      >
        <Building2 className="h-16 w-16 text-primary" />
      </div>
    
      {/* Main Content */}
      <div className="relative pb-8 sm:pb-12 lg:pb-20 z-20 flex items-center justify-center h-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-8xl mx-auto">
          <div
            className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${isRTL ? "lg:flex-row" : ""}`}
          >
            {/* Left Column - Main Content */}
            <div
              className={`flex-1 space-y-6 lg:space-y-10 ${isRTL ? "text-center lg:text-right" : "text-center lg:text-left"}`}
            >
              <div
                className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-2 sm:py-4 bg-gradient-to-r from-primary/20 to-blue-600/20 backdrop-blur-xl rounded-full border border-primary/30 shadow-2xl ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <Building2 className="h-4 w-4 sm:h-6 sm:w-6 text-primary animate-pulse" />
                <span className="text-sm sm:text-base font-bold tracking-wide text-white">
                  {t("global_bim_solutions")}
                </span>
              </div>

              <div
                className={`min-h-[100px] sm:min-h-[120px] lg:min-h-[140px] flex items-center ${isRTL ? "justify-center lg:justify-end" : "justify-center lg:justify-start"}`}
              >
                <div className={isRTL ? "text-center lg:text-right" : "text-center lg:text-left"}>
                  <TypewriterEffectSmooth words={words} />
                  <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white/90 mt-2 sm:mt-4 tracking-wide">
                    {t("hero_title_line1")}
                  </h2>
                </div>
              </div>

              <p className="text-base sm:text-lg
               lg:text-xl leading-relaxed max-w-4xl font-medium font-serif text-white/95 drop-shadow-2xl">
                {t("hero_title_line2")}
              </p>

              <div
                className={`flex flex-col
                   sm:flex-row items-center gap-4 sm:gap-6 pt-2 sm:pt-4 ${isRTL ? "lg:items-end sm:flex-row" : "lg:items-start"}`}
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto max-sm:w-[80%] bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-6 sm:px-10 py-3 sm:py-5 text-base sm:text-xl font-bold rounded-xl shadow-2xl hover:shadow-primary/25 transform hover:scale-110 transition-all duration-300 border border-primary/20"
                >
                  <Link
                    href="/contact"
                    className={`flex items-center gap-2 sm:gap-3 ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    {isRTL ? (
<>
                    <ArrowRight className={`h-4 w-4 sm:h-6 sm:w-6 ${isRTL ? "rotate-180" : ""}`} />
                      {t("start_transformation")}
</>
                    ) : (


<>
                      {t("start_transformation")}
                                        <ArrowRight className={`h-4 w-4 sm:h-6 sm:w-6 ${isRTL ? "rotate-180" : ""}`} />
</>
                    )}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto max-sm:w-[70%] max-sm:hover:scale-105 border-2 border-white/80 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm px-6 sm:px-10 py-3 sm:py-5 text-base sm:text-xl font-bold bg-white/10 rounded-xl transform hover:scale-110 transition-all duration-300 shadow-xl"
                >
                  <Link href="/services">{t("explore_solutions")}</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="max-md:hidden max-w-[500px] mt-8 lg:mt-0 flex-shrink-0">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br max-w- from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl hover:shadow-primary/20 transform hover:scale-105 transition-all duration-300 hover:border-primary/40"
                    >
                      <div className={`space-y-2 sm:space-y-3 ${isRTL ? "text-center" : "text-center"}`}>
                        <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto drop-shadow-lg" />
                        <div className="text-2xl sm:text-3xl font-black text-white drop-shadow-lg">{stat.number}</div>
                        <div className="text-sm sm:text-base font-bold text-white/90 leading-tight">{stat.label}</div>
                        <div className="w-10 sm:w-16 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full mx-auto shadow-lg" />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent z-15" />
    </section>
  )
}
