import createClient from "@sanity/client"
import createImageUrlBuilder from "@sanity/image-url"

export const config = {
  dataset: "production",
  projectId: "orfz0g6x",
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
}

export const sanityClient = createClient(config)

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source)
