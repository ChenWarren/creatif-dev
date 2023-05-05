import { siteInfo } from "@/settings"

const ClientConfig =  {
  projectId: siteInfo.sanityProjectId,
  dataset: siteInfo.sanityDataset,
  apiVersion: siteInfo.version,
  useCdn: true,
  token: process.env.SANITY_COMMENT_API_TOKEN,
}

export default ClientConfig