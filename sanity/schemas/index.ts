import project from "./project-schema"
import blog from "./blog-schema"
import { postCategory, projectCategory } from "./category"
import author from "./author"


const schemas = [
  author,
  project,
  blog,
  postCategory,
  projectCategory
]

export default schemas