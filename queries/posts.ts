import { gql } from '@apollo/client';
import { client } from '@/services';

export async function fetchPostsByAuthor(authorName) {
  try {
    const { loading, error, data } = await client.query({
      query: gql`
        query Test($authorName: String) {
          postCollection(where: { author: { name: $authorName } }) {
            items {
              title
              slug
              content {
                json
              }
            }
          }
        }
      `,
      variables: { authorName },
    });
    return { loading, error, data };
  } catch (error) {
    console.log(error);
  }
}
