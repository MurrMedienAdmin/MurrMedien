import { ServiceProps } from "@/types/types"

type ServiceProps2 = {
  service: ServiceProps
}

const Service = ({ service }: ServiceProps2) => {
  return (
    <div className="border-t border-border pt-4 space-y-2">
      <h3 className="font-serif font-semibold tracking-tight">{service.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
    </div>
  )
}

export default Service
