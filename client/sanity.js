// import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import sanityClient, { createClient } from "@sanity/client"
// import { ImageUrlBuilder } from "@sanity/image-url";

const client = createClient({
    projectId: 'nyv2u0wa',
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
    //apiVersion: "2022-02-01",
    // token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
