import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import schemas from "./sanity/schemas"
import siteInfo from "./settings/site-confit"

const config = defineConfig({
  title: siteInfo.title,
  projectId: siteInfo.sanityProjectId,
  dataset: siteInfo.sanityDataset,
  apiVersion: siteInfo.version,
  basePath: siteInfo.sanityBasePath,
  plugins: [deskTool()],
  schema: { types: schemas}
})

export default config