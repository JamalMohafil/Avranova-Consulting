"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Logo from "@/public/logo-2.png"

export function SiteHeader() {
  const { t, isRTL } = useI18n()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/services", label: t("services") },
    { href: "/about", label: t("about") },
 
    { href: "/case-studies", label: t("caseStudies") },
    { href: "/contact", label: t("contact") },
  ]

  // ترتيب الروابط حسب اللغة - في العربية نعكس الترتيب
  const orderedNavLinks = isRTL ? [...navLinks].reverse() : navLinks

  return (
    <>
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-0 text-sm">
        <div className="container mx-auto px-4 sm:px-6 xl:px-8">
          <div className={`flex items-center ${isRTL ? "justify-between flex-row-reverse" : "justify-between"}`}>
            <div className={`flex items-center gap-6 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Phone className="h-4 w-4 text-white/80" />
                <span className="text-white/90">+1 (555) 123-4567</span>
              </div>
              <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Mail className="h-4 w-4 text-white/80" />
                <span className="text-white/90">info@avranova.com</span>
              </div>
            </div>
            <div className={`hidden min-[1280px]:flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-lg shadow-xl border-b border-border"
            : "bg-background/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 xl:px-8">
          <div className={`flex items-center h-20 ${isRTL ? "justify-between flex-row-reverse" : "justify-between"}`}>
             <Link
              href="/"
              className={`flex items-center gap-4 group ${isRTL ? "flex-row-reverse order-1" : "order-1"}`}
            >
              <div className="relative">
                <Image src={Logo} alt="Logo" width={80} height={80}   />
              </div>
              <div className={`flex flex-col ${isRTL ? "items-end" : "items-start"}`}>
                <span className="font-serif font-bold text-xl text-foreground group-hover:text-primary transition-colors">
               Avranova Consulting
                </span>
                <span className="text-sm text-muted-foreground font-sans">Precision, Creativity, Collaboration
</span>
              </div>
            </Link>
            {/* Navigation - مع ترتيب الروابط حسب اللغة */}
            <nav className={`hidden min-[1280px]:flex items-center gap-8 ${isRTL ? "flex-row-reverse order-2" : "order-2"}`}>
              {orderedNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium transition-all duration-300 hover:text-primary ${
                    pathname === link.href ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <div
                      className={`absolute -bottom-1 h-0.5 bg-primary rounded-full ${isRTL ? "right-0 left-0" : "left-0 right-0"}`}
                    ></div>
                  )}
                </Link>
              ))}
            </nav>
            {/* CTA Button - positioned correctly for RTL */}
            <div className={`hidden min-[1280px]:flex items-center ${isRTL ? "flex-row-reverse order-3" : "order-3"}`}>
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3"
              >
                <Link href="/contact">{t("getConsultation")}</Link>
              </Button>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`min-[1280px]:hidden p-2 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition-colors ${isRTL ? "order-1" : "order-4"}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {/* Mobile Menu - مع ترتيب الروابط حسب اللغة */}
          {isMenuOpen && (
            <div className="min-[1280px]:hidden border-t border-border bg-background/95 backdrop-blur-lg">
              <div className={`px-4 py-6 space-y-4 ${isRTL ? "text-right" : "text-left"}`}>
                {orderedNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block text-lg font-medium transition-colors ${
                      pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div
                  className={`pt-4 border-t border-border flex gap-4 min-[1280px]:hidden ${isRTL ? "flex-row-reverse justify-end" : "justify-start"}`}
                >
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>
                <div className="pt-4 border-t border-border">
                  <Button asChild className="w-full bg-gradient-to-r from-primary to-secondary text-white">
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                      {t("getConsultation")}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}