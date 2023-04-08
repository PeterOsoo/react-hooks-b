import { useState } from "react"

const HookCounterTwo = () => {
	const initialCount = 0
	const [count, setCount] = useState(initialCount)

	const incrementFive = () => {
		for (let i = 0; i < 5; i++) {
			setCount(prevCount => prevCount + 1)
		}
	}
	return (
		<div>
			<h4>Using prevState</h4>
			Count - {count}
			<button onClick={() => setCount(initialCount)}> Reset</button>
			<button onClick={() => setCount(prevCount => prevCount + 1)}>
				{" "}
				Increase
			</button>
			<button onClick={() => setCount(prevCount => prevCount - 1)}>
				{" "}
				Decrease
			</button>
			<button onClick={() => incrementFive()}> Increase 5</button>
		</div>
	)
}

export default HookCounterTwo
