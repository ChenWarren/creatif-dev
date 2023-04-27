import { siteInfo } from "@/settings"

const ClientConfig =  {
  projectId: siteInfo.sanityProjectId,
  dataset: siteInfo.sanityDataset,
  apiVersion: siteInfo.version,
  useCdn: true
}

export default ClientConfig