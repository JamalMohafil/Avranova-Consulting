"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n"
import {
  Building2,
  Layers3,
  Zap,
  Wrench,
  Eye,
  CheckCircle,
  ArrowRight,
  Ruler,
  Cpu,
  FileText,
  Users,
  Clock,
  Award,
  Lightbulb,
} from "lucide-react"

export function ServicesPagePreview() {
  const { t, isRTL } = useI18n()

  const services = [
    {
      id: "bim-coordination",
      icon: Layers3,
      title: {
        en: "BIM Coordination & Management",
        ar: "تنسيق وإدارة نمذجة معلومات البناء",
      },
      description: {
        en: "Advanced Building Information Modeling coordination ensuring seamless integration across all disciplines",
        ar: "تنسيق متقدم لنمذجة معلومات البناء يضمن التكامل السلس عبر جميع التخصصات",
      },
      features: [
        { en: "3D Model Coordination", ar: "تنسيق النماذج ثلاثية الأبعاد" },
        { en: "Clash Detection & Resolution", ar: "اكتشاف وحل التعارضات" },
        { en: "Multi-Discipline Integration", ar: "التكامل متعدد التخصصات" },
        { en: "4D/5D BIM Implementation", ar: "تنفيذ نمذجة معلومات البناء 4D/5D" },
      ],
      deliverables: {
        en: "Coordinated BIM Models, Clash Reports, Implementation Plans",
        ar: "نماذج BIM منسقة، تقارير التعارضات، خطط التنفيذ",
      },
    },
    {
      id: "architectural-visualization",
      icon: Eye,
      title: {
        en: "Architectural Visualization",
        ar: "التصور المعماري",
      },
      description: {
        en: "Photorealistic renderings and immersive visualizations that bring your architectural vision to life",
        ar: "عروض واقعية وتصورات غامرة تحيي رؤيتك المعمارية",
      },
      features: [
        { en: "Photorealistic Renderings", ar: "عروض واقعية" },
        { en: "Virtual Reality Walkthroughs", ar: "جولات الواقع الافتراضي" },
        { en: "Interactive 3D Models", ar: "نماذج ثلاثية الأبعاد تفاعلية" },
        { en: "Animation & Flythrough", ar: "الرسوم المتحركة والطيران" },
      ],
      deliverables: {
        en: "High-Resolution Images, VR Files, Interactive Models",
        ar: "صور عالية الدقة، ملفات الواقع الافتراضي، نماذج تفاعلية",
      },
    },
    {
      id: "mep-integration",
      icon: Zap,
      title: {
        en: "MEP Systems Integration",
        ar: "تكامل أنظمة الكهرباء والميكانيك والسباكة",
      },
      description: {
        en: "Comprehensive mechanical, electrical, and plumbing systems design and coordination",
        ar: "تصميم وتنسيق شامل لأنظمة الميكانيك والكهرباء والسباكة",
      },
      features: [
        { en: "HVAC System Design", ar: "تصميم أنظمة التكييف" },
        { en: "Electrical Load Analysis", ar: "تحليل الأحمال الكهربائية" },
        { en: "Plumbing & Fire Safety", ar: "السباكة والسلامة من الحرائق" },
        { en: "Energy Efficiency Optimization", ar: "تحسين كفاءة الطاقة" },
      ],
      deliverables: {
        en: "MEP Drawings, Load Calculations, System Specifications",
        ar: "رسومات MEP، حسابات الأحمال، مواصفات الأنظمة",
      },
    },
    {
      id: "structural-engineering",
      icon: Building2,
      title: {
        en: "Structural Engineering",
        ar: "الهندسة الإنشائية",
      },
      description: {
        en: "Advanced structural analysis and design ensuring safety, efficiency, and code compliance",
        ar: "تحليل وتصميم إنشائي متقدم يضمن السلامة والكفاءة والامتثال للمعايير",
      },
      features: [
        { en: "Structural Analysis & Design", ar: "التحليل والتصميم الإنشائي" },
        { en: "Foundation Engineering", ar: "هندسة الأساسات" },
        { en: "Seismic & Wind Analysis", ar: "تحليل الزلازل والرياح" },
        { en: "Code Compliance Review", ar: "مراجعة الامتثال للمعايير" },
      ],
      deliverables: {
        en: "Structural Drawings, Calculations, Specifications",
        ar: "الرسومات الإنشائية، الحسابات، المواصفات",
      },
    },
    {
      id: "civil-engineering",
      icon: Ruler,
      title: {
        en: "Civil Engineering Solutions",
        ar: "حلول الهندسة المدنية",
      },
      description: {
        en: "Comprehensive civil engineering services from site planning to infrastructure design",
        ar: "خدمات هندسة مدنية شاملة من تخطيط الموقع إلى تصميم البنية التحتية",
      },
      features: [
        { en: "Site Planning & Grading", ar: "تخطيط الموقع والتسوية" },
        { en: "Drainage & Utilities", ar: "الصرف والمرافق" },
        { en: "Road & Pavement Design", ar: "تصميم الطرق والرصف" },
        { en: "Environmental Compliance", ar: "الامتثال البيئي" },
      ],
      deliverables: {
        en: "Site Plans, Grading Plans, Utility Layouts",
        ar: "مخططات الموقع، مخططات التسوية، تخطيطات المرافق",
      },
    },
    {
      id: "project-management",
      icon: Users,
      title: {
        en: "Project Management & Consulting",
        ar: "إدارة المشاريع والاستشارات",
      },
      description: {
        en: "Expert project management ensuring timely delivery and optimal resource utilization",
        ar: "إدارة مشاريع خبيرة تضمن التسليم في الوقت المحدد والاستخدام الأمثل للموارد",
      },
      features: [
        { en: "Project Planning & Scheduling", ar: "تخطيط وجدولة المشاريع" },
        { en: "Quality Assurance & Control", ar: "ضمان ومراقبة الجودة" },
        { en: "Risk Management", ar: "إدارة المخاطر" },
        { en: "Stakeholder Coordination", ar: "تنسيق أصحاب المصلحة" },
      ],
      deliverables: {
        en: "Project Plans, Progress Reports, Quality Documentation",
        ar: "خطط المشاريع، تقارير التقدم، وثائق الجودة",
      },
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: { en: "Analysis & Assessment", ar: "التحليل والتقييم" },
      description: {
        en: "Comprehensive project analysis and technical requirements assessment",
        ar: "تحليل شامل للمشروع وتقييم المتطلبات التقنية",
      },
      icon: FileText,
    },
    {
      step: "02",
      title: { en: "Design & Modeling", ar: "التصميم والنمذجة" },
      description: {
        en: "Advanced BIM modeling and multi-disciplinary design development",
        ar: "نمذجة BIM متقدمة وتطوير التصميم متعدد التخصصات",
      },
      icon: Cpu,
    },
    {
      step: "03",
      title: { en: "Coordination & Integration", ar: "التنسيق والتكامل" },
      description: {
        en: "Cross-disciplinary coordination and clash detection resolution",
        ar: "التنسيق عبر التخصصات وحل اكتشاف التعارضات",
      },
      icon: Layers3,
    },
    {
      step: "04",
      title: { en: "Delivery & Support", ar: "التسليم والدعم" },
      description: {
        en: "Final deliverables and ongoing technical support throughout construction",
        ar: "التسليمات النهائية والدعم التقني المستمر أثناء البناء",
      },
      icon: Award,
    },
  ]

  const expertiseAreas = [
    {
      icon: Building2,
      title: { en: "Architecture", ar: "العمارة" },
      description: { en: "Innovative architectural design solutions", ar: "حلول تصميم معماري مبتكرة" },
    },
    {
      icon: Wrench,
      title: { en: "MEP Systems", ar: "أنظمة MEP" },
      description: { en: "Integrated building systems design", ar: "تصميم أنظمة البناء المتكاملة" },
    },
    {
      icon: Layers3,
      title: { en: "BIM Technology", ar: "تقنية BIM" },
      description: { en: "Advanced modeling and coordination", ar: "النمذجة والتنسيق المتقدم" },
    },
    {
      icon: Lightbulb,
      title: { en: "Sustainability", ar: "الاستدامة" },
      description: { en: "Green building and energy efficiency", ar: "البناء الأخضر وكفاءة الطاقة" },
    },
  ]

  return (
    <div className="flex min-h-screen flex-col" dir={isRTL ? "rtl" : "ltr"}>
       <main className="flex-1">
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/architectural-blueprints.png')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="mb-6 bg-blue-600/20 text-blue-200 border-blue-400/30">
                {isRTL ? "الخبرة التقنية المتقدمة" : "Advanced Technical Expertise"}
              </Badge>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {isRTL ? "خدمات أفرانوفا الاستشارية" : "Avranova Consulting Services"}
              </h1>
              <p className="mb-8 text-xl text-slate-300 md:text-2xl leading-relaxed">
                {isRTL
                  ? "حلول BIM متقدمة، تصور معماري، وتكامل MEP لتنفيذ مبسط وأداء محسن من التصميم إلى البناء"
                  : "Advanced BIM solutions, architectural visualization, and MEP integration for streamlined execution and optimized performance from design to construction"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  {isRTL ? "احصل على اقتراح مخصص" : "Get Custom Proposal"}
                  <ArrowRight className={`ml-2 h-5 w-5 ${isRTL ? "rotate-180" : ""}`} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-400 text-slate-300 hover:bg-slate-800 bg-transparent"
                >
                  {isRTL ? "استكشف مشاريعنا" : "Explore Our Projects"}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {expertiseAreas.map((area, index) => {
                const Icon = area.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      {area.title[isRTL ? "ar" : "en"]}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {area.description[isRTL ? "ar" : "en"]}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {isRTL ? "خدماتنا التقنية المتخصصة" : "Our Specialized Technical Services"}
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                {isRTL
                  ? "نجمع بين الدقة التقنية والحساسية التصميمية لتقديم مساحات ليست فقط وظيفية بل تتطلع إلى المستقبل"
                  : "We bring together technical accuracy and design sensitivity to deliver spaces that are not only functional but forward-thinking"}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Card
                    key={service.id}
                    className="group relative overflow-hidden border-0 bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardHeader className="relative pb-4">
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
                          <Icon className="h-7 w-7" />
                        </div>
                        <Badge variant="secondary" className="text-xs font-medium bg-slate-100 dark:bg-slate-700">
                          {isRTL ? "تقني" : "Technical"}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground mb-2">
                        {service.title[isRTL ? "ar" : "en"]}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {service.description[isRTL ? "ar" : "en"]}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative">
                      <div className="mb-6">
                        <h4 className="font-semibold text-sm text-foreground mb-3">
                          {isRTL ? "الخدمات الأساسية:" : "Core Services:"}
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle
                                className={`h-4 w-4 text-blue-500 ${isRTL ? "ml-2" : "mr-2"} flex-shrink-0`}
                              />
                              {feature[isRTL ? "ar" : "en"]}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-6 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <h4 className="font-semibold text-xs text-foreground mb-2">
                          {isRTL ? "التسليمات:" : "Deliverables:"}
                        </h4>
                        <p className="text-xs text-muted-foreground">{service.deliverables[isRTL ? "ar" : "en"]}</p>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                        {isRTL ? "طلب عرض سعر" : "Request Quote"}
                        <ArrowRight className={`ml-2 h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {isRTL ? "منهجيتنا الهندسية المثبتة" : "Our Proven Engineering Methodology"}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {isRTL
                  ? "نتبع منهجية منظمة تضمن الدقة التقنية والتسليم في الوقت المحدد"
                  : "We follow a structured methodology ensuring technical precision and timely delivery"}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="relative text-center group">
                    <div className="mb-6 flex justify-center">
                      <div className="relative">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-8 w-8" />
                        </div>
                        <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-slate-800 text-sm font-bold text-blue-600 shadow-lg">
                          {step.step}
                        </div>
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title[isRTL ? "ar" : "en"]}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description[isRTL ? "ar" : "en"]}</p>
                    {index < processSteps.length - 1 && (
                      <div
                        className={`absolute top-10 ${isRTL ? "-left-4" : "-right-4"} hidden h-0.5 w-8 bg-gradient-to-r from-blue-400 to-cyan-400 lg:block`}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                  {isRTL ? "لماذا تختار أفرانوفا؟" : "Why Choose Avranova?"}
                </h2>
                <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                  {isRTL
                    ? "نحن نؤمن أن الابتكار الحقيقي يبدأ بالدقة والإبداع والتعاون السلس. فريقنا يجمع بين الدقة التقنية والحساسية التصميمية."
                    : "We believe that true innovation starts with precision, creativity, and seamless collaboration. Our team brings together technical accuracy and design sensitivity."}
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {isRTL ? "خبرة متعددة التخصصات" : "Multi-Disciplinary Expertise"}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {isRTL
                          ? "خبرة عبر العمارة والمدني والإنشائي وMEP"
                          : "Expertise across Architecture, Civil, Structural, and MEP"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {isRTL ? "تسليم في الوقت المحدد" : "Timely Delivery"}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {isRTL ? "التزام بالمواعيد النهائية والجودة" : "Commitment to deadlines and quality"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Building2 className="h-24 w-24 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {isRTL ? "حلول ذكية ومستدامة" : "Smart & Sustainable Solutions"}
                    </h3>
                    <p className="text-muted-foreground">
                      {isRTL ? "هندسة فعالة للمستقبل" : "Efficient engineering for the future"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/engineering-blueprints-technical.png')] bg-cover bg-center opacity-5" />
          <div className="container mx-auto px-4 text-center relative">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {isRTL ? "جاهز لبدء مشروعك؟" : "Ready to Start Your Project?"}
            </h2>
            <p className="mb-8 text-xl text-slate-300 max-w-2xl mx-auto">
              {isRTL
                ? "دعنا نساعدك في تحقيق رؤيتك بحلول هندسية ذكية ومستدامة وفعالة"
                : "Let us help you bring your vision to life with smart, sustainable, and efficient engineering solutions"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                {isRTL ? "احصل على اقتراح مخصص" : "Get Custom Proposal"}
                <ArrowRight className={`ml-2 h-5 w-5 ${isRTL ? "rotate-180" : ""}`} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-400 text-slate-300 hover:bg-slate-800 bg-transparent"
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
