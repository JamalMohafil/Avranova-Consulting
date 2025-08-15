"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useI18n } from "@/lib/i18n"

export function ContactSection() {
  const { t } = useI18n()

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("getInTouch")}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("contactDescription")}
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md py-12">
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">{t("name")}</Label>
              <Input id="name" placeholder={t("namePlaceholder")} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">{t("email")}</Label>
              <Input id="email" type="email" placeholder={t("emailPlaceholder")} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">{t("message")}</Label>
              <Textarea id="message" placeholder={t("messagePlaceholder")} className="min-h-[120px]" />
            </div>
            <Button type="submit">{t("contactUs")}</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
