"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { NavLinks } from "@/consts"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
          <Image
            src="/images/logo.png"
            className="h-12 w-auto"
            alt="Murr Medien"
            width={140}
            height={100}
            priority
          />
        </Link>

        {/* RIGHT: social icons + hamburger */}
        <div className="flex items-center gap-3">
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

          {/* Hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menü öffnen">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-screen max-w-none border-none p-0 bg-background"
            >
              <SheetTitle className="sr-only">Navigation</SheetTitle>

              <div className="flex flex-col h-full px-8 py-6 md:px-16 md:py-10">
                {/* Top row: logo + close */}
                <div className="flex items-center justify-between mb-16">
                  <Link href="/" onClick={() => setOpen(false)}>
                    <Image
                      src="/images/logo.png"
                      className="h-12 w-auto"
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
                  {NavLinks.map((link) => (
                    <Link
                      key={link.key}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-4xl md:text-6xl font-light tracking-tight text-foreground hover:text-muted-foreground transition"
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
