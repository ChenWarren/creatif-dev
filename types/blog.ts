import { PortableTextBlock } from "sanity"

export type blog = {
  _id: string,
  _createAt: Date,
  name: string,
  slug: string,
  image: string,
  url: string,
  content: PortableTextBlock[]
}