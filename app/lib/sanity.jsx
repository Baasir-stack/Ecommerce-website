import { createClient } from "next-sanity";
import ImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: '1zsuinw1',
    dataset: 'production',
    apiVersion: '2024-01-24',
    useCdn: true,
});

const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source) {
    return imgBuilder.image(source);
}