"use client"

import { Camera, LayoutGrid, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"

export function ServicesSection() {
  const { t } = useI18n()

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("ourServices")}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("contactDescription")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Card className="flex flex-col items-center text-center p-6">
            <CardHeader>
              <LayoutGrid className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("bimCoordination")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t("bimCoordinationDesc")}</p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center text-center p-6">
            <CardHeader>
              <Camera className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("architecturalVisualization")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t("architecturalVisualizationDesc")}</p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center text-center p-6">
            <CardHeader>
              <Settings className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("mepIntegration")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t("mepIntegrationDesc")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
