import { mapStrapiPerson } from "@/mappers/personmapper"
import { mapStarpiProject } from "@/mappers/projectmapper"
import { mapStrapiService } from "@/mappers/servicemapper"
import { PersonProps, ProjectProps, ServiceProps } from "@/types/types"

export async function getProjectsFromStrapi(): Promise<ProjectProps[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?populate=Foto`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  })

  if (!res.ok) {
    throw new Error("Fehler beim Laden der Projekte")
  }

  const data = await res.json() // rohe Strapi-Daten
  const projects = data.data
  return await Promise.all(projects.map((p: ProjectProps) => mapStarpiProject(p)))
}

export async function getPeopleFromStrapi() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/people?populate=picture`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  })

  if (!res.ok) {
    throw new Error("Fehler beim Laden der Personen")
  }
  const data = await res.json() //
  const people = data.data
  return await Promise.all(people.map((p: PersonProps) => mapStrapiPerson(p)))
}

export async function getServicesFromStrapi() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/services`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  })
  if (!res.ok) {
    throw new Error("Fehler beim Laden der Leistungen")
  }
  const data = await res.json() //
  const services = data.data
  return await Promise.all(services.map((p: ServiceProps) => mapStrapiService(p)))
}

export function getStrapiImageUrl(image: any): string {
  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`
}
