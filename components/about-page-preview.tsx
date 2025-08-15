'use client'
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n"
import { Target, Eye, Users, Award, TrendingUp, Shield, ArrowRight } from "lucide-react"

const AboutPagePreview = () => {
   const { t, isRTL } = useI18n()

  const values = [
    {
      icon: Shield,
      title: { en: "Integrity", ar: "النزاهة" },
      description: {
        en: "We maintain the highest ethical standards in all our business practices",
        ar: "نحافظ على أعلى المعايير الأخلاقية في جميع ممارساتنا التجارية",
      },
    },
    {
      icon: Target,
      title: { en: "Excellence", ar: "التميز" },
      description: {
        en: "We strive for excellence in every project and client interaction",
        ar: "نسعى للتميز في كل مشروع وتفاعل مع العملاء",
      },
    },
    {
      icon: Users,
      title: { en: "Collaboration", ar: "التعاون" },
      description: {
        en: "We believe in the power of teamwork and collaborative partnerships",
        ar: "نؤمن بقوة العمل الجماعي والشراكات التعاونية",
      },
    },
    {
      icon: TrendingUp,
      title: { en: "Innovation", ar: "الابتكار" },
      description: {
        en: "We embrace innovative solutions to solve complex business challenges",
        ar: "نتبنى الحلول المبتكرة لحل التحديات التجارية المعقدة",
      },
    },
  ]

  const achievements = [
    {
      number: "500+",
      title: { en: "Projects Completed", ar: "مشروع مكتمل" },
      description: { en: "Successfully delivered", ar: "تم تسليمها بنجاح" },
    },
    {
      number: "15+",
      title: { en: "Years Experience", ar: "سنة خبرة" },
      description: { en: "In the industry", ar: "في الصناعة" },
    },
    {
      number: "200+",
      title: { en: "Happy Clients", ar: "عميل سعيد" },
      description: { en: "Across the globe", ar: "حول العالم" },
    },
    {
      number: "50+",
      title: { en: "Expert Consultants", ar: "مستشار خبير" },
      description: { en: "On our team", ar: "في فريقنا" },
    },
  ]

  const timeline = [
    {
      year: "2008",
      title: { en: "Company Founded", ar: "تأسيس الشركة" },
      description: {
        en: "Started as a small consulting firm with a vision to transform businesses",
        ar: "بدأت كشركة استشارية صغيرة برؤية لتحويل الأعمال",
      },
    },
    {
      year: "2012",
      title: { en: "Regional Expansion", ar: "التوسع الإقليمي" },
      description: {
        en: "Expanded operations to serve clients across the Middle East region",
        ar: "توسعت العمليات لخدمة العملاء في جميع أنحاء منطقة الشرق الأوسط",
      },
    },
    {
      year: "2016",
      title: { en: "Digital Transformation", ar: "التحول الرقمي" },
      description: {
        en: "Launched digital consulting services to help businesses modernize",
        ar: "أطلقت خدمات الاستشارات الرقمية لمساعدة الشركات على التحديث",
      },
    },
    {
      year: "2020",
      title: { en: "Global Recognition", ar: "الاعتراف العالمي" },
      description: {
        en: "Received international awards for excellence in consulting services",
        ar: "حصلت على جوائز دولية للتميز في الخدمات الاستشارية",
      },
    },
    {
      year: "2024",
      title: { en: "Innovation Hub", ar: "مركز الابتكار" },
      description: {
        en: "Established innovation center to drive future business solutions",
        ar: "أنشأت مركز الابتكار لدفع حلول الأعمال المستقبلية",
      },
    },
  ]

  const certifications = [
    { name: "ISO 9001:2015", type: "Quality Management" },
    { name: "PMP Certified", type: "Project Management" },
    { name: "Six Sigma", type: "Process Excellence" },
    { name: "ITIL Foundation", type: "IT Service Management" },
  ]

  return (
    <div className="flex min-h-screen flex-col" dir={isRTL ? "rtl" : "ltr"}>
 
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary py-24 text-white">
          <div className="absolute inset-0 bg-black/10" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">{isRTL ? "من نحن" : "About Us"}</h1>
              <p className="mb-8 text-xl text-white/90 md:text-2xl">
                {isRTL
                  ? "نحن شركة استشارية رائدة ملتزمة بتحويل الأعمال وتحقيق النمو المستدام"
                  : "We are a leading consulting firm committed to transforming businesses and driving sustainable growth"}
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <Card className="border-0 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                    <Target className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {isRTL ? "مهمتنا" : "Our Mission"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg text-muted-foreground">
                    {isRTL
                      ? "تمكين الشركات من تحقيق إمكاناتها الكاملة من خلال الاستشارات الاستراتيجية المبتكرة والحلول المخصصة التي تدفع النمو المستدام والنجاح طويل المدى"
                      : "To empower businesses to achieve their full potential through innovative strategic consulting and tailored solutions that drive sustainable growth and long-term success"}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-secondary/5 to-primary/5 shadow-lg">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-white">
                    <Eye className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {isRTL ? "رؤيتنا" : "Our Vision"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg text-muted-foreground">
                    {isRTL
                      ? "أن نكون الشريك الاستشاري الأكثر ثقة عالمياً، معروفين بتميزنا في تحويل التحديات إلى فرص وقيادة الشركات نحو مستقبل أكثر إشراقاً"
                      : "To be the most trusted consulting partner globally, recognized for our excellence in transforming challenges into opportunities and leading businesses toward a brighter future"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 py-20 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {isRTL ? "قيمنا الأساسية" : "Our Core Values"}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {isRTL
                  ? "القيم التي توجه كل ما نقوم به وتشكل أساس علاقاتنا مع العملاء"
                  : "The values that guide everything we do and form the foundation of our client relationships"}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card
                    key={index}
                    className="group border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
                  >
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {value.title[isRTL ? "ar" : "en"]}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground">{value.description[isRTL ? "ar" : "en"]}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {isRTL ? "إنجازاتنا بالأرقام" : "Our Achievements in Numbers"}
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 text-4xl font-bold text-primary md:text-5xl">{achievement.number}</div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {achievement.title[isRTL ? "ar" : "en"]}
                  </h3>
                  <p className="text-muted-foreground">{achievement.description[isRTL ? "ar" : "en"]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-gray-50 py-20 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {isRTL ? "رحلتنا عبر السنين" : "Our Journey Through the Years"}
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 h-full w-0.5 bg-primary/30 transform -translate-x-1/2" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                      <Card className="border-0 bg-white shadow-lg dark:bg-gray-800">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary" className="text-primary">
                              {item.year}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl font-bold text-foreground">
                            {item.title[isRTL ? "ar" : "en"]}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{item.description[isRTL ? "ar" : "en"]}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="relative flex h-4 w-4 items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-primary" />
                    </div>
                    <div className="w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {isRTL ? "شهاداتنا واعتماداتنا" : "Our Certifications & Accreditations"}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-0 bg-white shadow-lg dark:bg-gray-800">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Award className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground">{cert.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">{cert.type}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-secondary py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {isRTL ? "انضم إلى رحلة النجاح" : "Join Our Success Story"}
            </h2>
            <p className="mb-8 text-xl text-white/90">
              {isRTL
                ? "دعنا نساعدك في كتابة الفصل التالي من قصة نجاح شركتك"
                : "Let us help you write the next chapter of your company's success story"}
            </p>
            <Button size="lg" variant="secondary" className="text-primary hover:text-primary/90">
              {isRTL ? "ابدأ رحلتك معنا" : "Start Your Journey With Us"}
              <ArrowRight className={`ml-2 h-5 w-5 ${isRTL ? "rotate-180" : ""}`} />
            </Button>
          </div>
        </section>
      </main>

     </div>
  )
}

export default AboutPagePreview