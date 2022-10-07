import { Personal } from "../typings"

export const fetchPersonal = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPersonal`)

  const data = await res.json()
  const personal: Personal[] = data.personal

  return personal
}
