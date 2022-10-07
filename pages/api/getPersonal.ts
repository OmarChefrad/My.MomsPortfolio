import type { NextApiRequest, NextApiResponse } from "next"
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"
import { Personal } from "../../typings"

const query = groq`
  *[_type == "personal"]{
  ...,
}
`
type Data = {
  personal: Personal[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const personal: Personal[] = await sanityClient.fetch(query)

  res.status(200).json({ personal })
}
