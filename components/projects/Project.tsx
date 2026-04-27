import { ProjectProps } from "@/types/types"
import Link from "next/link"

type ProjectComponentProps = {
  project: ProjectProps
  colSpan?: number
}

const colSpanClass: Record<number, string> = {
  1: "col-span-1 md:col-span-1",
  2: "col-span-1 md:col-span-2",
  3: "col-span-1 md:col-span-3",
  6: "col-span-2 md:col-span-6",
}

const Project = ({ project, colSpan = 3 }: ProjectComponentProps) => {
  const spanClass = colSpanClass[colSpan] ?? "col-span-1 md:col-span-3"
  const desktopAspect = project.aspect ?? "aspect-video"
  // Full-width items keep their aspect on mobile; all others become square
  const aspectClass =
    colSpan === 6 ? desktopAspect : `aspect-square md:${desktopAspect}`
  const isVideo = project.imageUrl.endsWith(".mp4")

  return (
    <div className={spanClass}>
      {/* Card */}
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative overflow-hidden rounded-xl block ${aspectClass}`}
      >
        {isVideo ? (
          <video
            src={project.imageUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {/* Desktop overlay + text on hover */}
        <div className="absolute inset-0 hidden md:block bg-black/0 group-hover:bg-black/50 transition-colors duration-300 pointer-events-none" />
        <div className="absolute inset-0 hidden md:flex flex-col justify-end p-7">
          <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <p className="font-black uppercase text-white text-xl leading-tight tracking-wide">
              {project.title}
            </p>
            {project.category && (
              <p className="font-serif italic text-white/75 text-lg">{project.category}</p>
            )}
          </div>
        </div>
      </Link>

      {/* Mobile text below card */}
      <div className="md:hidden pt-2 px-1 pb-1">
        <p className="font-black uppercase text-sm leading-tight tracking-wide">
          {project.title}
        </p>
        {project.category && (
          <p className="font-serif italic text-muted-foreground text-xs">{project.category}</p>
        )}
      </div>
    </div>
  )
}

export default Project
