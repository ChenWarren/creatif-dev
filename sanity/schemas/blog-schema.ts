const blog = {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title"
      }
    },
    {
      name: "image",
      title: "Image",
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
      name: "author",
      title: "Author",
      type: "reference",
      to: [
        {
          type: "author"
        }
      ]
    },
    {
      name: "url",
      title: "URL",
      type: "url"
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [
        {
          type: "post-category"
        }
      ]
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text"
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image'
        },
        {
          type: "code"
        }
      ]
    }
  ]
}

export default blog