import { gql } from '@apollo/client';

export const AuthorFragment = gql`
  fragment AuthorFragment on Author {
    __typename
    sys {
      id
    }
    name
    picture {
      url
    }
  }
`;

export const ImageCarouselFragment = gql`
  fragment ImageCarouselFragment on ImageCarousel {
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
`;

export const PostFragment = gql`
  fragment PostFragment on Post {
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
`;

export const TwoColumnPostFragment = gql`
  fragment TwoColumnPostFragment on TwoColumnPost {
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
`;

export const CTAFragment = gql`
  fragment CTAFragment on Cta {
    __typename
    sys {
      id
    }
    title
    link
    contentfulMetadata {
      tags {
        name
      }
    }
  }
`;
