import project from "./project-schema"
import blog from "./blog-schema"
import comment from "./comment"
import { postCategory, projectCategory } from "./category"
import author from "./author"
import menuItem from "./menuItem"
import menuList from "./menuList"

const schemas = [
  author,
  project,
  blog,
  comment,
  postCategory,
  projectCategory,
  menuItem,
  menuList,
]

export default schemas