import { Project } from "@/types"
import { Client } from "../config/client"
import { groq } from "next-sanity"


export async function getProjects(): Promise<Project[]> {
  return Client.fetch(
    groq `*[_type == "project" ] {
      _id,
      _updatedAt,
      name,
      featured,
      "categories": categories[]->name,
      "slug": slug.current,
      "image": image.asset->url,
      excerpt,
    }`
  )
}

export async function getProject(slug: string): Promise<Project> {
  return Client.fetch(
    groq `*[_type == "project" && slug.current == $slug ][0] {
      _id,
      _updatedAt,
      name,
      featured,
      "categories": categories[]->name,
      "slug": slug.current,
      "image": image.asset->url,
      links,
      excerpt,
      content
    }`,
    {slug}
  )
}