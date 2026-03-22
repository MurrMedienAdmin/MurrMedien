import { getPeople, getProjects, getServices } from "@/lib/dataprovider"
import ProjectList from "@/components/projects/ProjectList"
import PeopleList from "@/components/people/PeopleList"
import ServiceList from "@/components/services/ServiceList"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Section from "@/components/layout/Section"
import Image from "next/image"
import Link from "next/link"

export default async function Home() {
  const projects = await getProjects()
  const people = await getPeople()
  const services = await getServices()

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Hero */}
      <section className="grid md:grid-cols-[2fr_3fr] gap-12 md:gap-20 items-center min-h-[60vh]">
        <div className="overflow-hidden rounded-xl aspect-2/3">
          <Image
            src="/images/moritz_lachen.jpeg"
            alt="Murr Medien Team"
            width={600}
            height={900}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Murr Medien</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Medien, die ein
            <br />
            Lächeln hinterlassen.
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground max-w-sm">
            Wir machen Medien, die zu euch passen. Mit Herzblut, ohne Schnickschnack und auf
            Augenhöhe.
          </p>
          <Button asChild size="lg">
            <Link href="/kontakt">Termin vereinbaren</Link>
          </Button>
        </div>
      </section>

      <Separator />

      {/* Projekte */}
      <Section
        label="Aktuelle Projekte"
        action={
          <Link
            href="/kontakt"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Projekt anfragen →
          </Link>
        }
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectList projects={projects} />
        </div>
      </Section>

      <Separator />

      {/* Services */}
      <Section
        label="Was wir machen"
        action={
          <Link
            href="/ueber-uns"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Mehr über uns →
          </Link>
        }
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceList services={services} />
        </div>
      </Section>

      <Separator />

      {/* Team */}
      <Section
        label="Direkt ansprechen"
        action={
          <Link
            href="/kontakt"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Kontakt aufnehmen →
          </Link>
        }
      >
        <div className="grid gap-8 sm:grid-cols-2 max-w-lg">
          <PeopleList people={people} />
        </div>
      </Section>
    </main>
  )
}
