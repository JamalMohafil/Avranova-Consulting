"use client"

import  React, { useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/lib/i18n"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import Loading from "./loading"

function LayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    setLoading(false)
  },[])
  if(loading) return <Loading/>
  return (
    <ThemeProvider>

    <I18nProvider>
         <SiteHeader/>
      <div className="font-sans">{children}</div>
      <SiteFooter/>

    </I18nProvider>
    </ThemeProvider>
  )
}

export default LayoutClient
