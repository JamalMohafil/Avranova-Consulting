"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Globe,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewriterEffectSmooth } from "./ui/typewriter-effect"
import { SparklesCore } from "./ui/sprakles"

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Global Excellence",
    subtitle: "Leading Innovation Worldwide",
    description: "Empowering businesses across continents with cutting-edge solutions and unparalleled expertise.",
    icon: Globe,
    stats: { number: "150+", label: "Countries Served" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    title: "Strategic Growth",
    subtitle: "Transforming Business Landscapes",
    description: "Driving sustainable growth through innovative strategies and world-class consulting services.",
    icon: TrendingUp,
    stats: { number: "98%", label: "Client Success Rate" },
  },
  {
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80",
    title: "Expert Partnership",
    subtitle: "Your Trusted Global Advisor",
    description: "Connecting you with industry leaders and providing personalized solutions for complex challenges.",
    icon: Users,
    stats: { number: "25+", label: "Years Experience" },
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Award-Winning Service",
    subtitle: "Recognized Excellence",
    description: "Delivering premium solutions that consistently exceed expectations and industry standards.",
    icon: Award,
    stats: { number: "50+", label: "Industry Awards" },
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [isPlaying])

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsTransitioning(false), 800)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsTransitioning(false), 800)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 800)
  }

  const currentSlideData = slides[currentSlide]
  const IconComponent = currentSlideData.icon
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden">
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          >
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Aceternity
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={`${slide.title} - Professional Services`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={95}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/30 to-primary/10" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-20 z-10 opacity-10 animate-pulse hidden lg:block">
        <Sparkles className="h-24 w-24 text-primary-foreground" />
      </div>
      <div className="absolute bottom-32 left-20 z-10 opacity-10 animate-bounce hidden lg:block">
        <Globe className="h-16 w-16 text-primary-foreground" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="text-primary-foreground space-y-8">
              {/* Badge */}
              <div
                className={`inline-flex items-center gap-3 px-6 py-3 bg-card/20 backdrop-blur-xl rounded-full border border-primary-foreground/20 transform transition-all duration-1000 ease-out ${
                  currentSlide >= 0 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <IconComponent className="h-5 w-5" />
                <span className="text-sm font-semibold tracking-wide">{currentSlideData.subtitle}</span>
              </div>

              {/* Main Title */}
                                <TypewriterEffectSmooth words={words} />

              <h1
                className={`text-5xl lg:text-7xl font-bold leading-tight font-sans transform transition-all duration-1000 ease-out ${
                  currentSlide >= 0 ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                {currentSlideData.title}
              </h1>

              {/* Description */}
              <p
                className={`text-xl lg:text-2xl leading-relaxed max-w-2xl transform transition-all duration-1000 ease-out ${
                  currentSlide >= 0 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                {currentSlideData.description}
              </p>

              {/* Action Buttons */}
              <div
                className={`flex flex-col sm:flex-row items-start gap-6 transform transition-all duration-1000 ease-out ${
                  currentSlide >= 0 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/contact" className="flex items-center gap-3">
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold bg-transparent rounded-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/services">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Stats Card */}
            <div
              className={`lg:justify-self-end transform transition-all duration-1000 ease-out ${
                currentSlide >= 0 ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <div className="bg-card/20 backdrop-blur-xl border border-primary-foreground/20 rounded-2xl p-8 shadow-2xl">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-secondary">{currentSlideData.stats.number}</div>
                  <div className="text-lg font-semibold text-primary-foreground">{currentSlideData.stats.label}</div>
                  <div className="w-16 h-1 bg-secondary rounded-full mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 text-primary-foreground hover:bg-primary-foreground/20 h-14 w-14 rounded-full backdrop-blur-xl bg-card/20 border border-primary-foreground/20 shadow-xl transform hover:scale-110 transition-all duration-300 disabled:opacity-50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-7 w-7" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 text-primary-foreground hover:bg-primary-foreground/20 h-14 w-14 rounded-full backdrop-blur-xl bg-card/20 border border-primary-foreground/20 shadow-xl transform hover:scale-110 transition-all duration-300 disabled:opacity-50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-7 w-7" />
      </Button>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8 z-30">
        {/* Slide Indicators */}
        <div className="flex items-center gap-3 px-6 py-3 bg-card/20 backdrop-blur-xl rounded-full border border-primary-foreground/20 shadow-xl">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`transition-all duration-500 rounded-full transform hover:scale-125 disabled:opacity-50 ${
                index === currentSlide
                  ? "w-10 h-3 bg-secondary shadow-lg"
                  : "w-3 h-3 bg-primary-foreground/60 hover:bg-primary-foreground/90"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Play/Pause Control */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-primary-foreground hover:bg-primary-foreground/20 h-12 w-12 rounded-full backdrop-blur-xl bg-card/20 border border-primary-foreground/20 shadow-xl transform hover:scale-110 transition-all duration-300"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-foreground/20 z-30">
        <div
          className="h-full bg-secondary transition-all duration-300 ease-out"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </section>
  )
}
