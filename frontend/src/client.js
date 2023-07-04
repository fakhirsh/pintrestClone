import sanityClient, { createClient } from '@sanity/client'
import imageURLBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-07-04',
    token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageURLBuilder(client)

export const urlFor = (source) => {
    return builder.image(source)
}
