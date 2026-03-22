import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { PersonProps } from "@/types/types"
import Link from "next/link"

type PersonComponentProps = {
  person: PersonProps
}

const Person = ({ person }: PersonComponentProps) => {
  return (
    <Card className="group overflow-hidden pt-0">
      {/* Bild */}
      <div className="overflow-hidden aspect-[3/4]">
        <img
          src={person.img}
          alt={`${person.firstName} ${person.lastName}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Name + Rolle */}
      <CardHeader className="pb-2">
        <CardTitle>
          {person.firstName} {person.lastName}
        </CardTitle>
        <CardDescription>{person.role}</CardDescription>
      </CardHeader>

      {/* Kontakt */}
      <CardContent className="text-sm space-y-1">
        <Link
          href={`mailto:${person.email}`}
          className="block text-muted-foreground hover:text-foreground transition"
        >
          {person.email}
        </Link>
        <Link
          href={`tel:${person.phoneNumber.replace(/\s/g, "")}`}
          className="block text-muted-foreground hover:text-foreground transition"
        >
          {person.phoneNumber}
        </Link>
        <Link
          href={person.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition"
        >
          LinkedIn →
        </Link>
      </CardContent>
    </Card>
  )
}

export default Person
