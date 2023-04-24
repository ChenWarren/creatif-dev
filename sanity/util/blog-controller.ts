import { Blog } from "@/types/blog"
import ClientConfig from "../config/client"
import { createClient, groq } from "next-sanity"


export async function getBlogs(): Promise<Blog[]> {
  return createClient(ClientConfig).fetch(
    groq `*[_type == "blog" ] {
      _id,
      _createAt,
      title,
      featured,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      excerpt,
      content
    }`
  )
}

export async function getBlog(slug: string): Promise<Blog> {
  return createClient(ClientConfig).fetch(
    groq `*[_type == "blog" && slug.current == $slug ][0] {
      _id,
      _createAt,
      title,
      featured,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      excerpt,
      content
    }`,
    {slug}
  )
}