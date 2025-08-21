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
  Globe,
  Scan,
  Archive,
  Camera,
} from "lucide-react"

export function ServicesPagePreview() {
  const { t, isRTL } = useI18n()

  const services = [
     {
      id: "international-partnerships",
      icon: Globe,
      title: {
        en: "International Project Partnerships",
        ar: "شراكات المشاريع الدولية",
      },
      description: {
        en: "Strategic bridge between Syrian companies and European firms for large-scale infrastructure projects",
        ar: "جسر استراتيجي بين الشركات السورية والشركات الأوروبية لمشاريع البنية التحتية الكبيرة",
      },
      features: [
        { en: "Airport & Energy Projects", ar: "مشاريع المطارات والطاقة" },
        { en: "Water Infrastructure", ar: "البنية التحتية للمياه" },
        { en: "Urban Reconstruction", ar: "إعادة الإعمار الحضري" },
        { en: "On-site Supervision", ar: "الإشراف الميداني" },
      ],
      deliverables: {
        en: "Partnership Agreements, Project Supervision, Knowledge Transfer, Quality Implementation",
        ar: "اتفاقيات الشراكة، إشراف المشروع، نقل المعرفة، التنفيذ عالي الجودة",
      },
    },
    {
      id: "bim-consulting",
      icon: Users,
      title: {
        en: "BIM Consulting & Implementation",
        ar: "استشارات وتنفيذ BIM",
      },
      description: {
        en: "Comprehensive BIM consulting services guiding organizations in successfully adopting BIM methodology and developing skilled teams",
        ar: "خدمات استشارية شاملة لـ BIM توجه المؤسسات في اعتماد منهجية BIM بنجاح وتطوير فرق ماهرة",
      },
      features: [
        { en: "BIM Strategy Development", ar: "تطوير استراتيجية BIM" },
        { en: "Team Training Programs", ar: "برامج تدريب الفرق" },
        { en: "Process Implementation", ar: "تنفيذ العمليات" },
        { en: "Technology Integration", ar: "تكامل التكنولوجيا" },
      ],
      deliverables: {
        en: "Implementation Plans, Training Materials, Process Documentation, Ongoing Support",
        ar: "خطط التنفيذ، المواد التدريبية، توثيق العمليات، الدعم المستمر",
      },
    },
    {
      id: "bim-services",
      icon: Layers3,
      title: {
        en: "BIM Services",
        ar: "خدمات نمذجة معلومات البناء",
      },
      description: {
        en: "Advanced BIM solutions supporting Engineers, Architects, Constructors, and Manufacturers with comprehensive modeling for all project types",
        ar: "حلول BIM متقدمة تدعم المهندسين والمعماريين والمقاولين والمصنعين بنمذجة شاملة لجميع أنواع المشاريع",
      },
      features: [
        { en: "Architectural, Structural & MEP Modeling", ar: "النمذجة المعمارية والإنشائية والـ MEP" },
        { en: "3D Renderings & Animations", ar: "العروض ثلاثية الأبعاد والرسوم المتحركة" },
        { en: "4D/5D Planning & Simulations", ar: "التخطيط والمحاكاة 4D/5D" },
        { en: "Virtual Reality Experiences", ar: "تجارب الواقع الافتراضي" },
      ],
      deliverables: {
        en: "BIM Models, Plans & Reports, Quantity Take-offs, Multidisciplinary Coordination",
        ar: "نماذج BIM، المخططات والتقارير، استخراج الكميات، التنسيق متعدد التخصصات",
      },
    },
    
    {
      id: "cad-services",
      icon: FileText,
      title: {
        en: "CAD Services",
        ar: "  خدمات الرسم بالحاسوب CAD ",
      },
      description: {
        en: "Comprehensive CAD services supporting all project stages with precise documentation and detailed drawings",
        ar: "خدمات شاملة للرسم بمساعدة الحاسوب تدعم جميع مراحل المشروع بتوثيق دقيق ورسوم مفصلة",
      },
      features: [
        { en: "Shop Drawings & As-Built Plans", ar: "رسوم التنفيذ والمخططات الفعلية" },
        { en: "Fabrication Drawings", ar: "رسوم التصنيع" },
        { en: "Metal Fabrication Plans", ar: "مخططات تصنيع المعادن" },
        { en: "Quantity Take-offs", ar: "استخراج الكميات" },
      ],
      deliverables: {
        en: "Technical Drawings, Fabrication Plans, Documentation, Measurements",
        ar: "الرسوم التقنية، مخططات التصنيع، التوثيق، القياسات",
      },
    },
   
    {
      id: "digitalization",
      icon: Archive,
      title: {
        en: "Digitalization Services",
        ar: "خدمات الرقمنة",
      },
      description: {
        en: "Comprehensive digitalization solutions organizing and optimizing archives, servers, and documentation systems for government and private companies",
        ar: " حلول رقمنة شاملة تنظم وتحسن الأرشيف والخوادم وأنظمة التوثيق ومثالي للشركات الحكومية والخاصة",
      },
      features: [
        { en: "Document Scanning & Digitizing", ar: "مسح ورقمنة الوثائق" },
        { en: "As-Built Plans Updating", ar: "تحديث المخططات الفعلية" },
        { en: "Folder System Organization", ar: "تنظيم أنظمة المجلدات" },
        { en: "Data Management Solutions", ar: "حلول إدارة البيانات" },
      ],
      deliverables: {
        en: "Digital Archives, Updated Plans, Organizational Systems, Data Access Solutions",
        ar: "الأرشيف الرقمي، المخططات المحدثة، الأنظمة التنظيمية، حلول الوصول للبيانات",
      },
    },
    {
      id: "topographic-surveying",
      icon: Camera,
      title: {
        en: "Topographic Surveying with Drone & Laser Scanning",
        ar: "المسح الطوبوغرافي بالطائرات المسيرة والليزر",
      },
      description: {
        en: "Advanced surveying solutions using drone photogrammetry and laser scanning technology for precise 3D modeling",
        ar: "حلول مسح متقدمة باستخدام التصوير بالطائرات المسيرة وتقنية المسح بالليزر للنمذجة ثلاثية الأبعاد الدقيقة",
      },
      features: [
        { en: "Drone-based Photogrammetry", ar: "التصوير بالطائرات المسيرة" },
        { en: "360º Laser Scanning", ar: "المسح بالليزر 360 درجة" },
        { en: "High-accuracy Point Clouds", ar: "سحب النقاط عالية الدقة" },
        { en: "3D Model Generation", ar: "إنتاج النماذج ثلاثية الأبعاد" },
      ],
      deliverables: {
        en: "Point Cloud Data, 3D Models, Topographic Plans, Precise Measurements",
        ar: "بيانات سحابة النقاط، النماذج ثلاثية الأبعاد، المخططات الطوبوغرافية، القياسات الدقيقة",
      },
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: { en: "Analysis & Assessment", ar: "التحليل والتقييم" },
      description: {
        en: "Comprehensive project analysis and technical requirements assessment using international best practices",
        ar: "تحليل شامل للمشروع وتقييم المتطلبات التقنية باستخدام أفضل الممارسات الدولية",
      },
      icon: FileText,
    },
    {
      step: "02",
      title: { en: "Advanced BIM Modeling", ar: "النمذجة المتقدمة BIM" },
      description: {
        en: "Multi-disciplinary BIM modeling with programming tools and automation for maximum efficiency",
        ar: "نمذجة BIM متعددة التخصصات مع أدوات البرمجة والأتمتة للحصول على أقصى كفاءة",
      },
      icon: Layers3,
    },
    {
      step: "03",
      title: { en: "Coordination & Integration", ar: "التنسيق والتكامل" },
      description: {
        en: "Cross-disciplinary coordination ensuring seamless integration across all project phases",
        ar: "التنسيق عبر التخصصات يضمن التكامل السلس عبر جميع مراحل المشروع",
      },
      icon: Wrench,
    },
    {
      step: "04",
      title: { en: "Delivery & Support", ar: "التسليم والدعم" },
      description: {
        en: "Complete deliverables with ongoing technical support and supervision throughout construction",
        ar: "التسليمات الكاملة مع الدعم التقني المستمر والإشراف أثناء البناء",
      },
      icon: Award,
    },
  ]

  const expertiseAreas = [
    {
      icon: Building2,
      title: { en: "Architecture & Civil", ar: "العمارة والمدني" },
      description: { en: "Comprehensive architectural and civil engineering solutions", ar: "حلول شاملة للهندسة المعمارية والمدنية" },
    },
    {
      icon: Zap,
      title: { en: "MEP & Energy", ar: "MEP والطاقة" },
      description: { en: "Mechanical, electrical, plumbing and energy systems", ar: "الأنظمة الميكانيكية والكهربائية والصحية والطاقة" },
    },
    {
      icon: Layers3,
      title: { en: "BIM Technology", ar: "تقنية BIM" },
      description: { en: "Advanced BIM with integrated programming tools", ar: "BIM متقدم مع أدوات البرمجة المدمجة" },
    },
    {
      icon: Globe,
      title: { en: "International Projects", ar: "المشاريع الدولية" },
      description: { en: "Bridging local and international expertise", ar: "ربط الخبرة المحلية والدولية" },
    },
  ]

  const keyBenefits = [
    {
      icon: Award,
      title: { en: "International Experience", ar: "الخبرة الدولية" },
      description: { en: "Multinational company experience with detailed precision", ar: "خبرة شركات متعددة الجنسيات مع دقة تفصيلية" },
    },
    {
      icon: Cpu,
      title: { en: "Programming Integration", ar: "تكامل البرمجة" },
      description: { en: "Enhanced BIM with programming tools and automation", ar: "BIM محسن بأدوات البرمجة والأتمتة" },
    },
    {
      icon: Users,
      title: { en: "Local Supervision", ar: "الإشراف المحلي" },
      description: { en: "On-site supervision ensuring quality implementation", ar: "إشراف ميداني يضمن التنفيذ عالي الجودة" },
    },
    {
      icon: Clock,
      title: { en: "Streamlined Workflows", ar: "سير العمل المبسط" },
      description: { en: "Optimized processes reducing errors and timelines", ar: "العمليات المحسنة تقلل الأخطاء والمواعيد النهائية" },
    },
  ]

  // London,Argentina, Spain, Saudi Arabia, Syria

  return (
    <div className="flex min-h-screen flex-col" dir={isRTL ? "rtl" : "ltr"}>
       <main className="flex-1">
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/architectural-blueprints.png')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-6xl text-center">
              <Badge className="mb-6 text-sm bg-blue-600/20 text-blue-200 border-blue-400/30">
                {isRTL ? "حلول BIM شاملة للمشاريع المعمارية والإنشائية والـ MEP والمدنية والصناعية" : "Comprehensive BIM Solutions for Architecture, Structure, MEP, Civil, and Industrial Projects"}
              </Badge>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {isRTL ? "خدمات أفرانوفا الاستشارية" : "Avranova Consulting Services"}
              </h1>
              <p className="mb-8 text-lg text-slate-300 md:text-xl leading-relaxed max-w-5xl mx-auto">
                {isRTL
                  ? "نقدم خدمات BIM متقدمة محسنة بأدوات البرمجة المتكاملة. منهجنا يبسط تنفيذ المشاريع، يقلل الأخطاء، ويحسن الأداء من التصميم إلى البناء. بدمج التكنولوجيا المتطورة مع الخبرة الصناعية، نضمن الدقة والكفاءة وسير العمل متعدد التخصصات المنسق بالكامل لكل مشروع."
                  : "At Avranova Consulting, we deliver advanced BIM services enhanced with integrated programming tools. Our approach streamlines project execution, reduces errors, and optimizes performance from design to construction. By combining cutting-edge technology with industry expertise, we ensure precision, efficiency, and fully coordinated multidisciplinary workflows for every project."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  {isRTL ? "احصل على اقتراح مخصص" : "Get Custom Proposal"}
                  <ArrowRight className={`ml-2 h-5 w-5 ${isRTL ? "rotate-180" : ""}`} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-400 text-slate-300 dark:hover:bg-slate-100 hover:bg-slate-800 bg-transparent"
                >
                  {isRTL ? "استكشف مشاريعنا" : "Explore Our Projects"}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16  bg-slate-50 dark:bg-slate-900">
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
                  ? "نجمع بين الدقة التقنية والخبرة الدولية لتقديم حلول هندسية متقدمة تلبي أعلى معايير الجودة"
                  : "We combine technical precision with international expertise to deliver advanced engineering solutions that meet the highest quality standards"}
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
                        <Badge variant="secondary" className="text-xs font-medium  bg-slate-700">
                          {isRTL ? "متخصص" : "Specialized"}
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
                        <ul className={`space-y-2 ${isRTL ? "items-start ":"items-end"}flex flex-col`}>
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-muted-foreground">
                             {isRTL ? (
                              <>
                              {feature[isRTL ? "ar" : "en"]}
                               <CheckCircle
                                className={`h-4 w-4 text-blue-500 mr-4 flex-shrink-0`}
                              />
                              </>
                             ) : (
                              <>
                               <CheckCircle
                                className={`h-4 w-4 text-blue-500 ${isRTL ? "ml-2" : "mr-2"} flex-shrink-0`}
                              />
                              {feature[isRTL ? "ar" : "en"]}
                              </>
                             )}
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
                  ? "نتبع منهجية منظمة تدمج أفضل الممارسات الدولية مع الخبرة المحلية"
                  : "We follow a structured methodology that integrates international best practices with local expertise"}
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

        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                  {isRTL ? "لماذا تختار أفرانوفا؟" : "Why Choose Avranova?"}
                </h2>
                <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                  {isRTL
                    ? "نجمع بين الخبرة الدولية والفهم العميق للسوق المحلي، مما يضمن تنفيذ مشاريع عالية الجودة تساهم في التطوير والتحديث الحضري."
                    : "We combine international expertise with deep understanding of the local market, ensuring high-quality project implementation that contributes to urban development and modernization."}
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {keyBenefits.map((benefit, index) => {
                    const Icon = benefit.icon
                    return (
                      <div key={index} className={`flex ${isRTL ? "justify-start" : "justify-end"} items-start gap-3`}>
                       {isRTL ? (<> 
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {benefit.title[isRTL ? "ar" : "en"]}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {benefit.description[isRTL ? "ar" : "en"]}
                          </p>
                        </div>
                        <div className="flex h-10 w-10
                         items-center justify-center
                          rounded-lg bg-blue-100 dark:bg-blue-900/30
                           text-blue-600 dark:text-blue-400">
                          <Icon className="h-5 w-5" />
                        </div>
                        </>) : (<>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {benefit.title[isRTL ? "ar" : "en"]}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {benefit.description[isRTL ? "ar" : "en"]}
                          </p>
                        </div></>)}
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="relative">
                <div className="h-[70vh] max-h-[600px] rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="h-24 w-24 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {isRTL ? "الجسر بين السوق المحلي والعالمي" : "Bridging Local & International"}
                    </h3>
                    <p className="text-muted-foreground">
                      {isRTL ? "نقل المعرفة والخبرة العالمية للمشاريع المحلية" : "Transferring global knowledge and expertise to local projects"}
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
                ? "دعنا نساعدك في تحقيق رؤيتك بحلول BIM متقدمة وخبرة دولية تضمن النجاح"
                : "Let us help you bring your vision to life with advanced BIM solutions and international expertise that ensures success"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                {isRTL ? "احصل على استشارة" : "Get Consultation"}
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