import { siteInfo } from "@/settings"
import { createClient } from "next-sanity"

const ClientConfig =  {
  projectId: siteInfo.sanityProjectId,
  dataset: siteInfo.sanityDataset,
  apiVersion: siteInfo.version,
  useCdn: true,
}

const Client = createClient(ClientConfig)

const ClientComment = createClient({
  ...ClientConfig,
  useCdn: false,
  token: process.env.SANITY_COMMENT_API_TOKEN,
})

export {ClientConfig, Client, ClientComment}