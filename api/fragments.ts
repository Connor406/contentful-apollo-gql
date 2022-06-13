import { gql } from '@apollo/client';

export const AuthorFragment = gql`
  fragment AuthorFmt on Author {
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
  fragment ImageCarouselFmt on ImageCarousel {
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
  fragment PostFmt on Post {
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
  fragment TwoColumnPostFmt on TwoColumnPost {
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
  fragment CtaFmt on Cta {
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
