import { PortableTextBlock } from "sanity"

export type Project = {
  _id: string,
  _createAt: Date,
  name: string,
  slug: string,
  image: string,
  url: string,
  excerpt: string,
  content: PortableTextBlock[]
}