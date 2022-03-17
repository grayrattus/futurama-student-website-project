import styles from './VideoBackground.module.css';

export default function VideoBackground({src}) {
  return <video className={styles.videoBackground} autoPlay muted loop id="myVideo">
    <source src={src} type="video/mp4" />
</video>
}
