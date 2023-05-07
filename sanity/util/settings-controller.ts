import { Setting } from "@/types";
import {ClientConfig} from "../config/client"
import { createClient, groq } from "next-sanity"

export async function getSettings(): Promise<Setting[]> {
  return createClient(ClientConfig).fetch(
    groq `*[_type == "settings"] {
      _id,
      name,
      description,
      value,
    }`)
}

export async function getSetting(slug: string): Promise<Setting> {
  return createClient(ClientConfig).fetch(
    groq `*[_type == "settings" && slug.current == $slug][0] {
      _id,
      name,
      description,
      value,
    }`,
    {slug}
  )
}