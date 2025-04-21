import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tirth Chaudhary",
  description: "Personal website of Tirth Chaudhary, Computer Science Student at University of Manitoba",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen">
          <Navbar />
          <main className="w-full">
            {children}
            <ScrollToTop />
          </main>
        </div>
      </body>
    </html>
  )
}
