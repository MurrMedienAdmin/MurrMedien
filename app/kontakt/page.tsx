import { getPeople } from "@/lib/dataprovider"
import PeopleList from "@/components/people/PeopleList"
import { Separator } from "@/components/ui/separator"
import Section from "@/components/layout/Section"
import Link from "next/link"

export const metadata = {
  title: "Kontakt – Murr Medien",
}

export default async function KontaktPage() {
  const people = await getPeople()

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Intro */}
      <Section label="Kontakt" className="max-w-2xl space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Schreib uns direkt oder ruf an.
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          Wir antworten persönlich und zeitnah.
        </p>
      </Section>

      {/* Team */}
      <section className="space-y-8">
        <div className="grid gap-8 sm:grid-cols-2 max-w-lg">
          <PeopleList people={people} />
        </div>
      </section>

      <Separator />

      {/* Anschrift */}
      <Section label="Anschrift" className="space-y-4">
        <div className="space-y-1 text-sm text-muted-foreground">
          <p className="text-foreground font-medium">Murr Medien GbR</p>
          <p>Amselweg 5, 71570 Oppenweiler</p>
        </div>
        <Link
          href="https://maps.apple.com/?address=Amselweg+5,+71570+Oppenweiler"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition"
        >
          In Maps öffnen ↗
        </Link>
      </Section>
    </main>
  )
}
