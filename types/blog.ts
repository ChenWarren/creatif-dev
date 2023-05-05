import { PortableTextBlock } from "sanity"
import { Author } from "./author"
import { Category } from "./category"
import { Comment } from "./comment"

export type Blog = {
  _id: string,
  _createAt: Date,
  title: string,
  author: Author,
  publishedAt: Date,
  featured: boolean,
  categories: Category,
  slug: string,
  image: string,
  url: string,
  excerpt: string,
  content: PortableTextBlock[]
  comments: Comment[]
}