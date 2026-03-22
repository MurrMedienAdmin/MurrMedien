import Section from "@/components/layout/Section"
import ProjectList from "@/components/projects/ProjectList"
import { getProjects } from "@/lib/dataprovider"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export const metadata = {
  title: "Projekte – Murr Medien",
}

export default async function Projekte() {
  const projects = await getProjects()

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      <Section
        label="Projekte"
        description="Ein Blick in unsere Projekte verrät dir mehr über unsere Arbeit und unseren Stil. Entdecke, was wir bisher umgesetzt haben."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectList projects={projects} />
        </div>
      </Section>

      <Separator />

      <Section title="Euer Projekt ist das nächste?" className="max-w-xl space-y-4">
        <p className="text-base leading-relaxed text-muted-foreground">
          Schreibt uns oder ruft direkt an – wir hören zu und schauen gemeinsam, was möglich ist.
        </p>
        <Button asChild>
          <Link href="/kontakt">Projekt anfragen</Link>
        </Button>
      </Section>
    </main>
  )
}
