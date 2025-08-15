"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useI18n } from "@/lib/i18n"
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactForm() {
  const { t, isRTL } = useI18n()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-8 shadow-sm">
              <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Mail className="h-4 w-4" />
                {t("quickContact")}
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-6 leading-tight">
              {t("readyToStart")}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              {t("contactDescription")}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className={`lg:col-span-2 space-y-8 ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
                <h3
                  className={`text-2xl font-bold text-slate-900 dark:text-white mb-8 ${isRTL ? "text-right" : "text-left"}`}
                >
                  {t("getInTouch")}
                </h3>

                <div className="space-y-6">
                  <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div className={`${isRTL ? "text-right" : "text-left"}`}>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-lg">{t("callUs")}</h4>
                      <p className="text-slate-600 dark:text-slate-400 font-medium">+1 (555) 123-4567</p>
                      <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">{t("availableNow")}</p>
                    </div>
                  </div>

                  <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className={`${isRTL ? "text-right" : "text-left"}`}>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-lg">{t("emailUs")}</h4>
                      <p className="text-slate-600 dark:text-slate-400 font-medium">info@avranova.com</p>
                      <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">{t("responseIn24h")}</p>
                    </div>
                  </div>

                  <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className={`${isRTL ? "text-right" : "text-left"}`}>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-lg">{t("visitUs")}</h4>
                      <p className="text-slate-600 dark:text-slate-400 font-medium">{t("ourAddress")}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">{t("mondayToFriday")}</p>
                    </div>
                  </div>

                  <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div className={`${isRTL ? "text-right" : "text-left"}`}>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-lg">{t("workingHours")}</h4>
                      <p className="text-slate-600 dark:text-slate-400 font-medium">9:00 AM - 6:00 PM</p>
                      <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">{t("mondayToFriday")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`lg:col-span-3 ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-10 shadow-2xl border border-slate-200 dark:border-slate-700">
                <div className={`mb-8 ${isRTL ? "text-right" : "text-left"}`}>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{t("sendMessage")}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{t("formDescription")}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        className={`text-sm font-medium text-slate-700 dark:text-slate-300 ${isRTL ? "text-right block" : "text-left block"}`}
                      >
                        {t("yourName")}
                      </label>
                      <Input
                        type="text"
                        name="name"
                        placeholder={t("enterYourName")}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`h-12 rounded-xl border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500 ${isRTL ? "text-right" : "text-left"}`}
                        dir={isRTL ? "rtl" : "ltr"}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className={`text-sm font-medium text-slate-700 dark:text-slate-300 ${isRTL ? "text-right block" : "text-left block"}`}
                      >
                        {t("yourEmail")}
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder={t("enterYourEmail")}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`h-12 rounded-xl border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500 ${isRTL ? "text-right" : "text-left"}`}
                        dir={isRTL ? "rtl" : "ltr"}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      className={`text-sm font-medium text-slate-700 dark:text-slate-300 ${isRTL ? "text-right block" : "text-left block"}`}
                    >
                      {t("phoneNumber")}
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder={t("enterYourPhone")}
                      value={formData.phone}
                      onChange={handleChange}
                      className={`h-12 rounded-xl border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500 ${isRTL ? "text-right" : "text-left"}`}
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      className={`text-sm font-medium text-slate-700 dark:text-slate-300 ${isRTL ? "text-right block" : "text-left block"}`}
                    >
                      {t("yourMessage")}
                    </label>
                    <Textarea
                      name="message"
                      placeholder={t("enterYourMessage")}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`rounded-xl border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500 resize-none ${isRTL ? "text-right" : "text-left"}`}
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    <div className={`flex items-center justify-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <Send className={`h-5 w-5 ${isRTL ? "rotate-180" : ""}`} />
                      {t("sendMessage")}
                    </div>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
