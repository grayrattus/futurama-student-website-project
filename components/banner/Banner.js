import Image from 'next/image'
import styles from './Banner.module.css'

export default function Banner({heading, description, image, left = true, background = '#fff'}) {
  return <article className={left ? styles.banner : styles.bannerReverse}>
    <div className={styles.bigContainer}>
      <Image objectFit='cover' layout='fill' src={image} alt="Fry na kolorowym tle" />
    </div>
    <div className={styles.smallContainer} style={{background}}>
      <h2>{heading}</h2>
      <p>{description}</p>
    </div>
  </article>
}
