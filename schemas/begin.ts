// schemas/pet.js
export default {
    name: 'formpage',
    type: 'document',
    title: 'Form Page',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        title: 'Left Side Text',
        name: 'left',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        title: 'Right Title',
        name: 'rightTitle',
        type: 'string'
      },
      {
        title: 'Right Bottom Text',
        name: 'rightBottom',
        type: 'text'
      },
      {
        title: 'Background Image',
        name: 'backgroundImage',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        }
      }
    ]
  }