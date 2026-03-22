import { mapWpPerson } from "@/mappers/personmapper"
import { mapWpProject } from "@/mappers/projectmapper"
import { mapWpService } from "@/mappers/servicemapper"
import { PersonProps, ProjectProps, ServiceProps } from "@/types/types"

export async function getProjectsFromWordpress(): Promise<ProjectProps[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/projekt`, { cache: "no-store" })

  if (!res.ok) {
    throw new Error("Fehler beim Laden der Projekte")
  }

  const data = await res.json() // rohe WP-Daten
  return await Promise.all(data.map((p: ProjectProps) => mapWpProject(p)))
}

export async function getPeopleFromWordpress() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/person`, { cache: "no-store" })

  if (!res.ok) {
    throw new Error("Fehler beim Laden der Personen")
  }
  const data = await res.json() //

  return await Promise.all(data.map((p: PersonProps) => mapWpPerson(p)))
}

export async function getServicesFromWordpress() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/service`, { cache: "no-store" })

  if (!res.ok) {
    throw new Error("Fehler beim Laden der Leistungen")
  }
  const data = await res.json() //

  return await Promise.all(data.map((p: ServiceProps) => mapWpService(p)))
}
