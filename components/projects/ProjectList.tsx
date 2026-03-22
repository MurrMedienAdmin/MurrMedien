"use client"

import { ProjectProps } from "@/types/types"
import React from "react"
import Project from "./Project"

type ProjectListProps = {
  projects: ProjectProps[]
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </>
  )
}

export default ProjectList
