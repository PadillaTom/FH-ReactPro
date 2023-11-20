import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const useCounter = ({ maxCount = 1 }) => {
	const [counter, setCounter] = useState(5);

	const elementToAnimate = useRef<any>(null);

	const tl = useRef(gsap.timeline());

	const handleClick = () => {
		setCounter((prev) => Math.min(prev + 1, maxCount));
	};

	useLayoutEffect(() => {
		// GSAP will throw an error if the current element is NULL (NO ref is defined in the component)
		// To prevent this, we will do an early return
		if (!elementToAnimate.current) return;

		tl.current
			.to(elementToAnimate.current, {
				y: -4,
				duration: 0.1,
				ease: "ease.out",
			})
			.to(elementToAnimate.current, {
				y: 0,
				duration: 0.3,
				ease: "bounce.out",
			});

		// Prevent from animating on rendering
		// Needs a PLAY somewhere else to start animating
		tl.current.pause();
	}, []);

	useEffect(() => {
		if (counter < maxCount) return;

		//  PLAY for the animation
		tl.current.play(0);
	}, [counter, maxCount]);

	return {
		counter,
		elementToAnimate,
		handleClick,
	};
};
