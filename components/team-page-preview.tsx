'use client'
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n"
import { Linkedin, Mail, Users, ArrowRight } from "lucide-react"

export default function TeamPagePreview() {
  const { t, isRTL } = useI18n()

  const leadership = [
    {
      name: { en: "Sarah Johnson", ar: "سارة جونسون" },
      position: { en: "Chief Executive Officer", ar: "الرئيس التنفيذي" },
      image: "/professional-ceo-woman.png",
      bio: {
        en: "With over 20 years of experience in strategic consulting, Sarah leads our vision of transforming businesses globally. She holds an MBA from Harvard Business School and has worked with Fortune 500 companies.",
        ar: "مع أكثر من 20 عامًا من الخبرة في الاستشارات الاستراتيجية، تقود سارة رؤيتنا لتحويل الأعمال عالمياً. تحمل درجة ماجستير في إدارة الأعمال من كلية هارفارد للأعمال وعملت مع شركات فورتشن 500.",
      },
      expertise: [
        { en: "Strategic Planning", ar: "التخطيط الاستراتيجي" },
        { en: "Digital Transformation", ar: "التحول الرقمي" },
        { en: "Leadership Development", ar: "تطوير القيادة" },
      ],
      email: "sarah.johnson@company.com",
      linkedin: "linkedin.com/in/sarahjohnson",
    },
    {
      name: { en: "Michael Chen", ar: "مايكل تشين" },
      position: { en: "Chief Technology Officer", ar: "مدير التكنولوجيا" },
      image: "/asian-cto.png",
      bio: {
        en: "Michael brings 15+ years of technology leadership experience, specializing in digital transformation and innovation strategies. He previously led technology initiatives at major tech companies.",
        ar: "يجلب مايكل أكثر من 15 عامًا من الخبرة في قيادة التكنولوجيا، متخصص في التحول الرقمي واستراتيجيات الابتكار. قاد سابقاً مبادرات التكنولوجيا في شركات التكنولوجيا الكبرى.",
      },
      expertise: [
        { en: "Digital Innovation", ar: "الابتكار الرقمي" },
        { en: "Technology Strategy", ar: "استراتيجية التكنولوجيا" },
        { en: "System Architecture", ar: "هندسة الأنظمة" },
      ],
      email: "michael.chen@company.com",
      linkedin: "linkedin.com/in/michaelchen",
    },
    {
      name: { en: "Dr. Amira Hassan", ar: "د. أميرة حسن" },
      position: { en: "Head of Operations", ar: "رئيس العمليات" },
      image: "/middle-eastern-doctor-suit.png",
      bio: {
        en: "Dr. Hassan is an operations excellence expert with a PhD in Industrial Engineering. She has optimized operations for companies across various industries, achieving significant cost savings and efficiency improvements.",
        ar: "د. حسن خبيرة في تميز العمليات مع درجة دكتوراه في الهندسة الصناعية. حسنت العمليات للشركات عبر صناعات مختلفة، محققة وفورات كبيرة في التكاليف وتحسينات في الكفاءة.",
      },
      expertise: [
        { en: "Operations Excellence", ar: "تميز العمليات" },
        { en: "Process Optimization", ar: "تحسين العمليات" },
        { en: "Quality Management", ar: "إدارة الجودة" },
      ],
      email: "amira.hassan@company.com",
      linkedin: "linkedin.com/in/amirahassan",
    },
  ]

  const consultants = [
    {
      name: { en: "David Rodriguez", ar: "ديفيد رودريغيز" },
      position: { en: "Senior Strategy Consultant", ar: "مستشار استراتيجي أول" },
      image: "/hispanic-consultant.png",
      specialization: { en: "Market Analysis & Growth Strategy", ar: "تحليل السوق واستراتيجية النمو" },
      experience: "12+ years",
      projects: "150+",
    },
    {
      name: { en: "Lisa Wang", ar: "ليزا وانغ" },
      position: { en: "Digital Transformation Lead", ar: "قائد التحول الرقمي" },
      image: "/professional-asian-woman-consultant.png",
      specialization: { en: "Technology Integration & Change Management", ar: "تكامل التكنولوجيا وإدارة التغيير" },
      experience: "10+ years",
      projects: "120+",
    },
    {
      name: { en: "Ahmed Al-Rashid", ar: "أحمد الراشد" },
      position: { en: "Financial Advisory Specialist", ar: "أخصائي الاستشارات المالية" },
      image: "/middle-eastern-financial-advisor.png",
      specialization: { en: "Financial Planning & Investment Strategy", ar: "التخطيط المالي واستراتيجية الاستثمار" },
      experience: "14+ years",
      projects: "200+",
    },
    {
      name: { en: "Emma Thompson", ar: "إيما طومسون" },
      position: { en: "HR & Organizational Development", ar: "الموارد البشرية والتطوير التنظيمي" },
      image: "/british-hr-consultant.png",
      specialization: { en: "Talent Management & Culture Transformation", ar: "إدارة المواهب وتحويل الثقافة" },
      experience: "11+ years",
      projects: "180+",
    },
    {
      name: { en: "Robert Kim", ar: "روبرت كيم" },
      position: { en: "Operations Excellence Consultant", ar: "مستشار تميز العمليات" },
      image: "/korean-operations-consultant.png",
      specialization: { en: "Process Improvement & Lean Management", ar: "تحسين العمليات والإدارة الرشيقة" },
      experience: "13+ years",
      projects: "160+",
    },
    {
      name: { en: "Maria Santos", ar: "ماريا سانتوس" },
      position: { en: "Risk & Compliance Advisor", ar: "مستشار المخاطر والامتثال" },
      image: "/latina-compliance-advisor.png",
      specialization: { en: "Regulatory Compliance & Risk Assessment", ar: "الامتثال التنظيمي وتقييم المخاطر" },
      experience: "9+ years",
      projects: "140+",
    },
  ]

  const departments = [
    {
      name: { en: "Strategy & Planning", ar: "الاستراتيجية والتخطيط" },
      members: 12,
      description: {
        en: "Developing comprehensive business strategies and growth plans",
        ar: "تطوير استراتيجيات الأعمال الشاملة وخطط النمو",
      },
    },
    {
      name: { en: "Digital Innovation", ar: "الابتكار الرقمي" },
      members: 8,
      description: {
        en: "Leading digital transformation and technology adoption",
        ar: "قيادة التحول الرقمي واعتماد التكنولوجيا",
      },
    },
    {
      name: { en: "Operations Excellence", ar: "تميز العمليات" },
      members: 10,
      description: {
        en: "Optimizing business processes and operational efficiency",
        ar: "تحسين العمليات التجارية والكفاءة التشغيلية",
      },
    },
    {
      name: { en: "Financial Advisory", ar: "الاستشارات المالية" },
      members: 6,
      description: {
        en: "Providing financial planning and investment guidance",
        ar: "تقديم التخطيط المالي وإرشادات الاستثمار",
      },
    },
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
                {isRTL ? "فريقنا المتميز" : "Our Expert Team"}
              </h1>
              <p className="mb-8 text-xl text-white/90 md:text-2xl">
                {isRTL
                  ? "مجموعة من الخبراء المتخصصين الملتزمين بتحقيق النجاح لعملائنا"
                  : "A group of specialized experts committed to delivering success for our clients"}
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {isRTL ? "القيادة التنفيذية" : "Executive Leadership"}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {isRTL
                  ? "قادة ذوو خبرة واسعة يوجهون رؤيتنا ويقودون فريقنا نحو التميز"
                  : "Experienced leaders who guide our vision and drive our team toward excellence"}
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-3">
              {leadership.map((leader, index) => (
                <Card
                  key={index}
                  className="group border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-6 h-48 w-48 overflow-hidden rounded-full">
                      <img
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name[isRTL ? "ar" : "en"]}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {leader.name[isRTL ? "ar" : "en"]}
                    </CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {leader.position[isRTL ? "ar" : "en"]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                      {leader.bio[isRTL ? "ar" : "en"]}
                    </p>
                    <div className="mb-6">
                      <h4 className="mb-3 font-semibold text-foreground">{isRTL ? "مجالات الخبرة:" : "Expertise:"}</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill[isRTL ? "ar" : "en"]}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-center gap-4">
                      <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                        <Mail className="h-4 w-4" />
                        {isRTL ? "راسل" : "Email"}
                      </Button>
                      <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Consulting Team */}
        <section className="bg-gray-50 py-20 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {isRTL ? "فريق الاستشاريين" : "Consulting Team"}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {isRTL
                  ? "مستشارون متخصصون بخبرات متنوعة لتلبية جميع احتياجاتك الاستشارية"
                  : "Specialized consultants with diverse expertise to meet all your consulting needs"}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {consultants.map((consultant, index) => (
                <Card
                  key={index}
                  className="group border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                      <img
                        src={consultant.image || "/placeholder.svg"}
                        alt={consultant.name[isRTL ? "ar" : "en"]}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {consultant.name[isRTL ? "ar" : "en"]}
                    </CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {consultant.position[isRTL ? "ar" : "en"]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="mb-2 font-semibold text-foreground text-sm">
                        {isRTL ? "التخصص:" : "Specialization:"}
                      </h4>
                      <p className="text-sm text-muted-foreground">{consultant.specialization[isRTL ? "ar" : "en"]}</p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>
                        <span className="font-medium text-foreground">{isRTL ? "الخبرة:" : "Experience:"}</span>
                        <span className="ml-1 text-muted-foreground">{consultant.experience}</span>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">{isRTL ? "المشاريع:" : "Projects:"}</span>
                        <span className="ml-1 text-muted-foreground">{consultant.projects}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {isRTL ? "أقسامنا المتخصصة" : "Our Specialized Departments"}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {isRTL
                  ? "فرق متخصصة تعمل معاً لتقديم حلول شاملة ومتكاملة"
                  : "Specialized teams working together to deliver comprehensive and integrated solutions"}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {departments.map((dept, index) => (
                <Card
                  key={index}
                  className="border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Users className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {dept.name[isRTL ? "ar" : "en"]}
                    </CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {dept.members} {isRTL ? "عضو" : "Members"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{dept.description[isRTL ? "ar" : "en"]}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="bg-gradient-to-r from-primary to-secondary py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {isRTL ? "انضم إلى فريقنا المتميز" : "Join Our Exceptional Team"}
            </h2>
            <p className="mb-8 text-xl text-white/90">
              {isRTL
                ? "نبحث عن المواهب المتميزة للانضمام إلى رحلتنا في تحويل الأعمال"
                : "We're looking for exceptional talent to join our journey in transforming businesses"}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" className="text-primary hover:text-primary/90">
                {isRTL ? "استكشف الوظائف" : "Explore Careers"}
                <ArrowRight className={`ml-2 h-5 w-5 ${isRTL ? "rotate-180" : ""}`} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                {isRTL ? "أرسل سيرتك الذاتية" : "Submit Your Resume"}
              </Button>
            </div>
          </div>
        </section>
      </main>

     </div>
  )
}
