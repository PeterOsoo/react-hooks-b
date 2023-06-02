import React from "react"
import useCounter from "../../hooks/useCounter"

const CounterOne = () => {
	const [count, increment, decrement, reset] = useCounter(0, 1)

	return (
		<div>
			<p>Count {count}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
		</div>
	)
}

export default CounterOne
