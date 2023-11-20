import React, { useState } from "react";

interface Props {
	initialValue?: number;
}

interface CounterState {
	counter: number;
	clicks: number;
}

const CounterBy = ({ initialValue = 5 }: Props) => {
	const [{ counter, clicks }, setCounterState] = useState<CounterState>({
		counter: initialValue,
		clicks: 0,
	});

	const handleClick = (n: number) => {
		setCounterState(({ counter, clicks }) => ({
			counter: counter + n,
			clicks: clicks + 1,
		}));
	};

	return (
		<React.Fragment>
			<h1>Counter By: {counter}</h1>
			<h1>Clicks: {clicks}</h1>
			<button
				onClick={() => {
					handleClick(1);
				}}
			>
				+1
			</button>
			<button
				onClick={() => {
					handleClick(5);
				}}
			>
				+5
			</button>
		</React.Fragment>
	);
};

export default CounterBy;
