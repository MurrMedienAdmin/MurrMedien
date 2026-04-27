import { PersonProps } from "@/types/types"
import Person from "./Person"

type PeopleListProps = {
  people: PersonProps[]
  variant?: "team" | "contact"
}

const PeopleList = ({ people, variant = "team" }: PeopleListProps) => {
  return (
    <>
      {people.map((person) => (
        <Person key={person.id} person={person} variant={variant} />
      ))}
    </>
  )
}

export default PeopleList
