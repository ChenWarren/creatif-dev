import { Setting } from "@/types";
import { Client } from "../config/client";
import { groq } from "next-sanity"

export async function getSettings(): Promise<Setting[]> {
  return Client.fetch(
    groq `*[_type == "settings"] {
      _id,
      name,
      description,
      value,
    }`)
}

export async function getSetting(slug: string): Promise<Setting> {
  return Client.fetch(
    groq `*[_type == "settings" && slug.current == $slug][0] {
      _id,
      name,
      description,
      value,
    }`,
    {slug}
  )
}