import {createClient} from 'next-sanity'

export const sanityClient = createClient({
  projectId: 'kxox73ep',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export const fetchProjects = async () => {
  const query = `*[_type == "projects"] {
    _id,
    name,
    link,
    github,
    "description": description[0].children[0].text,
    tech,
    "imageURL": image.asset->url,
  }`
  try {
    const data = await sanityClient.fetch(query)
    return data
  } catch (e) {
    console.log(e)
  }
}

export const fetchResume = async () => {
  const query = `*[_type == "resume"] {
    _id,
    "file": file.asset->url
  }`
  try {
    const data = await sanityClient.fetch(query)
    return data
  } catch (e) {
    console.log(e)
  }
}

export const fetchSocial = async () => {
  const query = `*[_type == "social"] {
      email,
      linkedin,
      github,
      zalo
  }`
  try {
    const data = await sanityClient.fetch(query)
    return data
  } catch (e) {
    console.log(e)
  }
}
