import { Social } from "../typings"
import { NEXT_URL } from "../NEXT_URL"

export const fetchSocial = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocial`)

  const data = await res.json()
  const social: Social[] = data.social

  return social
}
