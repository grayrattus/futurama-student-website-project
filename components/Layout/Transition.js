import {useEffect, useRef} from "react";
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"
import {gsap} from 'gsap/dist/gsap';

export default function Transition({ children, location }) {
  const fullPageTransitionRef = useRef();

  const onEnterHandler = (node) => {
    console.log('onEnter', node);
    // gsap.killTweensOf(node);
    // Set initial position and styles
    gsap.set(node, {
      position: "relative"
    });
    // gsap.set(parentNode.current, { overflow: "hidden" })
    // Create the animation for the incoming component
    // gsap.to(node, {
    //   duration: 0.4, autoAlpha: 1,
    //   x: 0,
    //   onComplete: completeCall,
    //   onCompleteParams: [node, parentNode.current]
    // });
  };
  const onEnteringHandler = (node) => {
    console.log('onEntering', node);
    // gsap.killTweensOf(node);
    // Set initial position and styles
    gsap.set(node, {
      position: "absolute"
    });
    gsap.to(fullPageTransitionRef.current, {
      width: '100vw',
      duration: 1,
      onComplete: () => {
	gsap.to(fullPageTransitionRef.current, {
	  width: '0',
	  duration: 1,
	});
      }
    });
    // gsap.set(parentNode.current, { overflow: "hidden" })
    // Create the animation for the incoming component
    // gsap.to(node, {
    //   duration: 0.4, autoAlpha: 1,
    //   x: 0,
    //   onComplete: completeCall,
    //   onCompleteParams: [node, parentNode.current]
    // });
  };

  const onExitHandler = (node) => {
    console.log('onExit', node);
    // gsap.killTweensOf(node);
    // Set initial position and styles
    // gsap.set(node, {
    //   position: "absolute", left: 0
    // });
    // // Create the animation for the incoming component
    // gsap.to(node, {
    //   duration: 0.4, autoAlpha: 0,
    //   x: -100
    // });
  };


  console.log(location);

  return (
    <TransitionGroup>
      <div style={{position: 'fixed', height: '100vh', zIndex: 10, background: 'red' }} ref={fullPageTransitionRef}></div>
      <ReactTransition
	key={location}
	onEntering={onEnteringHandler}
	onEnter={onEnterHandler}
	onExit={onExitHandler}

	timeout={1000}
      >
	{children}
      </ReactTransition>
    </TransitionGroup>
  )
}
