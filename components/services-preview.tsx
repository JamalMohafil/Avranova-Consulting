"use client"

import Link from "next/link"
import { Building2, Eye, Settings, ArrowRight, CheckCircle } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

export function ServicesPreview() {
  const { t, isRTL } = useI18n()

  const services = [
    {
      icon: Building2,
      title: t("bimCoordination"),
      description: t("bimCoordinationDesc"),
      features: [
        t("3d_modeling") || "3D Modeling",
        t("clash_detection") || "Clash Detection",
        t("project_coordination") || "Project Coordination",
        t("quality_assurance") || "Quality Assurance",
      ],
    },
    {
      icon: Eye,
      title: t("architecturalVisualization"),
      description: t("architecturalVisualizationDesc"),
      features: [
        t("photorealistic_renders") || "Photorealistic Renders",
        t("virtual_reality") || "Virtual Reality",
        t("three_d_animations") || "3D Animations",
        t("interactive_tours") || "Interactive Tours",
      ],
    },
    {
      icon: Settings,
      title: t("mepIntegration"),
      description: t("mepIntegrationDesc"),
      features: [
        t("system_integration") || "System Integration",
        t("energy_analysis") || "Energy Analysis",
        t("code_compliance") || "Code Compliance",
        t("performance_optimization") || "Performance Optimization",
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`mb-16 ${isRTL ? "text-center" : "text-center"}`}>
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            {t("ourServices")}
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">{t("expertSolutions")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("servicesDescription")}</p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 ${isRTL ? "text-right" : "text-left"}`}
              >
                {/* Icon */}
                <div className={`mb-6 ${isRTL ? "flex justify-end" : "flex justify-start"}`}>
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-serif font-bold text-foreground mb-4 ${isRTL ? "text-right" : "text-left"}`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`text-muted-foreground mb-6 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center text-sm text-muted-foreground ${isRTL ? "flex-row-reverse text-right" : "text-left"}`}
                    >
                      <CheckCircle className={`h-4 w-4 text-primary flex-shrink-0 ${isRTL ? "ml-2" : "mr-2"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/services" className={`inline-flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              {t("viewAllServices")}
              <ArrowRight className={`h-5 w-5 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
