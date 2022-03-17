import styles from './BigText.module.css';

export default function BigText({heading, description, background}) {
  return <div className={styles.bigText} style={{background}}>
    <h2>{heading}</h2>
    {description && <p>{description}</p>}
  </div>
}
