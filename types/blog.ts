import { PortableTextBlock } from "sanity"

export type Blog = {
  _id: string,
  _createAt: Date,
  title: string,
  author: string,
  featured: boolean,
  slug: string,
  image: string,
  url: string,
  excerpt: string,
  content: PortableTextBlock[]
}