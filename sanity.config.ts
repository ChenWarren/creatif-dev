import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { codeInput } from "@sanity/code-input"
import schemas from "./sanity/schemas"
import { siteInfo } from "./settings"
const config = defineConfig({
  title: siteInfo.title,
  projectId: siteInfo.sanityProjectId,
  dataset: siteInfo.sanityDataset,
  apiVersion: siteInfo.version,
  basePath: siteInfo.sanityBasePath,
  plugins: [deskTool(), codeInput()],
  schema: { types: schemas}
})

export default config