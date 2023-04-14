import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
// import schemas from "./sanity/schemas"

const config = defineConfig({
  title: 'Creatif Dev',
  projectId: 'iig2glgh',
  dataset: 'production',
  apiVersion: '1.0',
  basePath: '/admin',
  plugins: [deskTool()],
  // schema: { types: schemas}
})

export default config