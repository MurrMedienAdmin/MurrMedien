import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProjectProps } from "@/types/types"
import Link from "next/link"
import MediaSlider from "./MediaSlider"

type ProjectComponentProps = {
  project: ProjectProps
}

const Project = ({ project }: ProjectComponentProps) => {
  return (
    <Card className="group mx-auto w-full max-w-sm pt-0 overflow-hidden h-full flex flex-col">
      <div className="overflow-hidden aspect-video">
        {project.media && project.media.length > 1 ? (
          <MediaSlider items={project.media} alt={project.title} />
        ) : project.videoUrl ? (
          <video
            src={project.videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 text-sm text-muted-foreground">
        {project.description}
      </CardContent>

      <CardFooter>
        <Link href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button variant="outline" className="w-full">
            Zum Projekt ↗
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default Project
