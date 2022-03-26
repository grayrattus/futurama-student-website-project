import styles from './Footer.module.css';

export default function Footer() {
  return <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <ul>
	<li>Telefon: +31 889 238 098</li>
	<li>Email: futurama@gmail.com</li>
      </ul>
      <span>Futurama <sup>&copy;</sup></span>
    </div>
  </footer>
}
