import React, { useState, useEffect } from "react";

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
	}, [counter]);

	return (
		<React.Fragment>
			<h1>CounterEffect: {counter}</h1>
			<button onClick={handleClick}>+1</button>
		</React.Fragment>
	);
};

export default CounterEffect;
