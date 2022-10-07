import { Formations } from "../typings"
import { NEXT_URL } from "../NEXT_URL"

export const fetchFormations = async () => {
  const res = await fetch(`${NEXT_URL}/api/getFormations`)

  const data = await res.json()
  const formations: Formations[] = data.formations

  return formations
}
