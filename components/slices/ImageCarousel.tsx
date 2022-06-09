import styles from '@/styles/components/slices/ImageCarousel.module.scss';

export default function ImageCarousel(props) {
  console.log(props);
  const { title, imageCollection } = props as any;

  return (
    <div>
      <h1>{title}</h1>
      {props && (
        <div className={styles.images}>
          {imageCollection?.items?.map((image) => (
            <img src={image.url} alt={image.title} key={image.url} />
          ))}
        </div>
      )}
    </div>
  );
}
