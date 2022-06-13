import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <main id={styles.main}>
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 527 518"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M33 1C33 325 456.094 78 519 255C570 398.5 342.535 327.153 326.5 431C316 499 503.5 431 519 517.5M33 1L0.5 66M33 1L70.5 57.5"
            stroke="black"
          />
        </svg>

        <p>Click one of the test page links above to view a template example</p>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
