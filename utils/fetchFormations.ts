import { Formations } from "../typings"

export const fetchFormations = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getFormations`
  )

  const data = await res.json()
  const formations: Formations[] = data.formations

  return formations
}
