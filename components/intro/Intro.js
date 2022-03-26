import {useEffect, useRef} from "react";
import Image from 'next/image';

import {gsap} from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

import futuramaText from '../../public/images/futurama-text.png';
import futuramaShip from '../../public/images/ship.png';
import galaxy from '../../public/images/galaxy.jpg';

import styles from './Intro.module.css';

export default function Intro() {
  const scrollerRef = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
	trigger: scrollerRef.current,
	pin: true,   // pin the trigger element while active
	start: "top top", // when the top of the trigger hits the top of the viewport
	end: "center+=700px", // end after scrolling 500px beyond the start
	scrub: 1 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      }
    });
    tl.add('ship-away');
    tl.to(`.${styles.ship}`, {x: '300%'}, 'ship-away');
    tl.add('reset-ship');
    tl.to(`.${styles.ship}`, {visibility: 'hidden'}, 'reset-ship');
    tl.to(`.${styles.ship}`, {x: '-100%'}, 'reset-ship');
    tl.add('text-down');
    tl.to(`.${styles.text}`, {y: '40vh'}, 'text-down');
    tl.to(`.${styles.ship}`, {visibility: 'visible'}, 'text-down');
    tl.to(`.${styles.ship}`, {x: '-50%'}, 'text-down');
  });

  return <div ref={scrollerRef} className={styles.intro}>
    <Image layout='fill' src={galaxy} />
    <div className={styles.shipContainerOverflow}>
      <div className={styles.shipContainer}>
	<div className={styles.ship}>
	  <Image layout='responsive' src={futuramaShip} />
	</div>
      </div>
    </div>
    <div className={styles.text}>
      <Image src={futuramaText} />
    </div>
  </div>
}
