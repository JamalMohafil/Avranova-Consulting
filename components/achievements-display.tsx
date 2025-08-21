"use client"

import { Users, Trophy, Calendar, Target, TrendingUp, Award, Globe2 } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function AchievementsDisplay() {
  const { t, isRTL } = useI18n()

  const achievements = [
    {
      icon: Users,
      number: "5+",
      label: t("clients_served"),
      description: t("trusted_organizations"),
    },
    {
      icon: Trophy,
      number: "20+",
      label: t("projects_completed"),
      description: t("delivered_worldwide"),
    },
    {
      icon: Calendar,
      number: "15+",
      label: t("years_excellence"),
      description: t("industry_experience"),
    },
    {
      icon: Target,
      number: "99%",
      label: t("success_rate"),
      description: t("quality_delivery"),
    },
  ]

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6 border border-primary/20 ${isRTL ? "flex-row-reverse" : ""}`}
          >
            <Award className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`} />
            {t("proven_excellence")}
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">{t("proven_excellence")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("excellence_description")}
          </p>
        </div>

        {/* Stats Grid - Corporate Style */}
        <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={index}
                className={`group relative bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 ${isRTL ? "text-center" : "text-center"}`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Number */}
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{achievement.number}</div>

                {/* Label */}
                <div className="text-lg font-semibold text-foreground mb-2">{achievement.label}</div>

                {/* Description */}
                <div className="text-sm text-muted-foreground">{achievement.description}</div>
              </div>
            )
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <div
            className={`inline-flex items-center gap-4 text-muted-foreground text-sm ${isRTL ? "flex-row-reverse" : ""}`}
          >
            <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Globe2 className="h-4 w-4 text-primary" />
              <span>{t("industry_experience")}</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              <TrendingUp className="h-4 w-4 text-primary" />
              <span>{t("growing_strong") || "Growing Strong"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
