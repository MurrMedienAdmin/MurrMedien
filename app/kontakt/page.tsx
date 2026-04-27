import PageHeading from "@/components/layout/PageHeading"
import Link from "next/link"

export const metadata = {
  title: "Kontakt",
  description:
    "Schreib uns – Murr Medien aus dem Rems-Murr-Kreis freut sich über neue Projekte. Erreich uns per E-Mail, Instagram oder LinkedIn.",
  alternates: { canonical: "https://murrmedien.de/kontakt" },
  openGraph: {
    url: "https://murrmedien.de/kontakt",
    title: "Kontakt | Murr Medien",
    description:
      "Schreib uns – Murr Medien aus dem Rems-Murr-Kreis freut sich über neue Projekte.",
  },
}

const tiles = [
  {
    label: "Email",
    value: "info@murrmedien.de",
    href: "mailto:info@murrmedien.de",
    hoverBg: "hover:bg-amber-400",
    span: "col-span-2",
  },
  {
    label: "Instagram",
    value: "@murrmedien",
    href: "https://www.instagram.com/murrmedien",
    hoverBg: "hover:bg-pink-500",
    span: "col-span-1",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Murr Medien",
    href: "https://www.linkedin.com/company/murrmedien",
    hoverBg: "hover:bg-blue-600",
    span: "col-span-1",
    external: true,
  },
]

export default function KontaktPage() {
  return (
    <main>
      <PageHeading>Kontakt</PageHeading>

      <div className="px-6 md:px-12 lg:px-20 pb-16">
        <div className="grid grid-cols-2 gap-3">
          {tiles.map((tile) => (
            <Link
              key={tile.label}
              href={tile.href}
              target={tile.external ? "_blank" : undefined}
              rel={tile.external ? "noopener noreferrer" : undefined}
              className={`group ${tile.span} rounded-2xl bg-zinc-900 ${tile.hoverBg} transition-colors duration-300 p-8 md:p-10 min-h-48 md:min-h-64 flex flex-col justify-between`}
            >
              <span className="text-2xl md:text-4xl font-black uppercase text-white leading-tight">
                {tile.label}
              </span>
              <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors self-end">
                {tile.value}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
