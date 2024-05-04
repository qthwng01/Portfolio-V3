import {defineField, defineType} from 'sanity'

export const socialType = defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'All Socials',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'Linkedin',
      type: 'url',
    }),
    defineField({
      name: 'github',
      title: 'Github',
      type: 'url',
    }),
    defineField({
      name: 'zalo',
      title: 'Zalo',
      type: 'string',
    }),
  ],
})
