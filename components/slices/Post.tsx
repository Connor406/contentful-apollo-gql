import { IPostFields } from '@/api/types/contentful';
import styles from '@/styles/components/slices/Post.module.scss';
import RichText from '../RichText';

export default function Post({
  author,
  content,
  coverImage,
  excerpt,
  slug,
  title,
}: IPostFields) {
  return (
    <div id={styles.post}>
      <h1>{title}</h1>
      <img src={coverImage.url} />
      <RichText>{content.json}</RichText>
      <div className={styles.author}>
        <img
          src={author.picture.url}
          alt={author.picture.description || 'author'}
        />
        <h5>By {author.name}</h5>
      </div>
    </div>
  );
}
