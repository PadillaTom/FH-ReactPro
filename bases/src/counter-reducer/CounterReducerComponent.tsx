import React, { useReducer } from "react";
import { counterReducer } from "./state/counterReducer";
import * as CounterActions from "./actions/actions";

const INITIAL_STATE = {
	counter: 0,
	previous: 0,
	changes: 0,
};

const CounterReducerComponent = () => {
	const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

	const handleReset = () => dispatch(CounterActions.doReset());
	const increaseBy = (value: number) =>
		dispatch(CounterActions.doIncreaseBy(value));

	return (
		<React.Fragment>
			<h1>Counter Reducer Segmented:</h1>
			<pre>{JSON.stringify(counterState, null, 2)}</pre>
			<button onClick={() => increaseBy(1)}>+1</button>
			<button onClick={() => increaseBy(5)}>+5</button>
			<button onClick={() => increaseBy(10)}>+10</button>
			<button onClick={handleReset}>Reset</button>
		</React.Fragment>
	);
};

export default CounterReducerComponent;
