import React from "react";
import { Counter, CounterBy, CounterEffect, CounterHook } from "./bases";

function App() {
	return (
		<React.Fragment>
			<Counter initialValue={5}></Counter>
			<CounterBy initialValue={15}></CounterBy>
			<CounterEffect></CounterEffect>
			<CounterHook></CounterHook>
		</React.Fragment>
	);
}

export default App;
