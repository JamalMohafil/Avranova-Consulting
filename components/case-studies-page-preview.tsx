'use client'
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n"
import {
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  ArrowRight,
  Building,
  Factory,
  Smartphone,
  ShoppingCart,
} from "lucide-react"

export default function CaseStudiesPagePreview() {
  const { t, isRTL } = useI18n()

  const caseStudies = [
    {
      id: "digital-transformation-retail",
      title: {
        en: "Digital Transformation for Retail Giant",
        ar: "التحول الرقمي لعملاق التجزئة",
      },
      client: {
        en: "Global Retail Corporation",
        ar: "شركة التجزئة العالمية",
      },
      industry: { en: "Retail & E-commerce", ar: "التجزئة والتجارة الإلكترونية" },
      duration: { en: "18 months", ar: "18 شهر" },
      image: "https://www.smartosc.com/wp-content/uploads/2023/04/4-Types-of-Digital-Transformation-Projects.png",
      icon: ShoppingCart,
      challenge: {
        en: "A major retail chain was struggling with outdated systems, declining sales, and poor customer experience across their 500+ stores globally.",
        ar: "كانت سلسلة تجزئة كبرى تعاني من أنظمة قديمة وانخفاض المبيعات وتجربة عملاء سيئة عبر أكثر من 500 متجر عالمياً.",
      },
      solution: {
        en: "We implemented a comprehensive digital transformation strategy including cloud migration, AI-powered inventory management, and omnichannel customer experience platform.",
        ar: "نفذنا استراتيجية تحول رقمي شاملة تشمل الهجرة السحابية وإدارة المخزون المدعومة بالذكاء الاصطناعي ومنصة تجربة العملاء متعددة القنوات.",
      },
      results: [
        { metric: { en: "Revenue Increase", ar: "زيادة الإيرادات" }, value: "35%", icon: DollarSign },
        { metric: { en: "Customer Satisfaction", ar: "رضا العملاء" }, value: "92%", icon: Users },
        { metric: { en: "Operational Efficiency", ar: "الكفاءة التشغيلية" }, value: "45%", icon: TrendingUp },
        { metric: { en: "Implementation Time", ar: "وقت التنفيذ" }, value: "18 months", icon: Clock },
      ],
      testimonial: {
        en: "The transformation exceeded our expectations. Our sales have increased dramatically and customer satisfaction is at an all-time high.",
        ar: "التحول فاق توقعاتنا. مبيعاتنا زادت بشكل كبير ورضا العملاء في أعلى مستوياته على الإطلاق.",
      },
      clientName: { en: "John Smith, CEO", ar: "جون سميث، الرئيس التنفيذي" },
    },
    {
      id: "manufacturing-optimization",
      title: {
        en: "Manufacturing Process Optimization",
        ar: "تحسين عمليات التصنيع",
      },
      client: {
        en: "Industrial Manufacturing Company",
        ar: "شركة التصنيع الصناعي",
      },
      industry: { en: "Manufacturing", ar: "التصنيع" },
      duration: { en: "12 months", ar: "12 شهر" },
      image: "https://www.mrpeasy.com/blog/wp-content/uploads/2024/04/manufacturing.jpg",
      icon: Factory,
      challenge: {
        en: "A manufacturing company faced production bottlenecks, high waste rates, and increasing operational costs that were impacting profitability.",
        ar: "واجهت شركة تصنيع اختناقات في الإنتاج ومعدلات نفايات عالية وتكاليف تشغيلية متزايدة كانت تؤثر على الربحية.",
      },
      solution: {
        en: "We redesigned their production workflow, implemented lean manufacturing principles, and introduced IoT sensors for real-time monitoring and predictive maintenance.",
        ar: "أعدنا تصميم سير عمل الإنتاج ونفذنا مبادئ التصنيع الرشيق وقدمنا أجهزة استشعار إنترنت الأشياء للمراقبة في الوقت الفعلي والصيانة التنبؤية.",
      },
      results: [
        { metric: { en: "Cost Reduction", ar: "تقليل التكاليف" }, value: "28%", icon: DollarSign },
        { metric: { en: "Production Efficiency", ar: "كفاءة الإنتاج" }, value: "40%", icon: TrendingUp },
        { metric: { en: "Waste Reduction", ar: "تقليل النفايات" }, value: "55%", icon: Factory },
        { metric: { en: "Project Duration", ar: "مدة المشروع" }, value: "12 months", icon: Clock },
      ],
      testimonial: {
        en: "The process optimization has revolutionized our operations. We're now more efficient and profitable than ever before.",
        ar: "تحسين العمليات أحدث ثورة في عملياتنا. نحن الآن أكثر كفاءة وربحية من أي وقت مضى.",
      },
      clientName: { en: "Maria Garcia, Operations Director", ar: "ماريا غارسيا، مدير العمليات" },
    },
    {
      id: "fintech-startup-strategy",
      title: {
        en: "FinTech Startup Growth Strategy",
        ar: "استراتيجية نمو شركة التكنولوجيا المالية الناشئة",
      },
      client: {
        en: "Emerging FinTech Company",
        ar: "شركة التكنولوجيا المالية الناشئة",
      },
      industry: { en: "Financial Technology", ar: "التكنولوجيا المالية" },
      duration: { en: "8 months", ar: "8 أشهر" },
      image: "https://grosvenorstpauls.com/wp-content/uploads/2024/10/Grosvenor-House-Blog-Images-10.png",
      icon: Smartphone,
      challenge: {
        en: "A promising FinTech startup needed strategic guidance to scale operations, secure funding, and navigate regulatory requirements in multiple markets.",
        ar: "احتاجت شركة تكنولوجيا مالية ناشئة واعدة إلى إرشادات استراتيجية لتوسيع العمليات وتأمين التمويل والتنقل في المتطلبات التنظيمية في أسواق متعددة.",
      },
      solution: {
        en: "We developed a comprehensive growth strategy, helped secure Series A funding, established regulatory compliance framework, and created go-to-market strategies for 5 new countries.",
        ar: "طورنا استراتيجية نمو شاملة وساعدنا في تأمين تمويل السلسلة أ وأنشأنا إطار الامتثال التنظيمي وخلقنا استراتيجيات دخول السوق لـ 5 دول جديدة.",
      },
      results: [
        { metric: { en: "Funding Secured", ar: "التمويل المؤمن" }, value: "$15M", icon: DollarSign },
        { metric: { en: "User Growth", ar: "نمو المستخدمين" }, value: "300%", icon: Users },
        { metric: { en: "Market Expansion", ar: "توسع السوق" }, value: "5 countries", icon: TrendingUp },
        { metric: { en: "Time to Market", ar: "وقت دخول السوق" }, value: "8 months", icon: Clock },
      ],
      testimonial: {
        en: "Their strategic guidance was instrumental in our success. We couldn't have achieved this growth without their expertise.",
        ar: "إرشاداتهم الاستراتيجية كانت أساسية في نجاحنا. لم نكن لنحقق هذا النمو بدون خبرتهم.",
      },
      clientName: { en: "David Chen, Founder & CEO", ar: "ديفيد تشين، المؤسس والرئيس التنفيذي" },
    },
    {
      id: "healthcare-digital-transformation",
      title: {
        en: "Healthcare System Digital Modernization",
        ar: "التحديث الرقمي لنظام الرعاية الصحية",
      },
      client: {
        en: "Regional Healthcare Network",
        ar: "شبكة الرعاية الصحية الإقليمية",
      },
      industry: { en: "Healthcare", ar: "الرعاية الصحية" },
      duration: { en: "24 months", ar: "24 شهر" },
      image: "https://www.monash.edu/__data/assets/image/0006/3672105/fb-AI-healthcare-may-24-getty-1689003176.jpg",
      icon: Building,
      challenge: {
        en: "A healthcare network with 15 hospitals needed to modernize their patient management systems, improve care coordination, and enhance data security compliance.",
        ar: "احتاجت شبكة رعاية صحية تضم 15 مستشفى إلى تحديث أنظمة إدارة المرضى وتحسين تنسيق الرعاية وتعزيز امتثال أمان البيانات.",
      },
      solution: {
        en: "We implemented an integrated electronic health record system, developed telemedicine capabilities, and established HIPAA-compliant data management protocols across all facilities.",
        ar: "نفذنا نظام سجلات صحية إلكترونية متكامل وطورنا قدرات الطب عن بُعد وأنشأنا بروتوكولات إدارة البيانات المتوافقة مع قانون HIPAA عبر جميع المرافق.",
      },
      results: [
        { metric: { en: "Patient Satisfaction", ar: "رضا المرضى" }, value: "88%", icon: Users },
        { metric: { en: "Operational Efficiency", ar: "الكفاءة التشغيلية" }, value: "50%", icon: TrendingUp },
        { metric: { en: "Cost Savings", ar: "توفير التكاليف" }, value: "$2.5M", icon: DollarSign },
        { metric: { en: "Implementation", ar: "التنفيذ" }, value: "24 months", icon: Clock },
      ],
      testimonial: {
        en: "The digital transformation has significantly improved our patient care quality and operational efficiency across all our facilities.",
        ar: "التحول الرقمي حسن بشكل كبير من جودة رعاية المرضى والكفاءة التشغيلية عبر جميع مرافقنا.",
      },
      clientName: { en: "Dr. Sarah Johnson, Chief Medical Officer", ar: "د. سارة جونسون، كبير الأطباء" },
    },
  ]

  const industries = [
    { name: { en: "Retail & E-commerce", ar: "التجزئة والتجارة الإلكترونية" }, count: 45 },
    { name: { en: "Manufacturing", ar: "التصنيع" }, count: 38 },
    { name: { en: "Financial Services", ar: "الخدمات المالية" }, count: 32 },
    { name: { en: "Healthcare", ar: "الرعاية الصحية" }, count: 28 },
    { name: { en: "Technology", ar: "التكنولوجيا" }, count: 25 },
    { name: { en: "Energy & Utilities", ar: "الطاقة والمرافق" }, count: 22 },
  ]

  return (
    <div className="flex min-h-screen flex-col" dir={isRTL ? "rtl" : "ltr"}>
 
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary py-24 text-white">
          <div className="absolute inset-0 bg-black/10" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                {isRTL ? "دراسات الحالة" : "Case Studies"}
              </h1>
              <p className="mb-8 text-xl text-white/90 md:text-2xl">
                {isRTL
                  ? "قصص نجاح حقيقية تُظهر كيف نحول التحديات إلى فرص للنمو"
                  : "Real success stories showcasing how we transform challenges into growth opportunities"}
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {isRTL ? "مشاريعنا الناجحة" : "Our Successful Projects"}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {isRTL
                  ? "اكتشف كيف ساعدنا عملاءنا في تحقيق نتائج استثنائية وتحويل أعمالهم"
                  : "Discover how we've helped our clients achieve exceptional results and transform their businesses"}
              </p>
            </div>

            <div className="space-y-16">
              {caseStudies.map((study, index) => {
                const Icon = study.icon
                return (
                  <Card key={study.id} className="overflow-hidden border-0 bg-white shadow-lg dark:bg-gray-800">
                    <div className={`grid gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                       <div className={`relative w-full h-full ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                        <div className="aspect-video h-full w-full overflow-hidden lg:aspect-square">
                          <img
                            src={study.image || "/placeholder.svg"}
                            alt={study.title[isRTL ? "ar" : "en"]}
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                          <Icon className="h-6 w-6" />
                          <span className="font-medium">{study.industry[isRTL ? "ar" : "en"]}</span>
                        </div>
                      </div>

                       <div className={`p-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                        <div className="mb-4 flex items-center gap-4">
                          <Badge variant="secondary" className="text-primary">
                            {study.duration[isRTL ? "ar" : "en"]}
                          </Badge>
                          <Badge variant="outline">{study.industry[isRTL ? "ar" : "en"]}</Badge>
                        </div>

                        <h3 className="mb-2 text-2xl font-bold text-foreground">{study.title[isRTL ? "ar" : "en"]}</h3>
                        <p className="mb-4 text-lg text-primary font-medium">{study.client[isRTL ? "ar" : "en"]}</p>

                        <div className="mb-6 space-y-4">
                          <div>
                            <h4 className="mb-2 font-semibold text-foreground">{isRTL ? "التحدي:" : "Challenge:"}</h4>
                            <p className="text-muted-foreground">{study.challenge[isRTL ? "ar" : "en"]}</p>
                          </div>
                          <div>
                            <h4 className="mb-2 font-semibold text-foreground">{isRTL ? "الحل:" : "Solution:"}</h4>
                            <p className="text-muted-foreground">{study.solution[isRTL ? "ar" : "en"]}</p>
                          </div>
                        </div>

                        {/* Results Grid */}
                        <div className="mb-6 grid grid-cols-2 gap-4">
                          {study.results.map((result, resultIndex) => {
                            const ResultIcon = result.icon
                            return (
                              <div key={resultIndex} className="rounded-lg bg-gray-50 p-4 text-center dark:bg-gray-700">
                                <ResultIcon className="mx-auto mb-2 h-6 w-6 text-primary" />
                                <div className="text-2xl font-bold text-primary">{result.value}</div>
                                <div className="text-sm text-muted-foreground">
                                  {result.metric[isRTL ? "ar" : "en"]}
                                </div>
                              </div>
                            )
                          })}
                        </div>

                        {/* Testimonial */}
                        <div className="rounded-lg bg-primary/5 p-4">
                          <p className="mb-2 italic text-muted-foreground">
                            "{study.testimonial[isRTL ? "ar" : "en"]}"
                          </p>
                          <p className="font-medium text-foreground">{study.clientName[isRTL ? "ar" : "en"]}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="bg-gray-50 py-20 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {isRTL ? "الصناعات التي نخدمها" : "Industries We Serve"}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {isRTL
                  ? "خبرة واسعة عبر مختلف الصناعات والقطاعات"
                  : "Extensive expertise across various industries and sectors"}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, index) => (
                <Card key={index} className="border-0 bg-white shadow-lg dark:bg-gray-800">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg font-bold text-foreground">
                      {industry.name[isRTL ? "ar" : "en"]}
                    </CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {industry.count} {isRTL ? "مشروع" : "Projects"}
                    </CardDescription>
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
              {isRTL ? "جاهز لكتابة قصة نجاحك؟" : "Ready to Write Your Success Story?"}
            </h2>
            <p className="mb-8 text-xl text-white/90">
              {isRTL
                ? "دعنا نساعدك في تحقيق نتائج استثنائية مثل عملائنا الآخرين"
                : "Let us help you achieve exceptional results like our other clients"}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" className="text-primary hover:text-primary/90">
                {isRTL ? "ابدأ مشروعك" : "Start Your Project"}
                <ArrowRight className={`ml-2 h-5 w-5 ${isRTL ? "rotate-180" : ""}`} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                {isRTL ? "تحدث مع خبير" : "Talk to an Expert"}
              </Button>
            </div>
          </div>
        </section>
      </main>

     </div>
  )
}
