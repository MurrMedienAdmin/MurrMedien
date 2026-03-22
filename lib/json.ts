import projectsJson from "../data/projects.json"
import peopleJson from "../data/people.json"
import servicesJson from "../data/services.json"
import { PersonProps, ProjectProps, ServiceProps } from "@/types/types"
import { mapJsonProject } from "@/mappers/projectmapper"
import { mapJsonPerson } from "@/mappers/personmapper"
import { mapJsonService } from "@/mappers/servicemapper"

export async function getProjectsFromJson(): Promise<ProjectProps[]> {
  // bei statischem JSON reicht das direkte Mapping
  return projectsJson.map(mapJsonProject)
}

export async function getPeopleFromJson(): Promise<PersonProps[]> {
  // bei statischem JSON reicht das direkte Mapping
  return peopleJson.map(mapJsonPerson)
}

export async function getServicesFromJson(): Promise<ServiceProps[]> {
  // bei statischem JSON reicht das direkte Mapping
  return servicesJson.map(mapJsonService)
}
