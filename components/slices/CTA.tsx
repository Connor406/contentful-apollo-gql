import styles from '@/styles/components/slices/CTA.module.scss';

export default function CTA(props) {
  const {
    contentfulMetadata: { tags },
    link,
    title,
  } = props;

  const isDarkMode = tags.length ? tags[0].name === 'Color Mode: dark' : false;

  return (
    <a id={styles.CTA} href={link}>
      <span className={isDarkMode ? styles.dark : styles.light}>{title}</span>
    </a>
  );
}
