"use client"

import { Building, Settings, Scan, Globe, Ruler, Users, Camera, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"
 
export function ServicesSection() {
  const { t } = useI18n()

  const services = [
    {
      icon: Building,
      title: t("bimCoordination"),
      description: t("bimCoordinationDesc"),
    },
    {
      icon: Users,
      title: t("trusted_partners"),
      description: t("partners_description"),
    },
    {
      icon: Camera,
      title: t("architecturalVisualization"),
      description: t("architecturalVisualizationDesc"),
    },
    {
      icon: Settings,
      title: t("mepIntegration"),
      description: t("mepIntegrationDesc"),
    },
    {
      icon: Scan,
      title: t("photorealistic_renders"),
      description: t("virtual_reality"),
    },
    {
      icon: Globe,
      title: t("global_presence"),
      description: t("global_description"),
    },
    {
      icon: Ruler,
      title: t("three_d_animations"),
      description: t("interactive_tours"),
    },
    {
      icon: Wrench,
      title: t("projectConsultation"),
      description: t("formDescription"),
    },
  ]

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("ourServices")}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("servicesDescription")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl items-start gap-6 py-12 lg:grid-cols-4 md:grid-cols-2 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <IconComponent className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
