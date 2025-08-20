 import { useI18n } from "@/lib/i18n"
import { Phone, Mail, MapPin } from "lucide-react"

const HeroContactUs = () => {
  const { t, isRTL } = useI18n()

  const BoxesContact = [
    {
      icon: Phone,
      name: t("phoneNumber"),
      desc: t("phoneValue"),
      descLink: `tel:${t("phoneValue")}`,
      gradient: "from-blue-500 to-blue-600",
      hoverGradient: "hover:from-blue-600 hover:to-blue-700",
    },
    {
      icon: Mail,
      name: t("emailUs"),
      desc: t("emailValue"),
      descLink: `mailto:${t("emailValue")}`,
      gradient: "from-emerald-500 to-emerald-600",
      hoverGradient: "hover:from-emerald-600 hover:to-emerald-700",
    },
    {
      icon: MapPin,
      name: t("visitUs"),
      desc: t("ourAddress"),
      descLink: "#",
      gradient: "from-purple-500 to-purple-600",
      hoverGradient: "hover:from-purple-600 hover:to-purple-700",
    },
  ]

  return (
    <>
      <div className="mt-16"></div>

      <section className="relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
        <div className="relative w-full">
          <div className="w-full h-[400px] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-700/80 to-purple-600/90"></div>

          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          <div
            className={`absolute w-full top-0 px-6 md:px-12 lg:px-24 xl:px-32 pt-20 pb-32 text-white  `}
          >
            <div className={`max-w-4xl mx-auto ${isRTL ? `flex justify-start flex-col items-start`: ``}`}>
              <h2 className="text-lg md:text-xl font-light mb-4 tracking-wide">
                <span className="text-blue-200 font-mono">// </span>
                {t("contact")}
              </h2>
              <h1 className={`text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight  `}>
                {t("contactDescription")}
              </h1>
              <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-wrap mt-[-120px] relative items-center justify-center gap-6 md:gap-8 px-4 ${isRTL ? "flex-row-reverse" : "flex-row"}`}
        >
          {BoxesContact.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                className="group flex lg:w-[28%] md:w-5/12 max-md:w-8/12 max-[500px]:w-10/12 xl:w-3/12 flex-col h-[380px] bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 items-center justify-center py-8 px-6 relative overflow-hidden"
                key={index}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50"></div>

                <div
                  className={`relative bg-gradient-to-br ${item.gradient} ${item.hoverGradient} w-32 h-32 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center mb-6 group-hover:scale-110`}
                >
                  <IconComponent className="w-16 h-16 text-white drop-shadow-lg" />
                  <div className="absolute inset-0 rounded-3xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                <h1
                  className={`text-2xl font-bold text-gray-800 text-center mb-4 group-hover:text-gray-900 transition-colors duration-300 ${isRTL ? "text-right" : "text-left"}`}
                >
                  {item.name}
                </h1>

                <div className="w-16 h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mb-6 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300"></div>

                <a
                  href={item.descLink}
                  className={`relative text-gray-600 group-hover:text-gray-800 text-center text-lg font-medium transition-all duration-300 hover:underline decoration-2 underline-offset-4 decoration-blue-400 ${isRTL ? "text-right" : "text-left"} px-4 leading-relaxed`}
                  dir={isRTL ? "rtl" : "ltr"}
                >
                  {item.desc}
                </a>

                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300"></div>
              </div>
            )
          })}
        </div>

        <div className="mt-20"></div>
      </section>
    </>
  )
}

export default HeroContactUs
