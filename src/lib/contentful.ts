import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export async function getPageData(slug: string) {
  const response = await client.getEntries({
    content_type: 'page',
    'fields.slug': slug,
  });

  return response.items.length > 0 ? response.items[0] : null;
}