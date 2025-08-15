"use client"

import { useI18n } from "@/lib/i18n"

export function AboutSection() {
  const { t } = useI18n()

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                {t("ourExpertise")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("expertiseDescription")}</h2>
            </div>
            <ul className="grid gap-2 py-4 text-muted-foreground">
              <li>{t("architecture")}</li>
              <li>{t("civil")}</li>
              <li>{t("structural")}</li>
              <li>{t("mep")}</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            {/* Placeholder for an image or illustration */}
            <div className="w-full max-w-md aspect-video rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-muted-foreground">
              <span className="text-sm">Image Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
