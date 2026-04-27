import { PersonProps } from "@/types/types"
import Link from "next/link"

type PersonComponentProps = {
  person: PersonProps
  variant?: "team" | "contact"
}

const Person = ({ person, variant = "team" }: PersonComponentProps) => {
  return (
    <div className="group">
      {/* Foto */}
      <div className="overflow-hidden rounded-xl aspect-[3/4] mb-4">
        <img
          src={person.img}
          alt={`${person.firstName} ${person.lastName}`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Name + Rolle */}
      <p className="font-black uppercase text-base leading-tight">
        {person.firstName} {person.lastName}
      </p>
      <p className="text-sm text-muted-foreground mt-1">{person.role}</p>

      {/* Kontakt – nur im contact-variant */}
      {variant === "contact" && (
        <div className="mt-3 text-sm space-y-1">
          {person.email && (
            <Link
              href={`mailto:${person.email}`}
              className="block text-muted-foreground hover:text-foreground transition"
            >
              {person.email}
            </Link>
          )}
          {person.phoneNumber && (
            <Link
              href={`tel:${person.phoneNumber.replace(/\s/g, "")}`}
              className="block text-muted-foreground hover:text-foreground transition"
            >
              {person.phoneNumber}
            </Link>
          )}
          {person.linkedIn && (
            <Link
              href={person.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-muted-foreground hover:text-foreground transition"
            >
              LinkedIn →
            </Link>
          )}
        </div>
      )}
    </div>
  )
}

export default Person
