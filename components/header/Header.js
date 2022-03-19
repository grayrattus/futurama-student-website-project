import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return <><ul className={styles.header}>
      <li><Link href="/"><a>Strona główna</a></Link></li>
      <li><Link href="/posts/history"><a>Historia</a></Link></li>
      <li><Link href="/posts/second-post"><a>Sklep</a></Link></li>
      <li><Link href="/about"><a>O stronie</a></Link></li>
  </ul></>
}
