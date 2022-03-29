import {useEffect, useRef, useState} from "react";
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"
import {gsap} from 'gsap/dist/gsap';
import Image from "next/image";
import imagePlanetExpress from '../../public/images/planet-express.png';

import styles from './Transition.module.css'

export default function Transition({ children, menuButtonRef, location }) {
  const fullPageTransitionRef = useRef();

  const onEnteringHandler = (node) => {
    menuButtonRef.current.checked = false;
    gsap.to(fullPageTransitionRef.current, {
      opacity: '0',
      delay: 1.5,
      duration: 2,
      onComplete: () => {
	gsap.to(fullPageTransitionRef.current, {
	  zIndex: -1
	});
      }
    });
  };

  const onExitHandler = (node) => {
    gsap.to(fullPageTransitionRef.current, {
      zIndex: 10
    })
    gsap.to(fullPageTransitionRef.current, {
      opacity: 1,
      duration: 0.2,
    });
  }

  return (
    <TransitionGroup>
      <div className={styles.transition} ref={fullPageTransitionRef}>
	<div className={styles.transitionBackground}>
	  <Image src={imagePlanetExpress} alt="Logo planet express" />
	</div>
      </div>
      <ReactTransition
	key={location}
	onEntering={onEnteringHandler}
	onExit={onExitHandler}
	timeout={1500}
      >
	{children}
      </ReactTransition>
    </TransitionGroup>
  )
}
