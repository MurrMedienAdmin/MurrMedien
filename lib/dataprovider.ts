import {
  getPeopleFromWordpress,
  getProjectsFromWordpress,
  getServicesFromWordpress,
} from "./wordpress"
import { getPeopleFromJson, getProjectsFromJson, getServicesFromJson } from "./json"
import { PersonProps, ProjectProps, ServiceProps } from "@/types/types"
import { getPeopleFromStrapi, getProjectsFromStrapi, getServicesFromStrapi } from "./strapi"

export type DataSource = "JSON" | "WORDPRESS" | "STRAPI"

const DATA_SOURCE: DataSource = (process.env.DATA_SOURCE as DataSource) || "JSON"

export async function getProjects(): Promise<ProjectProps[]> {
  if (DATA_SOURCE === "WORDPRESS") {
    return await getProjectsFromWordpress()
  }
  if (DATA_SOURCE === "STRAPI") {
    return await getProjectsFromStrapi()
  }
  return getProjectsFromJson()
}

export async function getPeople(): Promise<PersonProps[]> {
  if (DATA_SOURCE === "WORDPRESS") {
    return await getPeopleFromWordpress()
  }
  if (DATA_SOURCE === "STRAPI") {
    return await getPeopleFromStrapi()
  }
  return getPeopleFromJson()
}

export async function getServices(): Promise<ServiceProps[]> {
  if (DATA_SOURCE === "WORDPRESS") {
    return await getServicesFromWordpress()
  }
  if (DATA_SOURCE === "STRAPI") {
  }
  return getServicesFromJson()
}
