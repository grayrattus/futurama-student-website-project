import {useEffect, useRef} from "react";
import Image from "next/image";

import {gsap} from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

import styles from './SlidableImage.module.css';

export default function SlidableImage({firstImage, secondImage, text}) {

  const scrollerRef = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: scrollerRef.current,
      pin: true,   // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "bottom end ", // when the top of the trigger hits the top of the viewport
      end: "+=2000px", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }
    });
    tl.to(`.${styles.absoluteImage}`, {opacity: 0});
    tl.to(`.${styles.heading}`, {opacity: 1});
    
  });

  return <div ref={scrollerRef} className={styles.container}>
      <Image layout='fill' src={secondImage} alt="Fry na kolorowym tle" />
      <Image layout='fill' className={styles.absoluteImage} src={firstImage} alt="Fry na szarym tle" />
      <h1 className={styles.heading}>{text}</h1>
  </div>
}
