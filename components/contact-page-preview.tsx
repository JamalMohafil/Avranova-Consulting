"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
 import { LanguageSwitcher } from "@/components/language-switcher"
import { useI18n } from "@/lib/i18n"

export default function ContactUsPage() {
  const { t, isRTL } = useI18n()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <main
      className={`min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5  `}
    >
     
      {/* Hero Section */}
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-white overflow-hidden">
       <div className="absolute inset-0 bg-[url('/architectural-blueprints.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20" />
             <div className="max-w-4xl mx-auto flex-col flex justify-center items-center text-center">
                 <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-4xl mx-auto text-center relative">
  <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            {t("contact")}
          </div>
          <h1 className="text-4xl md:text-6xl flex flex-col font-bold text-white mb-6">
            {t("getInTouch")}{" "}
            
            <span className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 ${isRTL ? "mt-4" : ""}`}>
              Avranova Consulting
            </span>
          </h1>
    <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">{t("contactDescription")}</p>        </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl max-h-max sticky border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-8">
                <CardTitle className={`text-2xl font-bold flex items-center gap-2 ${isRTL && "justify-start"}`}>
              {
                isRTL ? (<>
                  {t("sendMessage")}
                    <Send className="w-6 h-6 text-primary" />
                </>) : (<>
                    <Send className="w-6 h-6 text-primary" />
                  {t("sendMessage")}</>)
              }
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">{t("sendMessage")}!</h3>
                    <p className="text-muted-foreground">{t("responseIn24h")}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          {t("yourName")}
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t("enterYourName")}
                          required
                          className="h-12 bg-input/50 border-border/50 focus:border-primary transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          {t("yourEmail")}
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t("enterYourEmail")}
                          required
                          className="h-12 bg-input/50 border-border/50 focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">
                        {t("phoneNumber")}
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t("enterYourPhone")}
                        required
                        className="h-12 bg-input/50 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        {t("yourMessage")}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t("enterYourMessage")}
                        required
                        rows={6}
                        className="bg-input/50 border-border/50 focus:border-primary transition-colors resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {t("sendMessage")}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Company Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">{t("getInTouch")}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{t("contactDescription")}</p>
              </div>

              <div className="space-y-6">
                {/* Contact Cards */}
                <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className={`flex items-start gap-4 ${isRTL ? "justify-start" : ""}`}>
                   {isRTL ? (<>
                   
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{t("callUs")}</h3>
                        <p className="text-muted-foreground">{t("phoneValue")}</p>
                        <p className="text-sm text-muted-foreground mt-1">{t("mondayToFriday")}</p>
                      </div>
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                   </>) : (<>
                   
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{t("callUs")}</h3>
                        <p className="text-muted-foreground">{t("phoneValue")}</p>
                        <p className="text-sm text-muted-foreground mt-1">{t("mondayToFriday")}</p>
                      </div></>)}
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className={`flex items-start gap-4 ${isRTL ? "justify-start" : ""}`}>
                   {isRTL ? (<>
                   
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{t("emailUs")}</h3>
                        <p className="text-muted-foreground">{t("emailValue")}</p>
                        <p className="text-sm text-muted-foreground mt-1">{t("responseIn24h")}</p>
                      </div>
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                   </>):(<>
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{t("emailUs")}</h3>
                        <p className="text-muted-foreground">{t("emailValue")}</p>
                        <p className="text-sm text-muted-foreground mt-1">{t("responseIn24h")}</p>
                      </div></>)}
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className={`flex items-start gap-4 ${isRTL ? "justify-start" : ""}`}>
                     {isRTL ? (<>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{t("visitUs")}</h3>
                        <p className="text-muted-foreground">{t("ourAddress")}</p>
                      </div>
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                     </>) : (<>
                      <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                        <MapPin className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{t("visitUs")}</h3>
                        <p className="text-muted-foreground">{t("ourAddress")}</p>
                      </div></>)}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map Placeholder */}
               
             </div>
          </div>
             <div className="w-full mt-12 h-[500px] max-sm:h-[390px]">

           
                 <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3279.17871038229!2d36.70773187574552!3d34.72588947291066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDQzJzMzLjIiTiAzNsKwNDInMzcuMSJF!5e0!3m2!1sen!2str!4v1755781527024!5m2!1sen!2str"  
                   loading="lazy"                       style={{width: "100%", height: "100%", border: "0"}}
></iframe>
                 </div>
          
        </div>

      </section>
      
    </main>
  )
}
