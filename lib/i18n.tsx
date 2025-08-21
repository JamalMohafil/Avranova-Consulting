"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ar"

interface Translations {
  [key: string]: {
    en: string
    ar: string
  }
}

const translations: Translations = {
  global_presence: {
    en: "Global Presence",
    ar: "الحضور العالمي",
  },
  worldwide_excellence: {
    en: "Worldwide Excellence",
    ar: "التميز العالمي",
  },
  global_description: {
    en: "Serving clients worldwide with local expertise and global quality. Our extensive network ensures innovative and specialized solutions for every project.",
    ar: "نخدم عملاءنا في جميع أنحاء العالم بخبرة محلية وجودة عالمية. شبكتنا الواسعة تضمن تقديم حلول مبتكرة ومتخصصة لكل مشروع.",
  },
  global_support: {
    en: "Global Support",
    ar: "دعم عالمي",
  },
  local_expertise: {
    en: "Local expertise in every region",
    ar: "خبرة محلية في كل منطقة",
  },
  unified_standards: {
    en: "Unified global quality standards",
    ar: "معايير جودة عالمية موحدة",
  },
  multilingual_support: {
    en: "Multi-language and cultural support",
    ar: "دعم متعدد اللغات والثقافات",
  },
  active_connections: {
    en: "Active Connections",
    ar: "اتصالات نشطة",
  },
  average_rating: {
    en: "Average Rating",
    ar: "متوسط التقييمات",
  },
  verified_reviews: {
    en: "Verified Reviews",
    ar: "التقييمات الموثقة",
  },
  formDescription: {
    en: "Fill out the form and we will get back to you as soon as possible.",
    ar: "املأ النموذج وسوف نتصل بك في اسرع وقت ممكن.",
  },
  enterYourEmail: {
    en: "Enter your email address",
    ar: "ادخل عنوان بريدك الالكتروني",
  },
  enterYourName: {
    en: "Enter your name",
    ar: "ادخل اسمك",
  },
  phoneNumber: {
    en: "Phone Number",
    ar: "رقم الهاتف",
  },
  enterYourPhone: {
    en: "Enter your phone number",
    ar: "ادخل رقم هاتفك",
  },
  enterYourMessage: {
    en: "Enter your message",
    ar: "ادخل رسالتك",
  },
  responseIn24h: {
    en: "We will get back to you in 24 hours.",
    ar: "سوف نتصل بك في 24 ساعة.",
  },
  availableNow: {
    en: "Available Now",
    ar: "متاح الان",
  },
  mondayToFriday: {
    en: "Monday to Friday",
    ar: "الاثنين الى الخميس",
  },
  visitUs: {
    en: "Visit Us",
    ar: "زورنا",
  },
  ourAddress: {
    en: "Syria, Damascus, Al-Zahraa ",
    ar: "سوريا، دامشق، الزهراء ",
  },
  hero_title_line1: {
    en: "We Are BIM Experts",
    ar: "نحن خبراء نمذجة معلومات البناء",
  },
  hero_title_line2: {
    en: "providing tailored consultancy and solutions in Architecture, Structure, MEP, and Civil projects that optimize your work with innovation, efficiency, and reliable results",
    ar: "نقدم استشارات وحلول مخصصة في مشاريع العمارة والإنشاءات والأنظمة الميكانيكية والكهربائية والمدنية التي تحسن عملك بالابتكار والكفاءة والنتائج الموثوقة",
  },
  transform_business: {
    en: "Transform Your Business Future",
    ar: "حول مستقبل أعمالك",
  },
  global_business_solutions: {
    en: "#1 Global Business Solutions",
    ar: "#1 حلول الأعمال العالمية",
  },
  start_transformation: {
    en: "Start Your Transformation",
    ar: "ابدأ تحولك",
  },
  explore_solutions: {
    en: "Explore Solutions",
    ar: "استكشف الحلول",
  },
  global_clients: {
    en: "Global Clients",
    ar: "عملاء عالميون",
  },
  success_rate: {
    en: "Success Rate",
    ar: "معدل النجاح",
  },
  years_leading: {
    en: "Years Leading",
    ar: "سنوات من الريادة",
  },system_integration: {
  en: "System Integration",
  ar: "تكامل الأنظمة",
},
energy_analysis: {
  en: "Energy Analysis",
  ar: "تحليل الطاقة",
},
code_compliance: {
  en: "Code Compliance",
  ar: "الامتثال للمعايير",
},
performance_optimization: {
  en: "Performance Optimization",
  ar: "تحسين الأداء",
},
three_modeling: {
  en: "3D Modeling",
  ar: "النمذجة ثلاثية الأبعاد",
},
clash_detection: {
  en: "Clash Detection",
  ar: "كشف التعارضات",
},
project_coordination: {
  en: "Project Coordination",
  ar: "تنسيق المشاريع",
},
quality_assurance: {
  en: "Quality Assurance",
  ar: "ضمان الجودة",
},

  awards_won: {
    en: "Awards Won",
    ar: "جوائز محققة",
  },
  workingHours: {
    en: "Working Hours",
    ar: "ساعات العمل",
  },
  aboutUsIntro: {
    en: "Aranova Consulting Company  ",
    ar: "شركة استشارات افرانوفا ",
  },
  phoneValue: {
    en: "+1 123-456-7890",
    ar: "+1 123-456-7890",
  },
  emailValue: {
    en: "Q9EgI@example.com",
    ar: "Q9EgI@example.com",
  },
  countriesServed: {
    en: "Countries Served",
    ar: "الدول الذي تم خدمتها",
  },
  photorealistic_renders: {
    en: "Photorealistic Renders",
    ar: "تصوير صحيح",
  },
  virtual_reality: {
    en: "Virtual Reality",
    ar: "الواقع الافتراضي",
  },
  three_d_animations: {
    en: "3D Animations",
    ar: "الانماط الثلائية",
  },
  projectConsultation: {
    en: "Project Consultation",
    ar: "استشارة لمشروع",
  },
  interactive_tours: {
    en: "Interactive Tours",
    ar: "الرحلات المتفاعلة",
  },
  growing_strong: {
    en: "Growing Strong",
    ar: "نمو قوي",
  },
  addressValue: {
    en: "123 Main Street, City, Country",
    ar: "123 الشارع الرئيسي، المدينة، البلد",
  },
  companyName: {
    en: "Avranova Consulting",
    ar: "أفرانوفا للاستشارات الهندسية",
  },
  tagline: {
    en: "Precision, Creativity, Collaboration",
    ar: "الدقة والإبداع والتعاون المتميز",
  },
  heroDescription: {
    en: "At Avranova Consulting, we believe that true innovation starts with precision, creativity, and seamless collaboration. We are pleased to present our tailored proposal to support your project through advanced BIM coordination, architectural visualization, and MEP integration ensuring streamlined execution and optimized performance from design to construction.",
    ar: "في أفرانوفا للاستشارات الهندسية، نؤمن بأن الابتكار الحقيقي يبدأ بالدقة والإبداع والتعاون السلس. يسعدنا تقديم اقتراحنا المخصص لدعم مشروعكم من خلال تنسيق نمذجة معلومات البناء المتقدم والتصور المعماري وتكامل الأنظمة الميكانيكية والكهربائية والسباكة، مما يضمن تنفيذاً مبسطاً وأداءً محسنً من التصميم حتى البناء.",
  },
  quickContact: {
    en: "Quick Contact",
    ar: "تواصل سريع",
  },
  yourName: {
    en: "Your Name",
    ar: "اسمك الكريم",
  },
  yourEmail: {
    en: "Your Email",
    ar: "بريدك الإلكتروني",
  },
  yourMessage: {
    en: "Your Message",
    ar: "رسالتك",
  },
  sendMessage: {
    en: "Send Message",
    ar: "إرسال الرسالة",
  },
  learnMore: {
    en: "Learn More",
    ar: "اعرف المزيد",
  },
  ourServices: {
    en: "Our Services",
    ar: "خدماتنا المتخصصة",
  },
  bimCoordination: {
    en: "BIM Coordination",
    ar: "تنسيق نمذجة معلومات البناء",
  },
  bimCoordinationDesc: {
    en: "Advanced BIM coordination for streamlined project execution and optimized performance from design to construction.",
    ar: "تنسيق متقدم لنمذجة معلومات البناء لتنفيذ مشاريع مبسط وأداء محسن من التصميم حتى البناء.",
  },
  architecturalVisualization: {
    en: "Architectural Visualization",
    ar: "التصور المعماري المتقدم",
  },
  architecturalVisualizationDesc: {
    en: "Bringing designs to life with stunning photorealistic renderings and immersive virtual reality experiences.",
    ar: "إحياء التصاميم من خلال تصورات واقعية مذهلة وتجارب واقع افتراضي غامرة.",
  },
  mepIntegration: {
    en: "MEP Integration",
    ar: "تكامل الأنظمة الهندسية",
  },
  mepIntegrationDesc: {
    en: "Seamless integration of Mechanical, Electrical, and Plumbing systems for maximum efficiency and performance.",
    ar: "تكامل سلس للأنظمة الميكانيكية والكهربائية والسباكة لتحقيق أقصى كفاءة وأداء.",
  },
  home: {
    en: "Home",
    ar: "الرئيسية",
  },
  services: {
    en: "Services",
    ar: "الخدمات",
  },
  about: {
    en: "About",
    ar: "من نحن",
  },
  team: {
    en: "Team",
    ar: "فريق العمل",
  },
  caseStudies: {
    en: "Case Studies",
    ar: "دراسات الحالة",
  },
  contact: {
    en: "Contact",
    ar: "تواصل معنا",
  },
  getConsultation: {
    en: "Get Consultation",
    ar: "احصل على استشارة",
  },
  copyright: {
    en: "© 2025 Avranova Consulting. All rights reserved.",
    ar: "© 2025 جميع الحقوق محفوظة, افرانوفا للخدمات الاستشارية",
  },
  readyToStart: {
    en: "Ready to Start Your Project?",
    ar: "مستعد لبدء مشروعك؟",
  },
  contactDescription: {
    en: "Ready to transform your vision into reality? Let's discuss how we can help you achieve exceptional results.",
    ar: "مستعد لتحويل رؤيتك إلى واقع؟ دعنا نناقش كيف يمكننا مساعدتك في تحقيق نتائج استثنائية.",
  },
  callUs: {
    en: "Call Us",
    ar: "اتصل بنا",
  },
  emailUs: {
    en: "Email Us",
    ar: "راسلنا",
  },
  achievements: {
    en: "Our Achievements",
    ar: "إنجازاتنا المتميزة",
  },
  clientsServed: {
    en: "Clients Served",
    ar: "عملاء تم خدمتهم",
  },
  projectsCompleted: {
    en: "Projects Completed",
    ar: "مشاريع مكتملة",
  },
  yearsOfExperience: {
    en: "Years of Experience",
    ar: "سنوات من الخبرة",
  },
  successRate: {
    en: "Success Rate",
    ar: "معدل النجاح",
  },
  whatClientsSay: {
    en: "What Our Clients Say",
    ar: "آراء عملائنا ",
  },
  client_success_stories: {
    en: "Client Success Stories",
    ar: "قصص نجاح العملاء",
  },
  what_clients_say: {
    en: "What Our Clients Say",
    ar: "آراء عملائنا ",
  },
  client_testimonials_desc: {
    en: "Hear from industry leaders who have experienced the difference our expertise makes",
    ar: "استمع إلى قادة الصناعة الذين جربوا وطبقوا الاستشارات الذي قمنا بتخطيطها لهم",
  },
  testimonial1_text: {
    en: "The team's expertise in BIM coordination saved us months of construction time and prevented costly conflicts. Their attention to detail is unmatched.",
    ar: "خبرة الفريق في تنسيق نمذجة معلومات البناء وفرت لنا شهوراً من وقت البناء ومنعت تضارباً مكلفاً. اهتمامهم بالتفاصيل لا مثيل له.",
  },
  testimonial1_role: {
    en: "Project Director",
    ar: "مدير المشروع",
  },
  testimonial2_text: {
    en: "Outstanding architectural visualization services. The photorealistic renderings helped us secure funding and achieve 95% pre-sales before construction began.",
    ar: "خدمات تصور معماري متميزة. ساعدتنا التصورات الواقعية في تأمين التمويل وتحقيق 95% من المبيعات المسبقة قبل بدء البناء.",
  },
  testimonial2_role: {
    en: "Development Manager",
    ar: "مدير التطوير",
  },
  testimonial3_text: {
    en: "Their MEP integration expertise resulted in a LEED Platinum certification and 40% energy savings. Truly exceptional sustainable design solutions.",
    ar: "خبرتهم في تكامل الأنظمة الهندسية أدت إلى حصولنا على شهادة LEED البلاتيني وتوفير 40% من الطاقة. حلول تصميم مستدام استثنائية حقاً.",
  },
  testimonial3_role: {
    en: "Sustainability Director",
    ar: "مدير الاستدامة",
  },
  expertSolutions: {
    en: "Expert Solutions for Every Project",
    ar: "حلول خبيرة لكل مشروع",
  },
  servicesDescription: {
    en: "We deliver comprehensive consulting services that transform complex challenges into successful outcomes",
    ar: "نقدم خدمات استشارية شاملة تحول التحديات المعقدة إلى نتائج ناجحة",
  },
  viewAllServices: {
    en: "View All Services",
    ar: "عرض جميع الخدمات",
  },
  getInTouch: {
    en: "Get In Touch",
    ar: "تواصل معنا",
  },
  proven_excellence: {
    en: "Proven Excellence",
    ar: "التميز العالمي",
  },
  excellence_description: {
    en: "Numbers that reflect our commitment to delivering exceptional results for every client",
    ar: "أرقام تعكس التزامنا بتقديم نتائج استثنائية لكل عميل",
  },
  clients_served: {
    en: "Clients Served",
    ar: "عملاء تم خدمتهم",
  },
  projects_completed: {
    en: "Projects Completed",
    ar: "مشاريع مكتملة",
  },
  years_excellence: {
    en: "Years of Excellence",
    ar: "سنوات من التميز",
  },
  trusted_organizations: {
    en: "Trusted by leading organizations",
    ar: "موثوق من قبل المؤسسات الرائدة",
  },
  delivered_worldwide: {
    en: "Successfully delivered worldwide",
    ar: "تم تسليمها بنجاح عالمياً",
  },
  industry_experience: {
    en: "Industry-leading experience",
    ar: "خبرة رائدة في الصناعة",
  },
  quality_delivery: {
    en: "Consistent quality delivery",
    ar: "تسليم جودة متسق",
  },
  featured_case_studies: {
    en: "Featured Case Studies",
    ar: "دراسات الحالة المميزة",
  },
  case_studies_desc: {
    en: "Discover how we've helped clients achieve exceptional results across diverse industries",
    ar: "اكتشف كيف ساعدنا العملاء في تحقيق نتائج استثنائية عبر صناعات متنوعة",
  },
  view_all_case_studies: {
    en: "View All Case Studies",
    ar: "عرض جميع دراسات الحالة",
  },
  followUs: {
    en: "Follow Us",
    ar: "تابعنا",
  },
  company: {
    en: "Company",
    ar: "الشركة",
  },
  resources: {
    en: "Resources",
    ar: "الموارد",
  },
  legal: {
    en: "Legal",
    ar: "قانوني",
  },
  careers: {
    en: "Careers",
    ar: "الوظائف",
  },
  blog: {
    en: "Blog",
    ar: "المدونة",
  },
  whitePapers: {
    en: "White Papers",
    ar: "الأوراق البيضاء",
  },
  industryInsights: {
    en: "Industry Insights",
    ar: "رؤى الصناعة",
  },
  faq: {
    en: "FAQ",
    ar: "الأسئلة الشائعة",
  },
  privacyPolicy: {
    en: "Privacy Policy",
    ar: "سياسة الخصوصية",
  },
  termsOfService: {
    en: "Terms of Service",
    ar: "شروط الخدمة",
  },
  cookiePolicy: {
    en: "Cookie Policy",
    ar: "سياسة ملفات تعريف الارتباط",
  },
  accessibility: {
    en: "Accessibility",
    ar: "إمكانية الوصول",
  },
  trusted_partners: {
    en: "Trusted Technology Partners",
    ar: "شركاء التكنولوجيا الموثوقون",
  },
  powering_innovation: {
    en: "Powering Innovation",
    ar: "عزز الابتكار",
  },
  together: {
    en: "Together",
    ar: "معنا",
  },
  partners_description: {
    en: "We collaborate with industry-leading technology providers to deliver cutting-edge solutions.",
    ar: "نتعاون مع استشاريين هندسيين رائدين في مجال التكنولوجيا لتقديم حلول متطورة",
  },
  ready_to_partner: {
    en: "Ready to Partner With Us?",
    ar: "هل أنت مستعد للشراكة معنا؟",
  },
  partner_cta_description: {
    en: "Join our network of technology partners and help us deliver exceptional solutions.",
    ar: "انضم إلى شبكة شركائنا التقنيين وساعدنا في تقديم حلول استثنائية.",
  },
  become_partner: {
    en: "Become a Partner",
    ar: "كن شريكاً",
  },
  global_bim_solutions: {
    en: "Global BIM Solutions",
    ar: "حلول نمذجة معلومات البناء العالمية",
  },
  bim_coordination_stat: {
    en: "BIM Projects Coordinated",
    ar: "مشاريع BIM منسقة",
  },
  precision_rate: {
    en: "Precision Rate",
    ar: "معدل الدقة",
  },
  industry_leadership: {
    en: "Years Industry Leadership",
    ar: "سنوات خبرتنا في ادارة وتخطيط للصناعة",
  },
  certifications: {
    en: "Professional Certifications",
    ar: "الشهادات الاحترافية",
  },
}

interface I18nContextType {
  language: Language
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
  isRTL: boolean
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("ar")
  const isRTL = lang === "ar"

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    console.log(savedLang)
    if (savedLang && (savedLang === "en" || savedLang === "ar")) {
      console.log(savedLang)
      setLang(savedLang)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", lang)
  }, [lang])

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
    document.documentElement.lang = lang

    if (lang === "ar") {
      document.documentElement.classList.add("arabic")
      document.body.style.fontFamily = "var(--font-noto-kufi-arabic), 'Noto Kufi Arabic', 'Amiri', serif"
      document.body.style.direction = "rtl"
      document.body.style.textAlign = "right"
    } else {
      document.documentElement.classList.remove("arabic")
      document.body.style.fontFamily = "var(--font-decker), ui-sans-serif, system-ui, sans-serif"
      document.body.style.direction = "ltr"
      document.body.style.textAlign = "left"
    }
  }, [lang, isRTL])

  const t = (key: string) => {
    return translations[key]?.[lang] || key
  }

  return <I18nContext.Provider value={{ language: lang, lang, setLang, t, isRTL }}>{children}</I18nContext.Provider>
}

export const useI18n = () => {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
