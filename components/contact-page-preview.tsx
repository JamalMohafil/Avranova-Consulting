'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Users, Building, HeadphonesIcon } from 'lucide-react'
import { SiteHeader } from './site-header'

export default function ContactPage() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const isRTL = language === 'ar'

  const content = {
    ar: {
      title: 'تواصل معنا',
      subtitle: 'نحن هنا لمساعدتك في تحقيق أهدافك القانونية',
      stats: [
        { number: '50+', label: 'خبير متخصص', icon: Users },
        { number: '3', label: 'مكاتب عالمية', icon: Building },
        { number: '24/7', label: 'دعم متواصل', icon: HeadphonesIcon }
      ],
      contactMethods: [
        {
          icon: Phone,
          title: 'اتصل بنا',
          description: 'تحدث مع خبرائنا مباشرة',
          value: '+966 11 123 4567',
          action: 'اتصال'
        },
        {
          icon: Mail,
          title: 'راسلنا',
          description: 'أرسل استفسارك عبر البريد',
          value: 'info@lawfirm.com',
          action: 'إرسال'
        },
        {
          icon: MapPin,
          title: 'زرنا',
          description: 'تعال إلى مكتبنا الرئيسي',
          value: 'الرياض، المملكة العربية السعودية',
          action: 'الموقع'
        }
      ],
      form: {
        title: 'أرسل رسالة',
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        subject: 'الموضوع',
        message: 'الرسالة',
        submit: 'إرسال الرسالة'
      },
      companyInfo: {
        title: 'معلومات الشركة',
        description: 'نحن مكتب محاماة رائد يقدم خدمات قانونية شاملة ومتميزة لعملائنا في جميع أنحاء المنطقة.',
        workingHours: 'ساعات العمل',
        hours: 'الأحد - الخميس: 9:00 ص - 6:00 م',
        languages: 'اللغات المدعومة',
        supportedLanguages: 'العربية، الإنجليزية، الفرنسية',
        consultation: 'استشارة مجانية'
      }
    },
    en: {
      title: 'Contact Us',
      subtitle: 'We are here to help you achieve your legal goals',
      stats: [
        { number: '50+', label: 'Expert Specialists', icon: Users },
        { number: '3', label: 'Global Offices', icon: Building },
        { number: '24/7', label: 'Continuous Support', icon: HeadphonesIcon }
      ],
      contactMethods: [
        {
          icon: Phone,
          title: 'Call Us',
          description: 'Speak directly with our experts',
          value: '+966 11 123 4567',
          action: 'Call'
        },
        {
          icon: Mail,
          title: 'Email Us',
          description: 'Send your inquiry via email',
          value: 'info@lawfirm.com',
          action: 'Send'
        },
        {
          icon: MapPin,
          title: 'Visit Us',
          description: 'Come to our main office',
          value: 'Riyadh, Saudi Arabia',
          action: 'Location'
        }
      ],
      form: {
        title: 'Send Message',
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message'
      },
      companyInfo: {
        title: 'Company Information',
        description: 'We are a leading law firm providing comprehensive and distinguished legal services to our clients throughout the region.',
        workingHours: 'Working Hours',
        hours: 'Sunday - Thursday: 9:00 AM - 6:00 PM',
        languages: 'Supported Languages',
        supportedLanguages: 'Arabic, English, French',
        consultation: 'Free Consultation'
      }
    }
  }

  const currentContent = content[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#003366] via-[#0097ed] to-[#003366] text-white">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#0097ed]/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isRTL ? 'font-serif' : 'font-sans'}`}>
              {currentContent.title}
            </h1>
            <p className={`text-xl md:text-2xl mb-12 text-blue-100 ${isRTL ? 'font-serif' : 'font-sans'}`}>
              {currentContent.subtitle}
            </p>

            {/* Stats Section */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 ${isRTL ? 'text-right' : 'text-left'}`}>
              {currentContent.stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <div className={`flex items-center gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className="bg-white/20 p-3 rounded-xl">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className={`text-4xl font-bold ${isRTL ? 'text-right' : 'text-left'}`}>
                        {stat.number}
                      </div>
                    </div>
                    <p className={`text-blue-100 text-lg ${isRTL ? 'font-serif text-right' : 'font-sans text-left'}`}>
                      {stat.label}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto ${isRTL ? 'text-right' : 'text-left'}`}>
            {currentContent.contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full">
                    <div className={`flex items-center gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className="bg-gradient-to-br from-[#0097ed] to-[#003366] p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className={`text-2xl font-bold text-[#003366] ${isRTL ? 'font-serif' : 'font-sans'}`}>
                        {method.title}
                      </h3>
                    </div>
                    <p className={`text-gray-600 mb-4 text-lg ${isRTL ? 'font-serif' : 'font-sans'}`}>
                      {method.description}
                    </p>
                    <p className={`text-[#0097ed] font-semibold mb-6 text-lg ${isRTL ? 'font-serif' : 'font-sans'}`}>
                      {method.value}
                    </p>
                    <button className="w-full bg-gradient-to-r from-[#0097ed] to-[#003366] text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                      {method.action}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Contact Form and Company Info */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className={`grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto ${isRTL ? 'text-right' : 'text-left'}`}>
            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
                <h2 className={`text-3xl font-bold text-[#003366] mb-8 ${isRTL ? 'font-serif text-right' : 'font-sans text-left'}`}>
                  {currentContent.form.title}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-gray-700 font-semibold mb-2 ${isRTL ? 'font-serif text-right' : 'font-sans text-left'}`}>
                        {currentContent.form.name}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0097ed] focus:border-transparent transition-all duration-300 text-lg ${isRTL ? 'text-right font-serif' : 'text-left font-sans'}`}
                        required
                      />
                    </div>
                    <div>
                      <label className={`block text-gray-700 font-semibold mb-2 ${isRTL ? 'font-serif text-right' : 'font-sans text-left'}`}>
                        {currentContent.form.email}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0097ed] focus:border-transparent transition-all duration-300 text-lg ${isRTL ? 'text-right font-serif' : 'text-left font-sans'}`}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-gray-700 font-semibold mb-2 ${isRTL ? 'font-serif text-right' : 'font-sans text-left'}`}>
                        {currentContent.form.phone}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0097ed] focus:border-transparent transition-all duration-300 text-lg ${isRTL ? 'text-right font-serif' : 'text-left font-sans'}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-gray-700 font-semibold mb-2 ${isRTL ? 'font-serif text-right' : 'font-sans text-left'}`}>
                        {currentContent.form.subject}
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0097ed] focus:border-transparent transition-all duration-300 text-lg ${isRTL ? 'text-right font-serif' : 'text-left font-sans'}`}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className={`block text-gray-700 font-semibold mb-2 ${isRTL ? 'font-serif text-right' : 'font-sans text-left'}`}>
                      {currentContent.form.message}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0097ed] focus:border-transparent transition-all duration-300 resize-none text-lg ${isRTL ? 'text-right font-serif' : 'text-left font-sans'}`}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#0097ed] to-[#003366] text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    {currentContent.form.submit}
                  </button>
                </form>
              </div>
            </div>

            {/* Company Info - 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-[#003366] to-[#0097ed] text-white rounded-3xl shadow-2xl p-8 h-full">
                <h2 className={`text-3xl font-bold mb-8 ${isRTL ? 'font-serif text-right' : 'font-sans text-left'}`}>
                  {currentContent.companyInfo.title}
                </h2>
                
                <div className="space-y-8">
                  <p className={`text-blue-100 text-lg leading-relaxed ${isRTL ? 'font-serif text-right' : 'font-sans text-left'}`}>
                    {currentContent.companyInfo.description}
                  </p>

                  <div className={`space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className="bg-white/20 p-3 rounded-xl flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className={`font-bold text-lg mb-2 ${isRTL ? 'font-serif' : 'font-sans'}`}>
                          {currentContent.companyInfo.workingHours}
                        </h3>
                        <p className={`text-blue-100 ${isRTL ? 'font-serif' : 'font-sans'}`}>
                          {currentContent.companyInfo.hours}
                        </p>
                      </div>
                    </div>

                    <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className="bg-white/20 p-3 rounded-xl flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className={`font-bold text-lg mb-2 ${isRTL ? 'font-serif' : 'font-sans'}`}>
                          {currentContent.companyInfo.languages}
                        </h3>
                        <p className={`text-blue-100 ${isRTL ? 'font-serif' : 'font-sans'}`}>
                          {currentContent.companyInfo.supportedLanguages}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/20">
                    <button className="w-full bg-white text-[#003366] py-4 px-8 rounded-xl font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg">
                      {currentContent.companyInfo.consultation}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
