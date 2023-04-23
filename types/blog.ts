import { PortableTextBlock } from "sanity"

export type Blog = {
  _id: string,
  _createAt: Date,
  title: string,
  slug: string,
  image: string,
  url: string,
  excerpt: string,
  content: PortableTextBlock[]
}