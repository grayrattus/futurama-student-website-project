import Head from 'next/head'
import SlidableImage from '../components/slidable-image/SlidableImage'
import styles from '../styles/Home.module.css'

import imageFryGray from '../public/images/fry-gray.jpeg';
import imageFryColor from '../public/images/fry-color.jpg';

import imageRun from '../public/images/run.jpeg';
import imageHug from '../public/images/hug.jpeg';
import imageReady from '../public/images/ready.jpeg';

import Banner from '../components/banner/Banner'
import VideoBackground from '../components/video-background/VideoBackground'
import BigText from '../components/big-text/BigText'
import Intro from '../components/intro/Intro'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
	<Intro />
	<BigText heading={'NOWY SEZON'} description={'Nadchodzi nowy sezon!'} background='#AA2C84' />
	<Banner 
	  background='#489699'
	  image={imageHug}
	  heading='Futurama oficjalnie otrzyma nowy sezon!'
	  description='"Futurama" zakończyła swoje drugie wcielenie we wrześniu 2013 roku. Teraz kultowy serial ma oficjalnie powrócić po dziesięciu latach przerwy. Niewiele animacji dla dorosłych zasłużyło na to bardziej niż produkcja Matta Groeninga'
	/>
	<Banner 
	  background='#405376'
	  image={imageRun}
	  left={false}
	  heading='Takie życie!'
	  description="Niemożliwe staje się możliwe. W erze remake'ów, rebootów i kontynuacji po latach fani popularnego serialu animowanego nareszcie doczekali się wznowienia swojej ulubionej produkcji."
	/>
	<BigText heading={'ZNUDZONY'} description={'Znudzony animacjami na NETFLIX?'} background='#232323' />
	<SlidableImage firstImage={imageFryGray} secondImage={imageFryColor} text='FUTURAMA FULL HD' />
	<BigText heading={'FUTURAMA'} description={'FUTURAMA student theis DRAMA'} background='#BA6520' />
	<VideoBackground src='/videos/intro-optimized.mp4' />
	<Banner 
	  image={imageReady}
	  background='#C8DEF0'
	  heading='Przygotuj się na lot jakiego jeszcze nie miałeś'
	/>
      </main>
    </div>
  )
}
