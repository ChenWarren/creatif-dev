import { PortableTextBlock } from "sanity"
import { Category } from "./category"

export type Project = {
  _id: string,
  _createAt: Date,
  name: string,
  featured: boolean,
  categories: Category[],
  slug: string,
  image: string,
  links: link[],
  excerpt: string,
  content: PortableTextBlock[]
}

export type link = {
  _id: string,
  linkText: string,
  linkUrl: string,
}