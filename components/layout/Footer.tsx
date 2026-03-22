import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo + Kontakt */}
          <div className="space-y-4">
            <Image
              src="/images/logo.png"
              alt="Murr Medien"
              width={160}
              height={40}
              className="h-8 w-auto"
            />

            <div className="text-sm text-muted-foreground leading-relaxed">
              <p>Murr Medien GbR</p>
              <p>Amselweg 5 · 71570 Oppenweiler</p>
            </div>

            <div className="text-sm space-y-1">
              <Link
                href="mailto:info@murrmedien.de"
                className="block hover:text-foreground transition"
              >
                info@murrmedien.de
              </Link>
              <Link href="tel:+4915566152739" className="block hover:text-foreground transition">
                +49 155 66152739
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <Link
                href="https://www.instagram.com/murrmedien"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-foreground transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </Link>

              <Link
                href="https://www.linkedin.com/company/murrmedien"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="4" />
                  <path d="M7 10v7M11 10v7M11 13a3 3 0 0 1 6 0v4" />
                  <circle cx="7" cy="7" r="1" fill="currentColor" stroke="none" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:text-right">
            <p className="text-sm font-medium mb-4">Navigation</p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
              <Link href="/" className="hover:text-foreground transition">
                Start
              </Link>
              <Link href="/ueber-uns" className="hover:text-foreground transition">
                Über uns
              </Link>
              <Link href="/projekte" className="hover:text-foreground transition">
                Projekte
              </Link>
              <Link href="/kontakt" className="hover:text-foreground transition">
                Kontakt
              </Link>
            </div>
          </div>

          {/* Rechtliches */}
          <div className="md:text-right">
            <p className="text-sm font-medium mb-4">Rechtliches</p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
              <Link href="/impressum" className="hover:text-foreground transition">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-foreground transition">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Murr Medien GbR · Gesellschafter: Luca Krämer, Moritz Stoppel
        </div>
      </div>
    </footer>
  )
}
