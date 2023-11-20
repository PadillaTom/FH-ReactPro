import React, { useState, useEffect, useRef } from "react";
import { useCounter } from "../hooks/useCounter";

const CounterHook = () => {
	const { counter, elementToAnimate, handleClick } = useCounter({
		maxCount: 15,
	});
	return (
		<React.Fragment>
			<h1>Counter Hook:</h1>
			<h2 ref={elementToAnimate}>{counter}</h2>
			<button onClick={handleClick}>+1</button>
		</React.Fragment>
	);
};

export default CounterHook;
