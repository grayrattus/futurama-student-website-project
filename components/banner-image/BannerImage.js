import {useEffect, useRef} from "react";
import Image from 'next/image'
import styles from './BannerImage.module.css';
import {gsap} from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

export default function BannerImage({image: {src, alt}, title}) {
  const scrollerRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
	trigger: scrollerRef.current,
	start: "top top", // when the top of the trigger hits the top of the viewport
	end: "center top", // when the top of the trigger hits the top of the viewport
	scrub: true
      }
    });
    tl.to(titleRef.current, {y: 100});
  });

  return <div ref={scrollerRef} className={styles.bannerImage}>
    <Image layout='responsive' src={src} alt={alt} />
    <div className={styles.title}>
      <h1 ref={titleRef}>{title}</h1>
    </div>
    </div>
}
