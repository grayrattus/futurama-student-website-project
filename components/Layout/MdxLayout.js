import styles from './MdxLayout.module.css'

export default function MdxLayout({children}) {
  return <div className={styles.mdxLayout}><article style={{width: '70%', margin: '0 auto' }}>{children}</article></div>
}
