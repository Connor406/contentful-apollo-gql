import { ImageCarousel, Post, TwoColumnPost, CTA } from './slices';

interface SliceRouterProps {
  slices: any[];
}

/**
 * Welcome to the SliceRouter!
 *
 * To add a new slice component =>
 * - add a row in the ComponentMap, with the key matching `__typename` and the value being the component
 */

export default function SliceRouter({ slices }: SliceRouterProps) {
  return (
    <section>
      {slices.map((slice) => {
        const {
          __typename: type,
          sys: { id },
        } = slice;
        const ComponentMap = {
          ImageCarousel: <ImageCarousel key={id} {...slice} />,
          TwoColumnPost: <TwoColumnPost key={id} {...slice} />,
          Post: <Post key={id} {...slice} />,
          Cta: <CTA key={id} {...slice} />,
        };
        return ComponentMap[type] || null;
      })}
    </section>
  );
}
