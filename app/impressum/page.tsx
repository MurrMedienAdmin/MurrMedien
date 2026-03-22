import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Impressum – Murr Medien",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ImpressumPage() {
  return (
    <main className="container max-w-3xl mx-auto px-6 py-20">
      <div className="space-y-2 mb-10">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Rechtliches</p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Impressum</h1>
      </div>

      <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
        <section className="space-y-3">
          <h2 className="text-xs uppercase tracking-wider text-foreground">
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            Murr Medien GbR
            <br />
            Amselweg 5<br />
            71570 Oppenweiler
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs uppercase tracking-wider text-foreground">Gesellschafter</h2>
          <p>
            Luca Krämer
            <br />
            Moritz Stoppel
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs uppercase tracking-wider text-foreground">Kontakt</h2>
          <p>
            E-Mail:{" "}
            <a href="mailto:info@murrmedien.de" className="text-foreground hover:underline">
              info@murrmedien.de
            </a>
            <br />
            Telefon:{" "}
            <a href="tel:+4915566152739" className="text-foreground hover:underline">
              +49 155 66152739
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs uppercase tracking-wider text-foreground">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            51061/47053
          </p>
        </section>

        <Separator />

        <section className="space-y-3">
          <h2 className="text-xs uppercase tracking-wider text-foreground">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>
            Luca Krämer &amp; Moritz Stoppel
            <br />
            Amselweg 5, 71570 Oppenweiler
          </p>
        </section>

        <Separator />

        <section className="space-y-3">
          <h2 className="text-xs uppercase tracking-wider text-foreground">Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich.
          </p>
          <p>
            Für externe Links zu fremden Websites übernehmen wir trotz sorgfältiger Prüfung keine
            Haftung. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
            verantwortlich.
          </p>
        </section>
      </div>
    </main>
  )
}
