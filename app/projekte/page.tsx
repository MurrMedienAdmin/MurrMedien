import ProjectList from "@/components/projects/ProjectList"
import { getProjects } from "@/lib/dataprovider"
import PageHeading from "@/components/layout/PageHeading"

export const metadata = {
  title: "Projekte",
  description:
    "Referenzen von Murr Medien: Websites, Corporate Designs, Fotos und Videos für Unternehmen und Vereine im Rems-Murr-Kreis und Umgebung.",
  alternates: { canonical: "https://murrmedien.de/projekte" },
  openGraph: {
    url: "https://murrmedien.de/projekte",
    title: "Projekte | Murr Medien",
    description:
      "Referenzen von Murr Medien: Websites, Corporate Designs, Fotos und Videos für Unternehmen und Vereine im Rems-Murr-Kreis.",
  },
}

export default async function Projekte() {
  const projects = await getProjects()

  return (
    <main>
      <PageHeading>Projekte</PageHeading>
      <ProjectList projects={projects} />
    </main>
  )
}
