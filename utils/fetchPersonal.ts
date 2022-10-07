import { Personal } from "../typings"
import { NEXT_URL } from "../NEXT_URL"

export const fetchPersonal = async () => {
  const res = await fetch(`${NEXT_URL}/api/getPersonal`)

  const data = await res.json()
  const personal: Personal[] = data.personal

  return personal
}
