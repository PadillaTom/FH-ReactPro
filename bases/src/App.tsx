import React from "react";
import { Counter, CounterBy, CounterEffect } from "./bases";

function App() {
	return (
		<React.Fragment>
			<Counter initialValue={5}></Counter>
			<CounterBy initialValue={15}></CounterBy>
			<CounterEffect></CounterEffect>
		</React.Fragment>
	);
}

export default App;
