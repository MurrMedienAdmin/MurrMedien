import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ServiceProps } from "@/types/types"

type ServiceProps2 = {
  service: ServiceProps
}

const Service = ({ service }: ServiceProps2) => {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>{service.title}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

export default Service
