import siteInfo from "@/settings/site-confit"


const ClientConfig =  {
  projectId: siteInfo.sanityProjectId,
  dataset: siteInfo.sanityDataset,
  apiVersion: siteInfo.version,
}

export default ClientConfig