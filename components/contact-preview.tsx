"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export function ContactPreview() {
  const { t, isRTL } = useI18n()

  const contactInfo = [
    {
      icon: Phone,
      label: t("callUs") || "Call Us",
      value: "+1 (555) 123-4567",
    },
    {
      icon: Mail,
      label: t("emailUs") || "Email Us",
      value: "info@avranova.com",
    },
    {
      icon: MapPin,
      label: t("visit_us") || "Visit Us",
      value: t("office_address") || "123 Business Ave, Suite 100",
    },
  ]

  return (
    <section className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            {t("getInTouch")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">{t("readyToStart")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contactDescription")}</p>
        </div>

        {/* Contact Info */}
        <div className="grid gap-6 md:grid-cols-3 mb-10">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <div key={index} className={`${isRTL ? "text-center" : "text-center"}`}>
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">{info.label}</h3>
                <p className="text-sm text-muted-foreground">{info.value}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div
            className={`inline-flex items-center px-4 py-2 bg-green-500/20 text-green-600 rounded-full text-sm font-semibold mb-4 ${isRTL ? "flex-row-reverse" : ""}`}
          >
            <Clock className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`} />
            {t("freeConsultation") || "Free Consultation Available"}
          </div>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact" className={`inline-flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              {t("contactUs") || "Contact Us"}
              <ArrowRight className={`h-5 w-5 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
