import React from "react";
import {
	Counter,
	CounterBy,
	CounterEffect,
	CounterHook,
	// CounterReducer,
} from "./bases";
import CounterReducerComponent from "./counter-reducer/CounterReducerComponent";

function App() {
	return (
		<React.Fragment>
			<Counter initialValue={5}></Counter>
			<CounterBy initialValue={15}></CounterBy>
			<CounterEffect></CounterEffect>
			<CounterHook></CounterHook>
			<CounterReducerComponent></CounterReducerComponent>
		</React.Fragment>
	);
}

export default App;
