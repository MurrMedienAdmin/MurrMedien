import { getPeople, getServices } from "@/lib/dataprovider"
import PeopleList from "@/components/people/PeopleList"
import ServiceAccordion from "@/components/services/ServiceAccordion"
import { Separator } from "@/components/ui/separator"
import Section from "@/components/layout/Section"
import PageHeading from "@/components/layout/PageHeading"

export const metadata = {
  title: "Über uns",
  description:
    "Lern das Team hinter Murr Medien kennen: Moritz, Luca und Ivo aus Oppenweiler im Rems-Murr-Kreis. Kreative Köpfe für Web, Design, Foto und Video.",
  alternates: { canonical: "https://murrmedien.de/ueber-uns" },
  openGraph: {
    url: "https://murrmedien.de/ueber-uns",
    title: "Über uns | Murr Medien",
    description:
      "Lern das Team hinter Murr Medien kennen: Moritz, Luca und Ivo aus Oppenweiler im Rems-Murr-Kreis.",
  },
}

export default async function AboutUs() {
  const people = await getPeople()
  const services = await getServices()

  return (
    <main>
      <PageHeading>Über uns</PageHeading>

      <div className="px-6 md:px-12 lg:px-20 pt-12 md:pt-16 pb-16 space-y-16">
        {/* Intro – kein heading, Text linksbündig */}
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground max-w-2xl">
          <p>
            Murr Medien entstand 2025, nicht aus einem klassischen Businessplan, sondern aus
            unserer gemeinsamen Motivation heraus, kreative Projekte für Unternehmen umzusetzen, auf
            die wir wirklich Lust haben. Aus der Überzeugung, dass Firmen in der Region einen
            Medienpartner verdienen, der zuhört, mitdenkt und ehrlich berät. Wir liefern nicht
            einfach das, was bestellt wird. Wir hinterfragen, gestalten und entwickeln Lösungen,
            hinter denen wir selbst stehen.
          </p>
          <p>
            Was uns antreibt, ist die Überzeugung, dass ein konsistenter Markenauftritt keine Frage
            der Größe ist, sondern der Haltung. Wer nach außen klar und ehrlich kommuniziert,
            schafft Vertrauen. Und Vertrauen ist das Fundament jeder guten Zusammenarbeit.
          </p>
        </div>

        <Separator />

        {/* Team – Vollbreite, 3 Spalten */}
        <section>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight tracking-tight mb-10">
            Unser Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <PeopleList people={people} variant="team" />
          </div>
        </section>

        <Separator />

        {/* Was wir machen */}
        <Section
          heading="Was wir machen"
          description="Wir begleiten euch von der ersten Idee bis zur fertigen Umsetzung. Ob Website, Corporate Identity, Foto und Video oder gedruckte Materialien: Wir hören zu, denken mit und finden heraus, was euer Auftritt wirklich braucht."
        >
          <ServiceAccordion services={services} />
        </Section>
      </div>
    </main>
  )
}
