const settings = {
  name: 'settings',
  type: 'document',
  title: 'Settings',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'value',
      title: 'Value',
      type: 'boolean',
      initialValue: false,
    }

  ]
}

export default settings
