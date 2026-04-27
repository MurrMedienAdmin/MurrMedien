"use client"

import { useState } from "react"
import { ServiceProps } from "@/types/types"

type Props = {
  services: ServiceProps[]
}

export default function ServiceAccordion({ services }: Props) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      <div className="border-t border-border" />
      {services.map((service) => (
        <div key={service.id}>
          <button
            onClick={() => setOpen(open === service.id ? null : service.id)}
            className="w-full flex items-center justify-between py-6 text-left group"
          >
            <span className="text-lg md:text-xl font-black">{service.title}</span>
            <span className="text-xl font-light ml-4 transition-transform duration-300 select-none"
              style={{ transform: open === service.id ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              +
            </span>
          </button>

          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open === service.id ? "200px" : "0px" }}
          >
            <p className="text-muted-foreground text-base pb-6 max-w-2xl">
              {service.description}
            </p>
          </div>

          <div className="border-t border-border" />
        </div>
      ))}
    </div>
  )
}
