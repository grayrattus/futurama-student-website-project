import {useEffect, useRef, useState} from "react";
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"
import {gsap} from 'gsap/dist/gsap';
import Image from "next/image";
import imagePlanetExpress from '../../public/images/planet-express.png';

export default function Transition({ children, location }) {
  const fullPageTransitionRef = useRef();

  const onEnterHandler = (node) => {
    gsap.set(node, {
      position: "relative"
    });
    if (location === '/') {
      console.log('onEnter', node);
    }
  };
  const onEnteringHandler = (node) => {
    gsap.set(node, {
      position: "absolute"
    });
    if (location === '/') {
      gsap.to(fullPageTransitionRef.current, {
	opacity: 1,
	zIndex: 10,
	duration: 1,
	onComplete: () => {
	  gsap.to(fullPageTransitionRef.current, {
	    opacity: '0',
	    delay: 0.25,
	    duration: 1.5,
	    onComplete: () => {
	      gsap.to(fullPageTransitionRef.current, {
		zIndex: -1
	      });
	    }
	  });
	}
      });
    }
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
	onEnter={onEnterHandler}
	timeout={1000}
      >
	{children}
      </ReactTransition>
    </TransitionGroup>
  )
}
