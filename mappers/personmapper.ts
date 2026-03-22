import { PersonProps } from "../types/types"

export const mapWpPerson = async (wpData: any): Promise<PersonProps> => ({
  id: wpData.id,
  firstName: wpData.acf.firstName,
  lastName: wpData.acf.lastName,
  email: wpData.acf.email,
  phoneNumber: wpData.acf.phonenumber,
  img: await getImageUrl(wpData.acf.bild),
  role: wpData.acf.role,
  linkedIn: wpData.acf.linkedin,
})

// Funktion zum Holen der Bild-URL
export async function getImageUrl(id: number): Promise<string> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/media/${id}`)
  if (!res.ok) throw new Error("Fehler beim Laden des Bildes")

  const data = await res.json()
  return data.source_url
}

export const mapJsonPerson = (json: any): PersonProps => ({
  id: json.uuid,
  firstName: json.firstName,
  lastName: json.lastName,
  img: json.img,
  email: json.email,
  phoneNumber: json.phoneNumber,
  role: json.role,
  linkedIn: json.linkedIn,
})
