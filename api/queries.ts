import { gql } from '@apollo/client';
import { client } from '@/services';

export async function fetchTemplatePageData(templateSlug) {
  try {
    const { loading, error, data } = await client.query({
      query: gql`
        query templatePageEntryQuery($slug: String!) {
          templatePageCollection(where: { slug: $slug }, limit: 1) {
            items {
              title
              slug
              sys {
                id
              }
              sliceCollection {
                items {
                  ... on Author {
                    __typename
                    sys {
                      id
                    }
                    name
                    picture {
                      url
                    }
                  }
                  ... on ImageCarousel {
                    __typename
                    sys {
                      id
                    }
                    title
                    imageCollection {
                      items {
                        url
                        title
                        description
                      }
                    }
                  }
                  ... on Post {
                    __typename
                    sys {
                      id
                    }
                    title
                    slug
                    coverImage {
                      url
                    }
                    excerpt
                    content {
                      json
                    }
                    author {
                      name
                      picture {
                        url
                        description
                      }
                    }
                  }
                  ... on TwoColumnPost {
                    __typename
                    sys {
                      id
                    }
                    title
                    image {
                      url
                      description
                    }
                    leftColumn {
                      json
                    }
                    rightColumn {
                      json
                    }
                    author {
                      name
                      picture {
                        url
                        description
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
      variables: { slug: templateSlug },
    });
    return { loading, error, data };
  } catch (error) {
    console.log(error);
  }
}

export async function fetchAllTemplatePages() {
  try {
    const { loading, error, data } = await client.query({
      query: gql`
        query {
          templatePageCollection {
            items {
              sys {
                id
              }
              title
              slug
            }
          }
        }
      `,
    });
    return { loading, error, data };
  } catch (error) {
    console.log(error);
  }
}

export async function fetchNavBarData(id = '1oINl6LYDIQ5aDSLR3MXpl') {
  try {
    return await client.query({
      query: gql`
        query NavQuery($id: String!) {
          navBar(id: $id) {
            sys {
              id
            }
            title
            navLinksCollection {
              items {
                linkName
                linkUrl
              }
            }
          }
        }
      `,
      variables: { id },
    });
  } catch (error) {
    console.error(error);
  }
}
