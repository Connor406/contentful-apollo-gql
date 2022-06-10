import { fetchNavBarData } from '@/api';
import { useEffect, useState } from 'react';
import styles from '@/styles/components/Navbar.module.scss';

export default function Navbar() {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetchNavBarData().then(
      ({
        data: {
          navBar: { navLinksCollection },
        },
        errors,
      }) => {
        if (navLinksCollection) setData(navLinksCollection);
        if (errors) setErrors(errors as any);
      }
    );
  }, []);

  return (
    <nav id={styles.navbar}>
      <ul>
        {data?.items &&
          data.items.map(({ linkName, linkUrl }) => (
            <li key={linkName}>
              <a href={linkUrl}>{linkName}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
}
