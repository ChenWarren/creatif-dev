
export type MenuList = {
  _id: string,
  name: string,
  slug: string,
  menuItems: MenuItem[]
}

export type MenuItem = {
  _id: string,
  name: string,
  link: string
}