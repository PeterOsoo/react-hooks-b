import { useState, useMemo } from "react"

const Counter = () => {
	const [counterOne, setCounterOne] = useState(0)
	const [counterTwo, setCounterTwo] = useState(0)

	const incrementOne = () => {
		setCounterOne(counterOne + 1)
	}

	const incrementTwo = () => {
		setCounterTwo(counterTwo + 1)
	}

	const isEven = useMemo(() => {
		let i = 0
		while (i < 2000000000) i++
		return counterOne % 2 === 0
	}, [counterOne])

	return (
		<div>
			<h4>Use Memo Hook</h4>
			<p>
				The React useMemo Hook returns a memoized value.{" "}
				<a
					href="https://www.w3schools.com/react/react_usememo.asp"
					target="_blank"
				>
					Notes
				</a>{" "}
			</p>
			<div>
				<button onClick={incrementOne}>Count One - {counterOne}</button>
				<span>{isEven ? "Even" : "Odd"}</span>
			</div>
			<br />
			<div>
				<button onClick={incrementTwo}>Count Two - {counterTwo}</button>
			</div>
		</div>
	)
}

export default Counter
