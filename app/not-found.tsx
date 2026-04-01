import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function NotFound() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      <section className="flex flex-col items-center justify-center text-center min-h-[60vh] space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          Seite nicht gefunden
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground max-w-sm">
          Diese Seite existiert nicht oder wurde verschoben. Aber keine Sorge, wir haben viele
          andere tolle Inhalte für dich!
        </p>
        <Button asChild size="lg">
          <Link href="/">Zur Startseite</Link>
        </Button>
      </section>
    </main>
  )
}
