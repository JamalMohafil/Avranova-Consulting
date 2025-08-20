"use client"

import Link from "next/link"
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight,
  Globe,
  Award,
  Users,
  Zap,
} from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  const { t, isRTL } = useI18n()
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { label: t("bimCoordination"), href: "/services/bim-coordination" },
      { label: t("architecturalVisualization"), href: "/services/visualization" },
      { label: t("mepIntegration"), href: "/services/mep-integration" },
      { label: t("projectConsultation"), href: "/services/consultation" },
    ],
    company: [
      { label: t("about"), href: "/about" },
      { label: t("team"), href: "/team" },
      { label: t("caseStudies"), href: "/case-studies" },
      { label: t("careers"), href: "/careers" },
    ],
    resources: [
      { label: t("blog"), href: "/blog" },
      { label: t("whitePapers"), href: "/resources" },
      { label: t("industryInsights"), href: "/insights" },
      { label: t("faq"), href: "/faq" },
    ],
    legal: [
      { label: t("privacyPolicy"), href: "/privacy" },
      { label: t("termsOfService"), href: "/terms" },
      { label: t("cookiePolicy"), href: "/cookies" },
      { label: t("accessibility"), href: "/accessibility" },
    ],
  }

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-700" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
  ]

  const stats = [
    { icon: Users, value: "500+", label: t("clientsServed") },
    { icon: Award, value: "1000+", label: t("projectsCompleted") },
    { icon: Globe, value: "25+", label: t("countriesServed") },
    { icon: Zap, value: "99%", label: t("successRate") },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-secondary via-secondary/95 to-primary text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Section */}
        <div className="py-16 border-b border-white/10">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${isRTL ? "text-right" : ""}`}>
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className={`grid gap-12 lg:grid-cols-5 ${isRTL ? "text-right" : ""}`}>
            {/* Company Info - Takes 2 columns */}
            <div className={`lg:col-span-2 ${isRTL ? " flex flex-col items-center justify-start" : ""}`}>
              <Link
                href="/"
                className={`inline-flex items-center space-x-4 mb-8 group ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
              >
               {isRTL ? (<>
             
                <div className={`flex flex-col items-start`}>
                  <span className="font-serif font-bold text-2xl text-right text-white leading-tight">{t("companyName")}</span>
                  <span className="text-white/70 text-sm text-right mt-1">{t("tagline")}</span>
                </div>
                   <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-all duration-300 border border-white/20">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                </div></>) : (<>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-all duration-300 border border-white/20">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className={`flex flex-col ${isRTL ? "items-end" : ""}`}>
                  <span className="font-serif font-bold text-2xl text-white leading-tight">{t("companyName")}</span>
                  <span className="text-white/70 text-sm mt-1">{t("tagline")}</span>
                </div></>)}
              </Link>

              <p className="text-white/80 mb-8 leading-relaxed text-sm max-w-md">
                {t("aboutUsIntro").substring(0, 200)}...
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8 flex flex-col justify-start items-start ">
                <div className={`flex items-center gap-4 text-white/90 ${isRTL ? "  justify-center" : ""}`}>
                 {isRTL ? (<>
                                   <span className="font-medium">{t("phoneValue")}</span>
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <Phone className="h-5 w-5 text-white" />
                  </div>

                 </>) : (<>
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                                   <span className="font-medium">{t("phoneValue")}</span>

                 </>)}
                </div>
                <div className={`flex items-center gap-4 text-white/90  ${isRTL ? "  justify-center" : ""} `}>
              {isRTL ? (<>
              
           
                  <span className="font-medium">{t("emailValue")}</span>
                        <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <Mail className="h-5 w-5 text-white" />
                  </div></>) : (<>
              
                 <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium">{t("emailValue")}</span>
              </>)} 
                </div>
                <div className={`flex items-center gap-4 text-white/90 ${isRTL ? " justify-center" : ""}  `}>
                 {isRTL ? (
<>

              
                  <span className="font-medium">{t("addressValue")}</span>     <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <MapPin className="h-5 w-5 text-white" />
                  </div></>
                 ):(<>
                 
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium">{t("addressValue")}</span></>)}
                </div>
              </div>

              {/* CTA Button */}
              <Button
                asChild
                size="lg"
                className="bg-white text-secondary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact" className={`inline-flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                  {t("getConsultation")}
                  <ArrowRight className={`h-5 w-5 ${isRTL ? "rotate-180" : ""}`} />
                </Link>
              </Button>
            </div>

            {/* Services */}
            <div>
              <h3 className={`font-serif font-bold text-xl mb-6 text-white ${isRTL ? "flex justify-start " : ""}`}>{t("services")}</h3>
              <ul className="space-y-4">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                   {
                    isRTL ? (<> <Link
                      href={link.href}
                      className={`text-white/80 hover:text-white transition-all duration-300 flex items-center gap-3 group ${isRTL ? "justify-start" : ""}`}
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                      <div className="w-2 h-2 bg-white/60 rounded-full group-hover:bg-white transition-colors"></div>
                    </Link></>) : (<> <Link
                      href={link.href}
                      className={`text-white/80 hover:text-white transition-all duration-300 flex items-center gap-3 group ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <div className="w-2 h-2 bg-white/60 rounded-full group-hover:bg-white transition-colors"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </Link></>)
                   }
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3  className={`font-serif font-bold text-xl mb-6 text-white ${isRTL ? "flex justify-start " : ""}`}>{t("company")}</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                  
                        {
                    isRTL ? (<> <Link
                      href={link.href}
                      className={`text-white/80 hover:text-white transition-all duration-300 flex items-center gap-3 group ${isRTL ? "justify-start" : ""}`}
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                      <div className="w-2 h-2 bg-white/60 rounded-full group-hover:bg-white transition-colors"></div>
                    </Link></>) : (<> <Link
                      href={link.href}
                      className={`text-white/80 hover:text-white transition-all duration-300 flex items-center gap-3 group ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <div className="w-2 h-2 bg-white/60 rounded-full group-hover:bg-white transition-colors"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </Link></>)
                   }
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Social */}
            <div>
              <h3  className={`font-serif font-bold text-xl mb-6 text-white ${isRTL ? "flex justify-start " : ""}`}>{t("resources")}</h3>
              <ul className="space-y-4 mb-8">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                     {
                    isRTL ? (<> <Link
                      href={link.href}
                      className={`text-white/80 hover:text-white transition-all duration-300 flex items-center gap-3 group ${isRTL ? "justify-start" : ""}`}
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                      <div className="w-2 h-2 bg-white/60 rounded-full group-hover:bg-white transition-colors"></div>
                    </Link></>) : (<> <Link
                      href={link.href}
                      className={`text-white/80 hover:text-white transition-all duration-300 flex items-center gap-3 group ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <div className="w-2 h-2 bg-white/60 rounded-full group-hover:bg-white transition-colors"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </Link></>)
                   }
                  </li>
                ))}
              </ul>

              <h4  className={`font-serif font-bold text-xl mb-6 text-white ${isRTL ? "flex justify-start " : ""}`}>{t("followUs")}</h4>
              <div className={`flex gap-3 ${isRTL ? " justify-start" : ""}`}>
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      className={`p-3 bg-white/10 rounded-xl hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/20 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

         <div className="border-t border-white/20 py-8">
          <div
            className={`flex flex-col lg:flex-row items-center justify-between gap-6 ${isRTL ? "lg:flex-row-reverse" : ""}`}
          >
           {isRTL ? (<>
         

            <div className={`flex items-center flex-wrap gap-6 text-white/70 ${isRTL ? "flex-row-reverse" : ""}`}>
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="hover:text-white transition-colors duration-300 hover:scale-105 transform text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>   <div className={`flex items-center gap-2 text-white/80 rtl ${isRTL ? "flex-row" : ""}`}>
              <span className="font-medium">{t("copyright")}</span>
            </div></>) : (<>
            <div className={`flex items-center gap-2 text-white/80 ${isRTL ? "flex-row" : ""}`}>
              <span className="font-medium">{t("copyright")}</span>
            </div>

            <div className={`flex items-center flex-wrap gap-6 text-white/70 ${isRTL ? "flex-row-reverse" : ""}`}>
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="hover:text-white transition-colors duration-300 hover:scale-105 transform text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div></>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
