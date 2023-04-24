import { Project } from "@/types/project"
import ClientConfig from "../config/client"
import { createClient, groq } from "next-sanity"


export async function getProjects(): Promise<Project[]> {
  return createClient(ClientConfig).fetch(
    groq `*[_type == "project" ] {
      _id,
      _createAt,
      name,
      featured,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      excerpt,
      content
    }`
  )
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(ClientConfig).fetch(
    groq `*[_type == "project" && slug.current == $slug ][0] {
      _id,
      _createAt,
      name,
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