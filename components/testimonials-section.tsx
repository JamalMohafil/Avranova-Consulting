"use client"

import { Quote, Star } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function TestimonialsSection() {
  const { t } = useI18n()

  const testimonials = [
    {
      text: t("testimonial1_text"),
      author: "Jennifer Davis",
      role: t("testimonial1_role"),
      company: "Metropolitan Construction",
      rating: 5,
      initials: "JD",
    },
    {
      text: t("testimonial2_text"),
      author: "Robert Chen",
      role: t("testimonial2_role"),
      company: "Luxury Properties Inc.",
      rating: 5,
      initials: "RC",
    },
    {
      text: t("testimonial3_text"),
      author: "Sarah Williams",
      role: t("testimonial3_role"),
      company: "Green Building Corp",
      rating: 5,
      initials: "SW",
    },
  ]

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            {t("client_success_stories")}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            {t("what_clients_say")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("client_testimonials_desc")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
            >
              <div className="mb-4">
                <Quote className="h-6 w-6 text-primary/30" />
              </div>

              <p className="text-card-foreground mb-4 leading-relaxed italic text-sm">"{testimonial.text}"</p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-card-foreground text-sm">{testimonial.author}</p>
                  <p className="text-xs text-primary font-medium">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-primary/5 rounded-xl border border-primary/20">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="text-xl font-bold text-foreground">4.9/5</span>
            </div>
            <div className="text-left">
              <div className="text-base font-semibold text-foreground">{t("average_rating")}</div>
              <div className="text-xs text-muted-foreground">{t("verified_reviews")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
