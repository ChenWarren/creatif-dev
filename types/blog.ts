import { PortableTextBlock } from "sanity"
import { Author } from "./author"


export type Blog = {
  _id: string,
  _createAt: Date,
  title: string,
  author: Author,
  featured: boolean,
  slug: string,
  image: string,
  url: string,
  excerpt: string,
  content: PortableTextBlock[]
}