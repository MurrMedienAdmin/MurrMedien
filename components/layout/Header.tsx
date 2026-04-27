"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/projekte", text: "Projekte" },
  { href: "/ueber-uns", text: "Über uns" },
  { href: "/kontakt", text: "Kontakt" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="px-6 md:px-12 lg:px-20 h-[4.5rem] flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
          <Image
            src="/images/murrmedien_weiss.png"
            className="h-[4.5rem] w-auto"
            alt="Murr Medien"
            width={140}
            height={100}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-black uppercase tracking-widest text-foreground hover:text-muted-foreground transition"
            >
              {link.text}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-14 w-14" aria-label="Menü öffnen">
                <Menu className="h-[67px] w-[67px]" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-screen max-w-none border-none p-0 bg-background"
            >
              <SheetTitle className="sr-only">Navigation</SheetTitle>

              <div className="flex flex-col h-full px-8 py-6">
                {/* Top row: logo + close */}
                <div className="flex items-center justify-between mb-16">
                  <Link href="/" onClick={() => setOpen(false)}>
                    <Image
                      src="/images/murrmedien_weiss.png"
                      className="h-[4.5rem] w-auto"
                      alt="Murr Medien"
                      width={140}
                      height={100}
                    />
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setOpen(false)}
                    aria-label="Menü schließen"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Nav links */}
                <nav className="flex flex-col gap-6 flex-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-4xl font-black uppercase tracking-tight text-foreground hover:text-muted-foreground transition"
                    >
                      {link.text}
                    </Link>
                  ))}
                </nav>

                {/* Bottom: social icons */}
                <div className="flex items-center gap-4 pt-8 border-t border-border">
                  <Link
                    href="https://www.instagram.com/murrmedien"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-muted-foreground hover:text-foreground transition"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
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
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="4" />
                      <path d="M7 10v7M11 10v7M11 13a3 3 0 0 1 6 0v4" />
                      <circle cx="7" cy="7" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
