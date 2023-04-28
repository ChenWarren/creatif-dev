import project from "./project-schema"
import blog from "./blog-schema"
import { postCategory, projectCategory } from "./category"
import author from "./author"
import menuItem from "./menuItem"
import menuList from "./menuList"

const schemas = [
  author,
  project,
  blog,
  postCategory,
  projectCategory,
  menuItem,
  menuList,
]

export default schemas