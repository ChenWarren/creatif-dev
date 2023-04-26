const author = {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: "profile_image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true
      },
      fields:[
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ]
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text'
    }
  ]
}

export default author