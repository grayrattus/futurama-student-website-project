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

import image1 from '../public/images/shop/shirt1.jpeg';
import image2 from '../public/images/shop/shirt2.jpeg';
import image3 from '../public/images/shop/shirt3.jpeg';

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

export const products = [
  {
    id: "tshirt1",
    name: "Koszulka Futurama Nibler",
    price: 25.00,
    image: image1,
    alt: 'Koszulka Futurama 1',
    description: "Koszulka z biodegradowalnego materiału, kolor czarny w sam raz na festiwal rockowy.",
    url: '/api/products/tshirt1'
  },
  {
    id: "tshirt2",
    name: "Koszulka Futurama Fry",
    price: 25.00,
    image: image2,
    alt: 'Koszulka Futurama 2',
    description: "Koszulka z biodegradowalnego materiału, kolor szary w sam raz na festiwal popowy.",
    url: '/api/products/tshirt3'
  },
  {
    id: "tshirt3",
    name: "Koszulka Futurama Leela",
    price: 25.00,
    image: image3,
    alt: 'Koszulka Futurama 3',
    description: "Koszulka z biodegradowalnego materiału, kolor prawie biały nie do użytku na festiwalach.",
    url: '/api/products/tshirt3'
  },

];
