import React from "react"
import { cn } from "@/lib/utils"

type SectionProps = {
  label?: string
  action?: React.ReactNode
  title?: string
  description?: string
  children?: React.ReactNode
  className?: string
}

const Section = ({ children, className, label, action, title, description }: SectionProps) => {
  return (
    <section className={cn("space-y-8", className)}>
      {(label || action) && (
        <div className="flex items-center justify-between">
          {label && (
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
          )}
          {action}
        </div>
      )}
      {title && <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>}
      {description && (
        <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
      {children}
    </section>
  )
}

export default Section
