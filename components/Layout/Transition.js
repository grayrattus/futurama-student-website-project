import {useEffect, useRef, useState} from "react";
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"
import {gsap} from 'gsap/dist/gsap';
import Image from "next/image";
import imagePlanetExpress from '../../public/images/planet-express.png';

export default function Transition({ children, menuButtonRef, location }) {
  const fullPageTransitionRef = useRef();

  const onEnteringHandler = (node) => {
    menuButtonRef.current.checked = false;
    gsap.set(node, {
      position: "absolute"
    });
    gsap.to(fullPageTransitionRef.current, {
      opacity: 1,
      zIndex: 10,
      duration: 1.4,
      onComplete: () => {
	gsap.set(node, {
	  position: "relative"
	});
	gsap.to(fullPageTransitionRef.current, {
	  opacity: '0',
	  delay: 0.5,
	  duration: 1.5,
	  onComplete: () => {
	    gsap.to(fullPageTransitionRef.current, {
	      zIndex: 0
	    });
	  }
	});
      }
    });
  };

  return (
    <TransitionGroup>
      <div style={{position: 'fixed', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', zIndex: -1, opacity: 0, width: '100vw', background: '#154A44' }} ref={fullPageTransitionRef}>
	<div style={{width: '300px', height: '300px'}}>
	  <Image src={imagePlanetExpress} alt="Fry na kolorowym tle" />
	</div>
      </div>
      <ReactTransition
	key={location}
	onEntering={onEnteringHandler}
	timeout={1500}
      >
	{children}
      </ReactTransition>
    </TransitionGroup>
  )
}
