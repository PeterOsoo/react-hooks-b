import { useState, useEffect } from "react"

const IntervalHookCounter = () => {
	const [count, setCount] = useState(0)

	const tick = () => {
		setCount(count + 1)
	}

	useEffect(() => {
		const interval = setInterval(tick, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [count])

	return (
		<div>
			<h4>useEffect with incorrect dependency</h4>
			<p>Count - {count}</p>
		</div>
	)
}

export default IntervalHookCounter
