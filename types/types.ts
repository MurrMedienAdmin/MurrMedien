export interface MediaItem {
  type: "image" | "video"
  url: string
}

export interface ProjectProps {
  id: number
  title: string
  imageUrl: string
  videoUrl?: string
  media?: MediaItem[]
  description: string
  category?: string
  link: string
  gridSpan?: number
  aspect?: string
}

export interface PersonProps {
  id: number
  firstName: string
  lastName: string
  email?: string
  phoneNumber?: string
  role: string
  img: string
  linkedIn?: string
}

export interface ServiceProps {
  id: number
  title: string
  description: string
}
