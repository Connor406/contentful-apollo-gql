import styles from '@/styles/components/slices/TwoColumnPost.module.scss';
import classNames from 'classnames';
import RichText from '../RichText';

export default function TwoColumnPost({
  title,
  author,
  image,
  leftColumn,
  rightColumn,
  // sys: { id }, // <==== probably not needed in most cases
}) {
  return (
    <div id={styles.twoColumnPost}>
      <h1>{title}</h1>
      <section className={styles.columns}>
        <div className={classNames(styles.column, styles.left)}>
          <RichText>{leftColumn.json}</RichText>
        </div>
        <div className={classNames(styles.column, styles.right)}>
          <RichText>{rightColumn.json}</RichText>
        </div>
      </section>
    </div>
  );
}
