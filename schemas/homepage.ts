// schemas/pet.js
export default {
    name: 'homepage',
    type: 'document',
    title: 'Homepage',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'subtitle',
        type: 'string',
        title: 'Conditions title'
      },
      {
        title: 'Conditions',
        name: 'conditions',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        title: 'Image',
        name: 'image',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        }
      }
    ]
  }