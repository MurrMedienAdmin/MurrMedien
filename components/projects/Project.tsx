import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProjectProps } from "@/types/types"
import Link from "next/link"

type ProjectComponentProps = {
  project: ProjectProps
}

const Project = ({ project }: ProjectComponentProps) => {
  return (
    <Card className="group mx-auto w-full max-w-sm pt-0 overflow-hidden h-full flex flex-col">
      <div className="overflow-hidden aspect-video">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
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
