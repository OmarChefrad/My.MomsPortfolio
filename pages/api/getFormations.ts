import type { NextApiRequest, NextApiResponse } from "next"
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"
import { Formations } from "../../typings"

const query = groq`
  *[_type == "formations"]{
  ...,
}
`
type Data = {
  formations: Formations[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const formations: Formations[] = await sanityClient.fetch(query)

  res.status(200).json({ formations })
}
