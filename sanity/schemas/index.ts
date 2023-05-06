import project from "./project-schema"
import blog from "./blog-schema"
import comment from "./comment"
import { postCategory, projectCategory } from "./category"
import author from "./author"
import menuItem from "./menuItem"
import menuList from "./menuList"
import settings from "./settings"


const schemas = [
  author,
  project,
  blog,
  comment,
  postCategory,
  projectCategory,
  menuItem,
  menuList,
  settings,
]

export default schemas