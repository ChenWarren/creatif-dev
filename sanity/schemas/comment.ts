const comment = {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      readonly: true
    },
    {
      name: 'commentText',
      title: 'Comment Text',
      type: 'text',
      readonly: true
    },
    {
      name: 'post',
      type: 'reference',
      to: [
        { 
          type: 'blog' 
        }
      ]
    }
  ]
}

export default comment