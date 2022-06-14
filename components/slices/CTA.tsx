import { ICtaFields } from '@/api/types/contentful';
import styles from '@/styles/components/slices/CTA.module.scss';

export default function CTA({
  contentfulMetadata: { tags },
  link,
  title,
}: ICtaFields & { contentfulMetadata: any }) {
  const isDarkMode = tags.length ? tags[0].name === 'Color Mode: dark' : false;

  return (
    <a id={styles.CTA} href={link}>
      <span className={isDarkMode ? styles.dark : styles.light}>{title}</span>
    </a>
  );
}
