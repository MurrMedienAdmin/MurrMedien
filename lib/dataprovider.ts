import {
  getPeopleFromWordpress,
  getProjectsFromWordpress,
  getServicesFromWordpress,
} from "./wordpress"
import { getPeopleFromJson, getProjectsFromJson, getServicesFromJson } from "./json"
import { PersonProps, ProjectProps, ServiceProps } from "@/types/types"

export type DataSource = "JSON" | "WORDPRESS"

const DATA_SOURCE: DataSource = "JSON" // <- hier ändern

export async function getProjects(): Promise<ProjectProps[]> {
  if (DATA_SOURCE === "WORDPRESS") {
    return await getProjectsFromWordpress()
  }
  return getProjectsFromJson()
}

export async function getPeople(): Promise<PersonProps[]> {
  if (DATA_SOURCE === "WORDPRESS") {
    return await getPeopleFromWordpress()
  }
  return getPeopleFromJson()
}

export async function getServices(): Promise<ServiceProps[]> {
  if (DATA_SOURCE === "WORDPRESS") {
    return await getServicesFromWordpress()
  }
  return getServicesFromJson()
}
