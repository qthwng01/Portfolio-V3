import {defineField, defineType} from 'sanity'

export const projectsType = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name Project',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link Project',
      type: 'url',
    }),
    defineField({
      name: 'github',
      title: 'GitHub Project',
      type: 'url',
    }),
    defineField({
      name: 'description',
      title: 'Description Project',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Image Project',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tech',
      title: 'Teck Stack Project',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
