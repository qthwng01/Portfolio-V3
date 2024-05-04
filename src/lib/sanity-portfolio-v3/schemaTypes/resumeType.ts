import {defineField, defineType} from 'sanity'

export const resumeType = defineType({
  name: 'resume',
  title: 'Upload Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'file',
      title: 'Upload File',
      type: 'file',
      validation: (rule) => rule.error(`Failed to upload file`),
    }),
    defineField({
      name: 'date',
      title: 'Date Time',
      type: 'datetime',
    }),
  ],
})
