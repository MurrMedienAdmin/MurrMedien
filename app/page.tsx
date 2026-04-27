import { getProjects, getServices } from "@/lib/dataprovider"
import ProjectList from "@/components/projects/ProjectList"
import Section from "@/components/layout/Section"
import ServiceAccordion from "@/components/services/ServiceAccordion"

export default async function Home() {
  const projects = await getProjects()
  const services = await getServices()

  return (
    <main>
      <ProjectList projects={projects} />

      <div className="px-6 md:px-12 lg:px-20 pt-16 pb-24">
        <Section
          heading="Was wir machen"
          description="Wir begleiten euch von der ersten Idee bis zur fertigen Umsetzung. Ob Website, Corporate Identity, Foto und Video oder gedruckte Materialien: Wir hören zu, denken mit und finden heraus, was euer Auftritt wirklich braucht."
        >
          <ServiceAccordion services={services} />
        </Section>
      </div>
    </main>
  )
}
