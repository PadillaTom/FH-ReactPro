import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const MAXIMUM_COUNT = 10;

const CounterEffect = () => {
	const [counter, setCounter] = useState(5);

	const counterHTMLElement = useRef<HTMLHeadingElement>(null);

	const handleClick = () => {
		setCounter((prev) => Math.min(prev + 1, MAXIMUM_COUNT));
	};

	useEffect(() => {
		if (counter < MAXIMUM_COUNT) return;

		const tl = gsap.timeline();

		tl.to(counterHTMLElement.current, {
			y: -4,
			duration: 0.1,
			ease: "ease.out",
		}).to(counterHTMLElement.current, {
			y: 0,
			duration: 0.3,
			ease: "bounce.out",
		});
	}, [counter]);

	return (
		<React.Fragment>
			<h1>CounterEffect:</h1>
			<h2 ref={counterHTMLElement}>{counter}</h2>

			<button onClick={handleClick}>+1</button>
		</React.Fragment>
	);
};

export default CounterEffect;
