"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Globe, TrendingUp, Award, ArrowRight, Sparkles, Zap, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewriterEffectSmooth } from "./ui/typewriter-effect"
import { SparklesCore } from "./ui/sprakles"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const words = [
    { text: "Transform" ,className:"text-white"},
    { text: "Your",className:"text-white" },
    { text: "Business", className: "text-primary dark:text-primary  " },
    { text: "Future", className: "text-primary dark:text-primary " },
  ]

  const stats = [
    { number: "500+", label: "Global Clients", icon: Globe },
    { number: "99.8%", label: "Success Rate", icon: Target },
    { number: "15+", label: "Years Leading", icon: TrendingUp },
    { number: "100+", label: "Awards Won", icon: Award },
  ]

  if (!mounted) return null

  return (
    <section className="relative w-full h-[90vh] py-60 flex justify-center items-center
     min-h-[500px] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,151,237,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,151,237,0.05)_50%,transparent_75%)]" />
      </div>

      {/* Enhanced SparklesCore Background Effect */}
      <div className="absolute inset-0 z-10">
        <SparklesCore
          background="transparent"
          minSize={0.05}
          maxSize={0.3}
          particleDensity={200}
          className="w-full h-full opacity-5"
          particleColor="#fff"
        />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-20 z-15 opacity-60 animate-pulse hidden lg:block">
        <Zap className="h-20 w-20 text-primary" />
      </div>
      <div className="absolute bottom-40 left-16 z-15 opacity-50 animate-bounce hidden lg:block">
        <Target className="h-16 w-16 text-primary" />
      </div>
      <div className="absolute top-1/3 right-1/4 z-15 opacity-40 animate-pulse hidden xl:block">
        <Sparkles className="h-14 w-14 text-primary" />
      </div>

      {/* Main Content */}
      <div className="relative pb-20 z-20 flex items-center justify-center h-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left space-y-10">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/20 to-blue-600/20 backdrop-blur-xl rounded-full border border-primary/30 shadow-2xl">
                <Globe className="h-6 w-6 text-primary animate-spin-slow" />
                <span className="text-base font-bold tracking-wide text-white">#1 Global Business Solutions</span>
              </div>

              {/* Enhanced TypewriterEffect Title */}
              <div className="min-h-[140px] flex items-center justify-center lg:justify-start">
                <div className="text-center lg:text-left">
                  <TypewriterEffectSmooth words={words}  />
                  <h2 className="text-2xl lg:text-3xl font-bold text-white/90 mt-4 tracking-wide">
                    With Cutting-Edge Innovation
                  </h2>
                </div>
              </div>

              {/* Enhanced Description */}
              <p className="text-xl lg:text-xl leading-relaxed max-w-2xl font-medium font-serif text-white/95 drop-shadow-2xl">
                We deliver <span className="text-primary font-bold">game-changing solutions</span> that propel
                businesses to unprecedented heights. Join industry leaders who trust us to{" "}
                <span className="text-primary font-bold">revolutionize their success</span>.
              </p>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-10 py-5 text-xl font-bold rounded-xl shadow-2xl hover:shadow-primary/25 transform hover:scale-110 transition-all duration-300 border border-primary/20"
                >
                  <Link href="/contact" className="flex items-center gap-3">
                    Start Your Transformation
                    <ArrowRight className="h-6 w-6" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/80 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm px-10 py-5 text-xl font-bold bg-white/10 rounded-xl transform hover:scale-110 transition-all duration-300 shadow-xl"
                >
                  <Link href="/services">Explore Solutions</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Enhanced Stats Grid */}
            <div className="lg:justify-self-end">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-primary/20 transform hover:scale-110 transition-all duration-300 hover:border-primary/40"
                    >
                      <div className="text-center space-y-4">
                        <IconComponent className="h-10 w-10 text-primary mx-auto drop-shadow-lg" />
                        <div className="text-4xl font-black text-white drop-shadow-lg">{stat.number}</div>
                        <div className="text-base font-bold text-white/90">{stat.label}</div>
                        <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-blue-400 rounded-full mx-auto shadow-lg" />
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
