import React from "react"
import { cn } from "@/lib/utils"

type SectionProps = {
  heading?: string
  description?: string
  children?: React.ReactNode
  className?: string
}

const Section = ({ children, className, heading, description }: SectionProps) => {
  if (heading) {
    return (
      <section className={cn("space-y-10", className)}>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight tracking-tight">
            {heading}
          </h2>
          {description && (
            <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="md:w-1/2 md:ml-auto">
          {children}
        </div>
      </section>
    )
  }

  return (
    <section className={cn("space-y-6", className)}>
      {description && (
        <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
      {children}
    </section>
  )
}

export default Section
