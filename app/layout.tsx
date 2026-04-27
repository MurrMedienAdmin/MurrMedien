import type { Metadata } from "next"
import { PT_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://murrmedien.de"),
  title: {
    default: "Murr Medien – Webdesign & Medien aus dem Rems-Murr-Kreis",
    template: "%s | Murr Medien",
  },
  description:
    "Murr Medien aus Oppenweiler: Webdesign, Webentwicklung, Corporate Identity, Fotografie, Videografie und Content Creation für Unternehmen im Rems-Murr-Kreis, Backnang, Winnenden, Waiblingen und Stuttgart.",
  keywords: [
    "Webdesign Rems-Murr-Kreis",
    "Webentwicklung Backnang",
    "Medienagentur Oppenweiler",
    "Corporate Design Winnenden",
    "Fotografie Murrhardt",
    "Videoproduktion Sulzbach an der Murr",
    "Content Creation Weissach im Tal",
    "Webdesign Stuttgart",
    "Medien Agentur Waiblingen",
    "Fullstack Agentur Baden-Württemberg",
    "Murr Medien",
  ],
  alternates: {
    canonical: "https://murrmedien.de",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://murrmedien.de",
    siteName: "Murr Medien",
    title: "Murr Medien – Webdesign & Medien aus dem Rems-Murr-Kreis",
    description:
      "Webdesign, Corporate Identity, Fotografie & Videografie für Unternehmen im Rems-Murr-Kreis und Stuttgart.",
    images: [
      {
        url: "/images/murrmedien_weiss.png",
        width: 1200,
        height: 630,
        alt: "Murr Medien",
      },
    ],
  },
}

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-pt-sans",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Murr Medien GbR",
    url: "https://murrmedien.de",
    email: "info@murrmedien.de",
    logo: "https://murrmedien.de/images/murrmedien_weiss.png",
    description:
      "Medienagentur aus Oppenweiler für Webdesign, Webentwicklung, Corporate Identity, Fotografie, Videografie und Content Creation.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oppenweiler",
      addressRegion: "Baden-Württemberg",
      addressCountry: "DE",
    },
    areaServed: [
      "Rems-Murr-Kreis",
      "Oppenweiler",
      "Backnang",
      "Murrhardt",
      "Sulzbach an der Murr",
      "Unterweissach",
      "Weissach im Tal",
      "Allmersbach im Tal",
      "Steinbach",
      "Spiegelberg",
      "Gaildorf",
      "Fichtenberg",
      "Oberrot",
      "Fornsbach",
      "Stuttgart",
      "Winnenden",
      "Waiblingen",
      "Baden-Württemberg",
    ],
    sameAs: [
      "https://www.instagram.com/murrmedien",
      "https://www.linkedin.com/company/murrmedien",
    ],
  }

  return (
    <html lang="de" className={`dark ${ptSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="min-h-screen">
            <section>{children}</section>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
