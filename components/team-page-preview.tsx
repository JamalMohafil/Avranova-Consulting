"use client"
 import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, ArrowRight, Users, Award, Globe, TrendingUp } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function TeamPage() {
  const { t, isRTL } = useI18n()

  const teamMembers = [
    {
      name: { en: "Sarah Johnson test", ar: "سارة جونسون تجربة" },
      position: { en: "Chief Executive Officer", ar: "الرئيس التنفيذي" },
      bio: {
        en: "Strategic leader with proven expertise in digital transformation and organizational excellence.",
        ar: "قائدة استراتيجية مع خبرة مثبتة في التحول الرقمي والتميز التنظيمي.",
      },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      expertise: [
        { en: "Strategy", ar: "الاستراتيجية" },
        { en: "Leadership", ar: "القيادة" },
      ],
    },
    {
      name: { en: "Michael Chen test", ar: "مايكل تشين تجربة" },
      position: { en: "Chief Technology Officer", ar: "مدير التكنولوجيا" },
      bio: {
        en: "Technology visionary specializing in AI and enterprise solutions.",
        ar: "رؤيوي تقني متخصص في الذكاء الاصطناعي والحلول المؤسسية.",
      },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      expertise: [
        { en: "AI & ML", ar: "الذكاء الاصطناعي" },
        { en: "Cloud", ar: "السحابة" },
      ],
    },
    {
      name: { en: "Dr. Amira Hassan test", ar: "د. أميرة حسن تجربة" },
      position: { en: "Head of Operations", ar: "رئيس العمليات" },
      bio: {
        en: "Operations expert focused on process optimization and automation.",
        ar: "خبيرة عمليات متخصصة في تحسين العمليات والأتمتة.",
      },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      expertise: [
        { en: "Operations", ar: "العمليات" },
        { en: "Automation", ar: "الأتمتة" },
      ],
    },
    {
      name: { en: "David Rodriguez test", ar: "ديفيد رودريغيز تجربة" },
      position: { en: "Senior Strategy Consultant", ar: "مستشار استراتيجي أول" },
      bio: {
        en: "Strategic consultant with expertise in market analysis and business innovation.",
        ar: "مستشار استراتيجي مع خبرة في تحليل السوق والابتكار التجاري.",
      },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      expertise: [
        { en: "Strategy", ar: "الاستراتيجية" },
        { en: "Innovation", ar: "الابتكار" },
      ],
    },
    {
      name: { en: "Lisa Wang test", ar: "ليزا وانغ تجربة" },
      position: { en: "Digital Transformation Lead", ar: "قائد التحول الرقمي" },
      bio: {
        en: "Digital transformation expert helping organizations navigate Industry 4.0.",
        ar: "خبيرة التحول الرقمي تساعد المنظمات على التنقل في الثورة الصناعية الرابعة.",
      },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      expertise: [
        { en: "Digital", ar: "الرقمي" },
        { en: "IoT", ar: "إنترنت الأشياء" },
      ],
    },
    {
      name: { en: "Ahmed Al-Rashid test", ar: "أحمد الراشد تجربة" },
      position: { en: "Financial Advisory Specialist", ar: "أخصائي الاستشارات المالية" },
      bio: {
        en: "Financial expert specializing in M&A and corporate finance.",
        ar: "خبير مالي متخصص في الاندماج والاستحواذ والتمويل المؤسسي.",
      },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      expertise: [
        { en: "Finance", ar: "المالية" },
        { en: "M&A", ar: "الاندماج" },
      ],
    },
  ]

  const stats = [
    {
      icon: Users,
      value: "150+",
      label: { en: "Projects Completed", ar: "مشروع مكتمل" },
    },
    {
      icon: Award,
      value: "25+",
      label: { en: "Industry Awards", ar: "جائزة صناعية" },
    },
    {
      icon: Globe,
      value: "40+",
      label: { en: "Countries Served", ar: "دولة مخدومة" },
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: { en: "Client Satisfaction", ar: "رضا العملاء" },
    },
  ]

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16 border-b">
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl text-foreground">
              {isRTL ? "فريقنا المتميز" : "Meet Our Expert Team"}
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {isRTL
                ? "خبراء متخصصون ملتزمون بتحقيق النجاح لعملائنا"
                : "Specialized experts committed to delivering exceptional results"}
            </p>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label[isRTL ? "ar" : "en"]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              {isRTL ? "فريقنا المتميز" : "Meet the Team"}
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {isRTL
                ? "مجموعة من الخبراء المتميزين الذين يجمعون بين الخبرة العملية والرؤية الاستراتيجية"
                : "A diverse group of industry leaders combining practical expertise with strategic vision"}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-1 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
              >
                <div className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-6">
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name[isRTL ? "ar" : "en"]}
                      className="h-48 w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />

                    <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <Button
                        size="sm"
                        className="flex-1 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        {isRTL ? "راسل" : "Email"}
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30"
                      >
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                        {member.name[isRTL ? "ar" : "en"]}
                      </h3>
                      <p className="text-sm font-semibold text-primary/80">{member.position[isRTL ? "ar" : "en"]}</p>
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground">{member.bio[isRTL ? "ar" : "en"]}</p>

                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                        >
                          {skill[isRTL ? "ar" : "en"]}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {isRTL ? "ابدأ مشروعك معنا" : "Start Your Project With Us"}
          </h2>
          <p className="mb-8 text-lg text-white/90">
            {isRTL
              ? "دعنا نساعدك في تحقيق أهدافك التجارية من خلال خبرتنا وحلولنا المبتكرة"
              : "Let us help you achieve your business goals with our expertise and innovative solutions"}
          </p>
          <Button
            size="lg"
            variant="outline"
            className="group border-white text-white hover:bg-white hover:text-primary bg-transparent"
          >
            {isRTL ? "تواصل معنا" : "Contact Us"}
            <ArrowRight
              className={`ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`}
            />
          </Button>
        </div>
      </section>
    </div>
  )
}
