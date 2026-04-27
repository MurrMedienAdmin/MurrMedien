"use client"

import { ProjectProps } from "@/types/types"
import Project from "./Project"

type ProjectListProps = {
  projects: ProjectProps[]
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-1 p-1">
      {projects.map((project) => (
        <Project
          key={project.id}
          project={project}
          colSpan={project.gridSpan ?? 3}
        />
      ))}
    </div>
  )
}

export default ProjectList
