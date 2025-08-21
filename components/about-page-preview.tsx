"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n"
import { Target, Eye, Award, Shield, ArrowRight, Building2, Lightbulb, Globe } from "lucide-react"
import Link from "next/link"
 const AboutPagePreview = () => {
  const { t, isRTL } = useI18n()

  const values = [
    {
      icon: Lightbulb,
      title: { en: "Innovation", ar: "الابتكار" },
      description: {
        en: "We leverage the latest technology, programming, and artificial intelligence to automate processes and drive innovation",
        ar: "نستفيد من أحدث التقنيات والبرمجة والذكاء الاصطناعي لأتمتة العمليات وقيادة الابتكار",
      },
    },
    {
      icon: Award,
      title: { en: "Excellence", ar: "التميز" },
      description: {
        en: "We achieve excellence by combining advanced technology with a dedicated, highly skilled team",
        ar: "نحقق التميز من خلال دمج التكنولوجيا المتقدمة مع فريق مخصص عالي المهارة",
      },
    },
    {
      icon: Shield,
      title: { en: "Quality Assurance", ar: "ضمان الجودة" },
      description: {
        en: "We ensure quality at every stage of the project by promoting teamwork and individual responsibility",
        ar: "نضمن الجودة في كل مرحلة من مراحل المشروع من خلال تعزيز العمل الجماعي والمسؤولية الفردية",
      },
    },
    {
      icon: Globe,
      title: { en: "Sustainability", ar: "الاستدامة" },
      description: {
        en: "We implement sustainable and environmentally responsible practices, going beyond legal requirements",
        ar: "نطبق ممارسات مستدامة ومسؤولة بيئياً، نتجاوز المتطلبات القانونية",
      },
    },
  ]

  const achievements = [
    {
      number: "20+",
      title: { en: "BIM Projects", ar: "مشروع BIM" },
      description: { en: "Successfully completed", ar: "مكتملة بنجاح" },
    },
    {
      number: "6+",
      title: { en: "Years Experience", ar: "سنوات خبرة" },
      description: { en: "In BIM & CAD", ar: "في BIM و CAD" },
    },
    {
      number: "5+",
      title: { en: "Satisfied Clients", ar: "عميل راضٍ" },
      description: { en: "Worldwide", ar: "حول العالم" },
    },
    {
      number: "24/7",
      title: { en: "Support Available", ar: "دعم متاح" },
      description: { en: "For all clients", ar: "لجميع العملاء" },
    },
  ]

  const timeline = [
    {
      year: "2019",
      title: { en: "Foundation & Vision", ar: "التأسيس والرؤية" },
      description: {
        en: "Avranova Consulting was founded with a clear vision to revolutionize BIM and CAD solutions in the construction industry",
        ar: "تأسست أفرانوفا كونسلتنغ برؤية واضحة لإحداث ثورة في حلول BIM و CAD في صناعة البناء",
      },
    },
    {
      year: "2020",
      title: { en: "ISO Certification", ar: "شهادة الآيزو" },
      description: {
        en: "Achieved ISO 9001:2015 and ISO 14001:2015 certifications, establishing our commitment to quality and environmental standards",
        ar: "حصلنا على شهادات ISO 9001:2015 و ISO 14001:2015، مؤكدين التزامنا بمعايير الجودة والبيئة",
      },
    },
    {
      year: "2021",
      title: { en: "Technology Integration", ar: "دمج التكنولوجيا" },
      description: {
        en: "Integrated AI and automation tools into our BIM workflows, significantly improving project efficiency and accuracy",
        ar: "دمجنا أدوات الذكاء الاصطناعي والأتمتة في سير عمل BIM، مما حسن كثيراً من كفاءة ودقة المشاريع",
      },
    },
    {
      year: "2022",
      title: { en: "Training Programs", ar: "برامج التدريب" },
      description: {
        en: "Launched comprehensive BIM training programs, empowering professionals across the industry with cutting-edge skills",
        ar: "أطلقنا برامج تدريب BIM شاملة، مكنّا المهنيين في الصناعة من اكتساب مهارات متطورة",
      },
    },
    {
      year: "2023",
      title: { en: "Global Expansion", ar: "التوسع العالمي" },
      description: {
        en: "Expanded operations internationally, serving clients across multiple continents with innovative BIM solutions",
        ar: "توسعنا عالمياً، نخدم العملاء عبر قارات متعددة بحلول BIM المبتكرة",
      },
    },
    {
      year: "2024",
      title: { en: "Sustainability Focus", ar: "التركيز على الاستدامة" },
      description: {
        en: "Enhanced our environmental commitment by developing sustainable BIM practices and green building solutions",
        ar: "عززنا التزامنا البيئي بتطوير ممارسات BIM المستدامة وحلول البناء الأخضر",
      },
    },
  ]

  const certifications = [
    {
      name: "AUTODESK REVIT CERTIFICATION",
      type: { en: "BIM Software Excellence", ar: "تميز برامج BIM" },
    },
    {
      name: "Master in BIM Management",
      type: { en: "University of Barcelona", ar: "جامعة برشلونة" },
    },
    {
      name: "ISO 9001:2015",
      type: { en: "Quality Management", ar: "إدارة الجودة" },
    },
    {
      name: "ISO 14001:2015",
      type: { en: "Environmental Management", ar: "الإدارة البيئية" },
    },
  ]

  return (
    <div className="flex min-h-screen flex-col" dir={isRTL ? "rtl" : "ltr"}>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/architectural-blueprints.png')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20" />
          <div className="absolute inset-0 bg-black/10" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">{isRTL ? "من نحن" : "About Us"}</h1>
              <h2 className="mb-4 text-2xl font-semibold text-white/90 md:text-3xl">
                {isRTL
                  ? "أفرانوفا للاستشارات: الابتكار والتميز في مشاريع BIM و CAD"
                  : "Avranova Consulting: Innovation and Excellence in BIM and CAD Projects"}
              </h2>
              <p className="mb-8 text-xl text-white/80 md:text-xl">
                {isRTL
                  ? "نتخصص في تقديم حلول BIM (نمذجة معلومات البناء) و CAD (التصميم بمساعدة الحاسوب) الشاملة"
                  : "We specialize in providing comprehensive BIM (Building Information Modeling) and CAD (Computer Aided Design) solutions"}
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <Card className="border-0 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
                <CardHeader className={`text-center  `}>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                    <Target className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-center text-foreground">
                    {isRTL ? "مهمتنا" : "Our Mission"}
                  </CardTitle>
                </CardHeader>
                <CardContent className={`text-center `}>
                  <p className="text-lg text-muted-foreground">
                    {isRTL
                      ? "نهدف إلى تحسين جودة خدماتنا باستمرار، مع التزام قوي بالاستدامة والعناية البيئية. نحول المشاريع المعقدة إلى حلول فعالة ودقيقة وموثوقة"
                      : "Our goal is to continuously improve the quality of our services, always with a strong commitment to sustainability and environmental care. We transform complex projects into efficient, precise, and reliable solutions"}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-secondary/5 to-primary/5 shadow-lg">
                <CardHeader className={`text-center `}>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-white">
                    <Eye className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl text-center font-bold text-foreground">
                    {isRTL ? "رؤيتنا" : "Our Vision"}
                  </CardTitle>
                </CardHeader>
                <CardContent className={`text-center `}>
                  <p className="text-lg text-muted-foreground">
                    {isRTL
                      ? "نساعد عملاءنا طوال دورة حياة المشروع بأكملها: من التخطيط والرقمنة إلى الإدارة والتنفيذ والتدريب المتخصص، لتحقيق أهدافهم من خلال الابتكار والأتمتة والتميز"
                      : "We support our clients throughout the entire project lifecycle: from planning and digitalization to management, execution, and specialized training, helping them achieve their goals through innovation, automation, and excellence"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="bg-gray-50  py-16 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className=" text-center  justify-center items-center flex flex-col">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {isRTL ? "نهجنا" : "Our Approach"}
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                {isRTL
                  ? "تدير إدارة أفرانوفا كونسلتنغ نظام إدارة متكامل متوافق مع المعايير الدولية ISO 9001:2015 و ISO 14001:2015، مما يضمن الكفاءة والقدرة التنافسية والموثوقية عبر جميع مشاريعنا"
                  : "The management of Avranova Consulting drives an integrated management system compliant with international standards ISO 9001:2015 and ISO 14001:2015, ensuring efficiency, competitiveness, and reliability across all our projects"}
              </p>
            </div>
          </div>
        </section>

        {/* Company Name Meaning */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="mb-6 text-4xl font-bold md:text-5xl text-primary dark:text-primary">
                  {isRTL ? "معنى اسم أفرانوفا" : "The Meaning Behind Avranova"}
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {isRTL
                    ? "اكتشف القصة وراء اسمنا وكيف يعكس رؤيتنا ومهمتنا في عالم البناء والتكنولوجيا"
                    : "Discover the story behind our name and how it reflects our vision and mission in construction and technology"}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {isRTL ? (<>
  <div className="space-y-6">
                  <div className={`flex justify-start flex-col`}>
                    <h3 className="text-2xl  font-bold text-foreground mb-4">
                      {isRTL ? "قصة الاسم" : "The Story Behind the Name"}
                    </h3>
                    <p className="text-lg dark:text-white text-muted-foreground leading-relaxed">
                      {isRTL
                        ? "اسم 'أفرانوفا' مشتق من كلمتين قويتين: 'أفرا' التي تعني 'الأول' أو 'المتقدم' في اللغات القديمة، و'نوفا' التي تعني 'جديد' أو 'مبتكر' في اللاتينية. معاً، يرمز الاسم إلى 'الريادة في الابتكار' - وهو ما يعكس التزامنا بأن نكون في المقدمة في تقديم حلول BIM و CAD المبتكرة."
                        : "The name 'Avranova' is derived from two powerful concepts: 'Avra' meaning 'first' or 'leading' in ancient languages, and 'Nova' meaning 'new' or 'innovative' in Latin. Together, the name symbolizes 'Leading Innovation' - reflecting our commitment to being at the forefront of innovative BIM and CAD solutions."}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 backdrop-blur-sm border border-primary/20">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mb-6 shadow-lg">
                        <Building2 className="h-12 w-12 text-white" />
                      </div>
                      <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary dark:to-slate-300 bg-clip-text text-transparent mb-4">
                        AVRANOVA
                      </div>
                      <div className="flex items-center justify-center gap-4 text-2xl font-semibold text-muted-foreground">
                        <span className="text-primary">AVRA</span>
                        <span className="text-muted-foreground/50 dark:text-white">+</span>
                        <span className="text-secondary dark:text-primary">NOVA</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-xl"></div>
                </div>

               
              </>) : (<>
                {/* Left side - Visual representation */}
                <div className="relative">
                  <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 backdrop-blur-sm border border-primary/20">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mb-6 shadow-lg">
                        <Building2 className="h-12 w-12 text-white" />
                      </div>
                      <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary dark:to-slate-300 bg-clip-text text-transparent mb-4">
                        AVRANOVA
                      </div>
                     <div className="flex items-center justify-center gap-4 text-2xl font-semibold text-muted-foreground">
                        <span className="text-primary">AVRA</span>
                        <span className="text-muted-foreground/50 dark:text-white">+</span>
                        <span className="text-secondary dark:text-primary">NOVA</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-xl"></div>
                </div>

                {/* Right side - Main explanation */}
                <div className="space-y-6">
                  <div className={`${isRTL ? "text-right" : "text-left"}`}>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {isRTL ? "قصة الاسم" : "The Story Behind the Name"}
                    </h3>
                    <p className="text-lg text-muted-foreground dark:text-white leading-relaxed">
                      {isRTL
                        ? "اسم 'أفرانوفا' مشتق من كلمتين قويتين: 'أفرا' التي تعني 'الأول' أو 'المتقدم' في اللغات القديمة، و'نوفا' التي تعني 'جديد' أو 'مبتكر' في اللاتينية. معاً، يرمز الاسم إلى 'الريادة في الابتكار' - وهو ما يعكس التزامنا بأن نكون في المقدمة في تقديم حلول BIM و CAD المبتكرة."
                        : "The name 'Avranova' is derived from two powerful concepts: 'Avra' meaning 'first' or 'leading' in ancient languages, and 'Nova' meaning 'new' or 'innovative' in Latin. Together, the name symbolizes 'Leading Innovation' - reflecting our commitment to being at the forefront of innovative BIM and CAD solutions."}
                    </p>
                  </div>
                </div></>)}
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="group border-0 bg-gradient-to-br from-primary/5 to-primary/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
               {isRTL ? (<>
                  <CardContent className="p-8">
                    <div className="flex items-center justify-start gap-4 mb-6">
                    
                      <div>
                        <h3 className="text-2xl font-bold text-primary">AVRA</h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          {isRTL ? "الريادة والتقدم" : "Leadership & Advancement"}
                        </p>
                      </div>
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Target className="h-8 w-8" />
                      </div>
                    </div>
                    <p className={`text-muted-foreground dark:text-white flex justify-start leading-relaxed `}>
                      {isRTL
                        ? "تمثل موقعنا الرائد في الصناعة والتزامنا بتقديم أفضل الحلول لعملائنا. نحن نقود التغيير ونضع المعايير الجديدة في عالم BIM و CAD."
                        : "Represents our leading position in the industry and commitment to delivering the best solutions to our clients. We lead change and set new standards in the BIM and CAD world."}
                    </p>

                  </CardContent>
               </>) : (<>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Target className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary">NOVA</h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          {isRTL ? "الريادة والتقدم" : "Leadership & Advancement"}
                        </p>
                      </div>
                    </div>
                    <p className={`text-muted-foreground dark:text-white flex justify-start leading-relaxed `}>
                      {isRTL
                        ? "تمثل موقعنا الرائد في الصناعة والتزامنا بتقديم أفضل الحلول لعملائنا. نحن نقود التغيير ونضع المعايير الجديدة في عالم BIM و CAD."
                        : "Represents our leading position in the industry and commitment to delivering the best solutions to our clients. We lead change and set new standards in the BIM and CAD world."}
                    </p>
                  </CardContent></>)}
                </Card>

                <Card className="group border-0 bg-gradient-to-br from-primary/5 to-primary/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
    {isRTL ? (
                    <CardContent className="p-8">
                    <div className="flex items-center justify-start gap-4 mb-6">
                     
                      <div>
                        <h3 className="text-2xl font-bold text-primary">{isRTL ? "نوفا" : "NOVA"}</h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          {isRTL ? "الابتكار والتجديد" : "Innovation & Renewal"}
                        </p>
                      </div>
                       <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Lightbulb className="h-8 w-8" />
                      </div>
                    </div>
                    <p className={`text-muted-foreground dark:text-white flex justify-start leading-relaxed `}>
                      {isRTL
                        ? "تعكس شغفنا بالتكنولوجيا الجديدة والحلول المبتكرة في عالم BIM و CAD. نحن نبتكر باستمرار لنقدم حلولاً تتجاوز التوقعات."
                        : "Reflects our passion for new technology and innovative solutions in the BIM and CAD world. We continuously innovate to deliver solutions that exceed expectations."}
                    </p>
                  </CardContent>
              ) : (
                <>
                   <CardContent className="p-8">
                    <div className="flex items-center justify-start gap-4 mb-6">
                     
                      <div>
                        <h3 className="text-2xl font-bold text-primary">{isRTL ? "نوفا" : "NOVA"}</h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          {isRTL ? "الابتكار والتجديد" : "Innovation & Renewal"}
                        </p>
                      </div>
                       <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Lightbulb className="h-8 w-8" />
                      </div>
                    </div>
                    <p className={`text-muted-foreground dark:text-white flex justify-start leading-relaxed `}>
                      {isRTL
                        ? "تعكس شغفنا بالتكنولوجيا الجديدة والحلول المبتكرة في عالم BIM و CAD. نحن نبتكر باستمرار لنقدم حلولاً تتجاوز التوقعات."
                        : "Reflects our passion for new technology and innovative solutions in the BIM and CAD world. We continuously innovate to deliver solutions that exceed expectations."}
                    </p>
                  </CardContent>
                </>
              )}
                </Card>
              </div>

              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
                  <div className="text-3xl font-bold  bg-gradient-to-r from-primary to-secondary dark:to-slate-300 bg-clip-text text-transparent mb-4">
                    {isRTL ? `AVRANOVA = الريادة + الابتكار` : "AVRANOVA = Leadership + Innovation"}
                  </div>
                  <div className="text-xl dark:text-white text-muted-foreground font-medium">
                    {isRTL
                      ? "= مستقبل البناء والتكنولوجيا المتقدمة"
                      : "= The Future of Smart Construction & Advanced Technology"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {isRTL ? "قيمنا الأساسية" : "Our Core Values"}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {isRTL
                  ? "نؤمن أن التميز يتحقق من خلال دمج التكنولوجيا المتقدمة مع فريق مخصص عالي المهارة"
                  : "We believe that excellence is achieved by combining advanced technology with a dedicated, highly skilled team"}
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
                    <CardHeader className={`text-center  `}>
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {value.title[isRTL ? "ar" : "en"]}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className={`text-center  `}>
                      <p className="text-muted-foreground">{value.description[isRTL ? "ar" : "en"]}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-gray-50 py-20 dark:bg-gray-900">
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {isRTL ? "رحلتنا وتطورنا" : "Our Journey & Development"}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {isRTL
                  ? "استكشف مراحل نمونا وتطورنا في عالم BIM و CAD"
                  : "Explore the milestones of our growth and development in the BIM & CAD world"}
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Center Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-center">
                    {/* Left Side Content (for even indices in LTR, odd in RTL) */}
                    <div
                      className={`w-1/2 ${
                        (!isRTL && index % 2 === 0) || (isRTL && index % 2 === 1)
                          ? `${isRTL ? "pl-8" : "pr-8"} ${isRTL ? "text-left" : "text-right"}`
                          : ""
                      }`}
                    >
                      {((!isRTL && index % 2 === 0) || (isRTL && index % 2 === 1)) && (
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
                      )}
                    </div>

                    {/* Center Circle */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex h-4 w-4 items-center justify-center z-10">
                      <div className="h-4 w-4 rounded-full bg-primary border-2 border-white shadow-lg" />
                    </div>

                    {/* Right Side Content (for odd indices in LTR, even in RTL) */}
                    <div
                      className={`w-1/2 ${
                        (!isRTL && index % 2 === 1) || (isRTL && index % 2 === 0)
                          ? `${isRTL ? "pr-8" : "pl-8"} ${isRTL ? "text-right" : "text-left"}`
                          : ""
                      }`}
                    >
                      {((!isRTL && index % 2 === 1) || (isRTL && index % 2 === 0)) && (
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
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-gray-50 py-20 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {isRTL ? "شهاداتنا واعتماداتنا" : "Our Certifications & Accreditations"}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {isRTL ? "معترف بها من قبل المؤسسات الرائدة في الصناعة" : "Recognized by leading industry institutions"}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-0 bg-white shadow-lg dark:bg-gray-800">
                  <CardHeader className={`text-center  `}>
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Award className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground">{cert.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {typeof cert.type === "object" ? cert.type[isRTL ? "ar" : "en"] : cert.type}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Priorities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {isRTL ? "أولوياتنا الاستراتيجية" : "Our Strategic Priorities"}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: { en: "Quality Assurance", ar: "ضمان الجودة" },
                  description: {
                    en: "Ensure quality at every stage of the project by promoting teamwork and individual responsibility",
                    ar: "ضمان الجودة في كل مرحلة من المشروع من خلال تعزيز العمل الجماعي والمسؤولية الفردية",
                  },
                },
                {
                  title: { en: "Client Satisfaction", ar: "رضا العملاء" },
                  description: {
                    en: "Continuously improve client satisfaction through efficient processes tailored to their needs",
                    ar: "تحسين رضا العملاء باستمرار من خلال العمليات الفعالة المصممة لاحتياجاتهم",
                  },
                },
                {
                  title: { en: "Team Development", ar: "تطوير الفريق" },
                  description: {
                    en: "Foster professional development and active participation of our team in all management processes",
                    ar: "تعزيز التطوير المهني والمشاركة الفعالة لفريقنا في جميع عمليات الإدارة",
                  },
                },
                {
                  title: { en: "Environmental Responsibility", ar: "المسؤولية البيئية" },
                  description: {
                    en: "Implement sustainable and environmentally responsible practices, going beyond legal requirements",
                    ar: "تطبيق ممارسات مستدامة ومسؤولة بيئياً، تتجاوز المتطلبات القانونية",
                  },
                },
                {
                  title: { en: "Strategic Partnerships", ar: "الشراكات الاستراتيجية" },
                  description: {
                    en: "Establish strategic partnerships with suppliers to create shared value and elevate service quality",
                    ar: "إقامة شراكات استراتيجية مع الموردين لخلق قيمة مشتركة ورفع جودة الخدمة",
                  },
                },
                {
                  title: { en: "Technology & AI", ar: "التكنولوجيا والذكاء الاصطناعي" },
                  description: {
                    en: "Leverage the latest technology, programming, and artificial intelligence to automate processes",
                    ar: "الاستفادة من أحدث التقنيات والبرمجة والذكاء الاصطناعي لأتمتة العمليات",
                  },
                },
              ].map((priority, index) => (
                <Card key={index} className="border-0 bg-white shadow-lg dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {priority.title[isRTL ? "ar" : "en"]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{priority.description[isRTL ? "ar" : "en"]}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/engineering-blueprints-technical.png')] bg-cover bg-center opacity-5" />
          <div className="container mx-auto px-4 text-center relative">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {isRTL ? "ابدأ مشروعك التالي معنا" : "Start Your Next Project With Us"}
            </h2>
            <p className="mb-8 text-xl text-white/90">
              {isRTL
                ? "دعنا نحول مشاريعك المعقدة إلى حلول فعالة ودقيقة وموثوقة"
                : "Let us transform your complex projects into efficient, precise, and reliable solutions"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  {isRTL ? "احصل على استشارة" : "Get Consultation"}
                  <ArrowRight className={`ml-2 h-5 w-5 ${isRTL ? "rotate-180" : ""}`} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AboutPagePreview
