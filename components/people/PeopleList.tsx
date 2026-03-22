import { PersonProps } from "@/types/types"
import Person from "./Person"

type PeopleListProps = {
  people: PersonProps[]
}

const PeopleList = ({ people }: PeopleListProps) => {
  return (
    <>
      {people.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </>
  )
}

export default PeopleList
