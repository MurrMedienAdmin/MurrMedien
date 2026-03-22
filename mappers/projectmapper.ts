import { ProjectProps } from "../types/types"

// Mapping von WordPress
export const mapWpProject = async (wpData: any): Promise<ProjectProps> => ({
  id: wpData.id,
  title: wpData.title.rendered,
  description: wpData.acf.description,
  imageUrl: await getImageUrl(wpData.acf.bild),
  link: wpData.acf.link,
})

// Funktion zum Holen der Bild-URL
export async function getImageUrl(id: number): Promise<string> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/media/${id}`)
  if (!res.ok) throw new Error("Fehler beim Laden des Bildes")

  const data = await res.json()
  return data.source_url
}

export const mapJsonProject = (json: any): ProjectProps => ({
  id: json.uuid,
  title: json.fullTitle,
  description: json.desc,
  imageUrl: json.img,
  link: json.link,
})
