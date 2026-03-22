import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Datenschutz – Murr Medien",
  robots: {
    index: false,
    follow: false,
  },
}

export default function DatenschutzPage() {
  return (
    <main className="container max-w-3xl mx-auto px-6 py-20">
      <div className="space-y-2 mb-10">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Rechtliches</p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Datenschutzerklärung</h1>
      </div>

      <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
        {/* Verantwortlicher */}
        <section className="space-y-3">
          <h2 className="text-xs uppercase tracking-wider text-foreground">Verantwortlicher</h2>
          <p>
            Murr Medien GbR
            <br />
            Amselweg 5, 71570 Oppenweiler
            <br />
            <a href="mailto:info@murrmedien.de" className="text-foreground hover:underline">
              info@murrmedien.de
            </a>
          </p>
        </section>

        <Separator />

        {/* Hosting & Log‑Daten */}
        <section className="space-y-3">
          <h2 className="text-xs uppercase tracking-wider text-foreground">
            Hosting und technische Datenverarbeitung
          </h2>
          <p>
            Diese Website wird über den Hosting‑Anbieter{" "}
            <strong className="text-foreground font-normal">Netlify, Inc.</strong> (2325 3rd Street,
            Suite 296, San Francisco, CA 94107, USA) bereitgestellt, um den technischen Betrieb und
            die Auslieferung der Inhalte sicherzustellen.
          </p>
          <p>
            Beim Besuch unserer Website werden automatisch technische Verbindungsdaten erfasst, die
            Ihr Browser an uns bzw. an Netlify übermittelt. Dazu gehören:
          </p>
          <ul className="list-disc pl-5">
            <li>IP‑Adresse</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Browsertyp und Browserversion</li>
            <li>Referrer‑URL (vorher besuchte Seite)</li>
            <li>Betriebssystem</li>
            <li>abgerufene Datei/Seite</li>
          </ul>
          <p>
            Diese Daten werden in sogenannten Server‑Logfiles gespeichert und dienen der technischen
            Bereitstellung, Sicherheit, Fehleranalyse und Stabilität der Website. Die Verarbeitung
            erfolgt auf Grundlage unseres berechtigten Interesses an einem sicheren und fehlerfreien
            Betrieb gemäß Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen zur Datenverarbeitung
            durch Netlify finden Sie in der{" "}
            <a
              href="https://www.netlify.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              Datenschutzerklärung von Netlify
            </a>
            .
          </p>
        </section>

        <Separator />

        {/* Kontaktformular & E‑Mail */}
        <section className="space-y-3">
          <h2 className="text-xs uppercase tracking-wider text-foreground">
            Kontaktformular &amp; E‑Mail
          </h2>
          <p>
            Wenn du uns über das Kontaktformular oder per E‑Mail kontaktierst, werden die von dir
            angegebenen Daten (z. B. Name, E‑Mail‑Adresse, Nachricht) ausschließlich zur Bearbeitung
            deiner Anfrage gespeichert und verwendet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
            (Vertrags‑ bzw. Anbahnungszwecke). Die Daten werden nicht an Dritte weitergegeben und
            nach abschließender Bearbeitung gelöscht, sofern keine gesetzlichen
            Aufbewahrungspflichten bestehen.
          </p>
        </section>

        <Separator />

        {/* Cookies & Tracking */}
        <section className="space-y-3">
          <h2 className="text-xs uppercase tracking-wider text-foreground">
            Cookies &amp; Tracking
          </h2>
          <p>
            Diese Website verwendet keine Cookies und setzt keine Analyse‑ bzw. Tracking‑Tools ein.
            Es findet keine Nutzung personenbezogener Daten zu Werbezwecken oder zur
            Profilerstellung statt.
          </p>
        </section>

        <Separator />

        {/* Deine Rechte */}
        <section className="space-y-3">
          <h2 className="text-xs uppercase tracking-wider text-foreground">Deine Rechte</h2>
          <p>
            Dir stehen gegenüber uns folgende Rechte bezüglich deiner personenbezogenen Daten zu:
          </p>
          <p>
            Auskunft (Art. 15 DSGVO) · Berichtigung (Art. 16 DSGVO) · Löschung (Art. 17 DSGVO) ·
            Einschränkung der Verarbeitung (Art. 18 DSGVO) · Daten‑ übertragbarkeit (Art. 20 DSGVO)
            · Widerspruch (Art. 21 DSGVO)
          </p>
          <p>
            Zur Ausübung dieser Rechte wende dich an:{" "}
            <a href="mailto:info@murrmedien.de" className="text-foreground hover:underline">
              info@murrmedien.de
            </a>
          </p>
        </section>

        <Separator />

        {/* Beschwerderecht */}
        <section className="space-y-3">
          <h2 className="text-xs uppercase tracking-wider text-foreground">Beschwerderecht</h2>
          <p>
            Du hast das Recht, dich bei einer Datenschutz‑Aufsichtsbehörde über die Verarbeitung
            deiner personenbezogenen Daten durch uns zu beschweren. Zuständig ist der
            Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden‑Württemberg.
          </p>
        </section>
      </div>
    </main>
  )
}
