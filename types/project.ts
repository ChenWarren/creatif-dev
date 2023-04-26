import { PortableTextBlock } from "sanity"
import { Category } from "./category"

export type Project = {
  _id: string,
  _createAt: Date,
  name: string,
  featured: boolean,
  category: Category,
  slug: string,
  image: string,
  url: string,
  excerpt: string,
  content: PortableTextBlock[]
}