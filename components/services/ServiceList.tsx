import { ServiceProps } from "@/types/types"
import Service from "./Service"

type ServiceListProps = {
  services: ServiceProps[]
}

const ServiceList = ({ services }: ServiceListProps) => {
  return (
    <>
      {services.map((service) => (
        <Service key={service.id} service={service} />
      ))}
    </>
  )
}

export default ServiceList
