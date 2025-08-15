import   React from "react"
import   { Metadata } from "next"
import localFont from "next/font/local"
import { Noto_Kufi_Arabic } from "next/font/google"
import LayoutClient from "./layout-client"
import "./globals.css"

const decker = localFont({
  src: [
    {
      path: "../public/fonts/Decker.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/DeckerB.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-decker",
  display: "swap",
})

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-kufi-arabic",
})

export const metadata: Metadata = {
  title: "Professional Consulting Services | Expert Business Solutions",
  description:
    "Leading consulting firm providing BIM coordination, architectural visualization, and MEP integration services for complex construction projects.",
  generator: "v0.app",
}

export default   function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
 
  return (
    <html lang="en" className={`${decker.variable} ${notoKufiArabic.variable} antialiased`}>
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
