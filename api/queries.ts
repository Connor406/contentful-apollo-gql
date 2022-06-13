import { gql } from '@apollo/client';
import { client } from '@/services';
import {
  AuthorFragment,
  ImageCarouselFragment,
  PostFragment,
  TwoColumnPostFragment,
  CTAFragment,
} from './fragments';

export async function fetchTemplatePageData(templateSlug) {
  try {
    const { loading, error, data } = await client.query({
      query: gql`
        ${AuthorFragment}
        ${ImageCarouselFragment}
        ${PostFragment}
        ${TwoColumnPostFragment}
        ${CTAFragment}
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
                    ...AuthorFmt
                  }
                  ... on ImageCarousel {
                    ...ImageCarouselFmt
                  }
                  ... on Post {
                    ...PostFmt
                  }
                  ... on TwoColumnPost {
                    ...TwoColumnPostFmt
                  }
                  ... on Cta {
                    ...CtaFmt
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
