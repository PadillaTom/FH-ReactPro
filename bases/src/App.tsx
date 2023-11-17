import React from "react";
import { Counter, CounterBy } from "./bases";

function App() {
	return (
		<React.Fragment>
			<Counter initialValue={5}></Counter>
			<CounterBy initialValue={15}></CounterBy>
		</React.Fragment>
	);
}

export default App;
