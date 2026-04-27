"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const ctaMap: Record<string, { line1: string; line2: string }> = {
  "/": {
    line1: "Bock auf ein gemeinsames Projekt?",
    line2: "~ Dann melde dich.",
  },
  "/projekte": {
    line1: "Idee im Kopf, kein Plan für die Umsetzung?",
    line2: "~ Wir hören zu.",
  },
  "/ueber-uns": {
    line1: "Du hast das Gefühl, wir passen zusammen?",
    line2: "~ Dann schreib uns.",
  },
}

export default function Footer() {
  const pathname = usePathname()
  const cta = ctaMap[pathname]

  return (
    <footer className="bg-background">
      {cta && (
        <div className="px-6 md:px-12 lg:px-20 py-24 md:py-32 flex justify-end">
          <Link href="/kontakt" className="text-right group">
            <p className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight group-hover:opacity-80 transition-opacity">
              {cta.line1}
            </p>
            <p className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-muted-foreground group-hover:opacity-80 transition-opacity">
              {cta.line2}
            </p>
          </Link>
        </div>
      )}

      <Separator />

      <div className="px-6 md:px-12 lg:px-20 py-5 flex justify-between text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Murr Medien GbR</span>
        <div className="flex gap-6">
          <Link href="/impressum" className="hover:text-foreground transition">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-foreground transition">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  )
}
