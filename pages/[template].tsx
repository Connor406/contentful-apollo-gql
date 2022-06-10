import { SliceRouter } from '@/components';
import { fetchAllTemplatePages, fetchTemplatePageData } from '@/api';

export default function Template({
  sliceCollection: { items: slices },
  slug,
  title,
  // sys: { id },
  // __typename,
}) {
  return (
    <main className="wrapper">
      <div>{title}</div>
      <SliceRouter slices={slices} />
    </main>
  );
}

export async function getStaticProps({ params }) {
  const { data, error } = (await fetchTemplatePageData(params.template)) || {};

  if (error) console.error(error);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...data.templatePageCollection.items[0],
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { data, error } = await fetchAllTemplatePages();
  if (error) console.error(error);
  const paths = data.templatePageCollection.items.map(({ slug }) => {
    return {
      params: {
        template: slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
