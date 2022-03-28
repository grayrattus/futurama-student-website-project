import styles from './Footer.module.css';

export default function Footer() {
  return <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <ul>
	<li><a href="tel:+31889238098">Telefon: +31 899 238 098</a></li>
	<li><a href="mailto:futurama@gmail.com">Email: futurama@gmail.com</a></li>
      </ul>
      <span>Futurama <sup>&copy;</sup></span>
    </div>
  </footer>
}
