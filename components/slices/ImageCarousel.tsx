import { IImageCarouselFields } from '@/api/types/contentful';
import styles from '@/styles/components/slices/ImageCarousel.module.scss';

export default function ImageCarousel({
  title,
  imageCollection,
}: IImageCarouselFields) {
  return (
    <div>
      <h1>{title}</h1>
      <div className={styles.images}>
        {imageCollection?.items?.map((image) => (
          <img src={image.url} alt={image.title} key={image.url} />
        ))}
      </div>
    </div>
  );
}
