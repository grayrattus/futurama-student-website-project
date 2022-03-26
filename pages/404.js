import styles from './404.module.css';
import imageNibler from '../public/images/nibler.png';
import Image from 'next/image';

export default function Custom404() {
  return <div className={styles.custom404}>
    <Image layout="fill" src={imageNibler} alt="Nibler nie znajduje strony" />
    <h1>404 - Nie znaleziono strony</h1>
  </div>
}
