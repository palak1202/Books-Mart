import sanityClient from '@sanity/client';
import imgUrlBuilder from '@sanity/image-url';

export const client=sanityClient({
    projectId: '3drvi8fd',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder=imgUrlBuilder(client);
export const urlFor=(source)=>builder.image(source);