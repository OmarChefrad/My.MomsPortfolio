import { Experiences } from "../typings"
import { NEXT_URL } from "../NEXT_URL"

export const fetchExperiences = async () => {
  const res = await fetch(`${NEXT_URL}/api/getExperiences`)

  const data = await res.json()

  const experiences: Experiences[] = data.experiences
  return experiences
}
