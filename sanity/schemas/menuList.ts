const menuList = {
  name: 'menuList',
  title: 'Menu List',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name"
      }
    },
    {
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'menuItem'
          }
        }
      ]
    }
  ]
}

export default menuList