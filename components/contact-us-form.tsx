"use client"

import { useI18n } from "@/lib/i18n"
import { useForm, ValidationError } from "@formspree/react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
 

 
export default function ContactUsForm() {
  const [state, handleSubmit] = useForm("mvoejvoa")
  const { t, isRTL } = useI18n()

  const notify = (msg: string, type: string) => {
    if (type === "success") {
      toast.success(msg)
    } else if (type === "error") {
      toast.error(msg)
    } else if (type === "warn") {
      toast.warn(msg)
    }
  }

  if (state.succeeded) {
    notify(t("responseIn24h"), "success")
  }
  if (state.errors) {
    notify("عذراً, حدث خطأ أثناء الإرسال الرجاء المحاولة لاحقاً", "error")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`max-w-[1100px] mx-auto p-6 mt-12 space-y-4 ${isRTL ? "text-right" : "text-left"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <h1 className="text-primary text-4xl text-center mb-10">{t("contact")}</h1>
      <div className="mb-4 flex flex-wrap justify-between gap-4 items-center">
        <div className="max-md:w-full w-[48%]">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            {t("yourName")}
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder={t("enterYourName")}
            className="border hover:border-gray-800 focus:border-primary active:border-primary border-gray-400 appearance-none rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs italic" />
        </div>

        <div className="max-md:w-full w-[48%]">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            {t("yourEmail")}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder={t("enterYourEmail")}
            className="border hover:border-gray-800 focus:border-primary active:border-primary border-gray-400 appearance-none rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs italic" />
        </div>
      </div>

      <div className="mb-4 flex flex-wrap justify-between gap-4 items-center">
        <div className="max-md:w-full w-[48%]">
          <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
            {t("companyName")}
          </label>
          <input
            id="company"
            type="text"
            name="company"
            placeholder={t("companyName")}
            className="border hover:border-gray-800 focus:border-primary active:border-primary border-gray-400 appearance-none rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ValidationError
            prefix="Company"
            field="company"
            errors={state.errors}
            className="text-red-500 text-xs italic"
          />
        </div>
        <div className="max-md:w-full w-[48%]">
          <label htmlFor="service" className="block text-gray-700 text-sm font-bold mb-2">
            {t("ourServices")}
          </label>
          <input
            id="service"
            type="text"
            name="service"
            placeholder={t("ourServices")}
            className="border hover:border-gray-800 focus:border-primary active:border-primary border-gray-400 appearance-none rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ValidationError
            prefix="Service"
            field="service"
            errors={state.errors}
            className="text-red-500 text-xs italic"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="serviceType" className="block text-gray-700 text-sm font-bold mb-2">
          {t("ourServices")}
        </label>
        <div className="flex gap-2 flex-wrap">
          <label className="flex items-center cursor-pointer gap-2 justify-center">
            <input
              type="radio"
              name="serviceType"
              value={t("bimCoordination")}
              className={`${isRTL ? "ml-2" : "mr-2"} mt-[7px]`}
            />
            {t("bimCoordination")}
          </label>
          <label className="flex items-center cursor-pointer gap-2 justify-center">
            <input
              type="radio"
              name="serviceType"
              value={t("architecturalVisualization")}
              className={`${isRTL ? "ml-2" : "mr-2"} mt-[7px]`}
            />
            {t("architecturalVisualization")}
          </label>
          <label className="flex items-center cursor-pointer gap-2 justify-center">
            <input
              type="radio"
              name="serviceType"
              value={t("mepIntegration")}
              className={`${isRTL ? "ml-2" : "mr-2"} mt-[7px]`}
            />
            {t("mepIntegration")}
          </label>
          <label className="flex items-center cursor-pointer gap-2 justify-center">
            <input
              type="radio"
              name="serviceType"
              value={t("photorealistic_renders")}
              className={`${isRTL ? "ml-2" : "mr-2"} mt-[7px]`}
            />
            {t("photorealistic_renders")}
          </label>
          <label className="flex items-center cursor-pointer gap-2 justify-center">
            <input
              type="radio"
              name="serviceType"
              value={t("virtual_reality")}
              className={`${isRTL ? "ml-2" : "mr-2"} mt-[7px]`}
            />
            {t("virtual_reality")}
          </label>
          <label className="flex items-center cursor-pointer gap-2 justify-center">
            <input
              type="radio"
              name="serviceType"
              value={t("three_d_animations")}
              className={`${isRTL ? "ml-2" : "mr-2"} mt-[7px]`}
            />
            {t("three_d_animations")}
          </label>
        </div>
        <ValidationError
          prefix="ServiceType"
          field="serviceType"
          errors={state.errors}
          className="text-red-500 text-xs italic"
        />
      </div>

      <div className="mb-4 ">
        <label htmlFor="message" className="block text-gray-700  text-sm font-bold mb-2">
          {t("yourMessage")}
        </label>
        <textarea
          id="message"
          name="message"
          placeholder={t("enterYourMessage")}
          className=" min-h-[200px] appearance-none border border-gray-400 hover:border-gray-800 focus:border-primary active:border-primary rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-xs italic"
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-primary hover:bg-primary/90 w-[200px] text-white font-bold py-3 rounded-xl px-4 focus:outline-none focus:shadow-outline"
        >
          {t("sendMessage")}
        </button>
      </div>
      <ToastContainer />
    </form>
  )
}
