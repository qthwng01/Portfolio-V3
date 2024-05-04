import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Sanity Portfolio v3',

  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECTID}`,
  dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
