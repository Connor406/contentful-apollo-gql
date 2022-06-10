import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p>{children}</p>;
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a href={node.data.uri} target="_blank">
          {children}
        </a>
      );
    },
  },
};

export default function RichText({ children }) {
  return <div>{documentToReactComponents(children, RICHTEXT_OPTIONS)}</div>;
}
