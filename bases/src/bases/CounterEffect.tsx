import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

const MAXIMUM_COUNT = 10;

const CounterEffect = () => {
	const [counter, setCounter] = useState(5);

	const handleClick = () => {
		setCounter((prev) => Math.min(prev + 1, MAXIMUM_COUNT));
	};

	useEffect(() => {
		if (counter < MAXIMUM_COUNT) return;

		console.log(
			"%cSe llego al valor MAXIMO",
			"color: crimson; background-color: white"
		);

		gsap
			.to("h2", {
				y: -4,
				duration: 0.1,
				ease: "ease.out",
			})
			.then(() => {
				gsap.to("h2", {
					y: 0,
					duration: 0.3,
					ease: "bounce.out",
				});
			});
	}, [counter]);

	return (
		<React.Fragment>
			<h1>CounterEffect:</h1>
			<h2>{counter}</h2>

			<button onClick={handleClick}>+1</button>
		</React.Fragment>
	);
};

export default CounterEffect;
