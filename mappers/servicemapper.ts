import { ServiceProps } from "@/types/types"

export const mapJsonService = (json: any): ServiceProps => ({
  id: json.id,
  title: json.title,
  description: json.description,
})

export const mapWpService = async (wpData: any): Promise<ServiceProps> => ({
  id: wpData.id,
  title: wpData.title.rendered,
  description: wpData.acf.description,
})

export const mapStrapiService = async (strapiData: any): Promise<ServiceProps> => ({
  id: strapiData.id,
  title: strapiData.title,
  description: strapiData.description,
})
