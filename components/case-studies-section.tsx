"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export function CaseStudiesSection() {
  const { t } = useI18n()

  const caseStudies = [
    {
      title: t("case_study1_title"),
      category: t("healthcare"),
      location: "New York, NY",
      year: "2023",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop",
      description: t("case_study1_desc"),
      results: [t("case_study1_result1"), t("case_study1_result2"), t("case_study1_result3")],
      tags: [t("bim_coordination"), t("mep_integration"), t("healthcare")],
    },
    {
      title: t("case_study2_title"),
      category: t("residential"),
      location: "Miami, FL",
      year: "2023",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
      description: t("case_study2_desc"),
      results: [t("case_study2_result1"), t("case_study2_result2"), t("case_study2_result3")],
      tags: [t("visualization"), t("vr_experience"), t("residential")],
    },
  ]

  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            {t("success_stories")}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            {t("featured_case_studies")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t("case_studies_desc")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  width={600}
                  height={300}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {study.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {study.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {study.year}
                  </div>
                </div>

                <h3 className="text-lg font-serif font-bold text-card-foreground mb-2">{study.title}</h3>
                <p className="text-muted-foreground mb-3 leading-relaxed text-sm">{study.description}</p>

                <div className="space-y-1 mb-3">
                  {study.results.slice(0, 2).map((result, idx) => (
                    <div key={idx} className="flex items-center text-xs text-muted-foreground">
                      <Award className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <span>{t("view_case_study")}</span>
                  <ArrowRight className="h-3 w-3 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-primary hover:bg-primary/90 px-6 py-3">
            <Link href="/case-studies" className="flex items-center gap-2">
              {t("view_all_case_studies")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
