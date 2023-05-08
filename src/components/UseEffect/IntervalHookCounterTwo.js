import { useState, useEffect } from "react"

const IntervalHookCounterTwo = () => {
	const [count, setCount] = useState(0)

	const tick = () => {
		setCount(prevCount => prevCount + 1)
	}

	useEffect(() => {
		const interval = setInterval(tick, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<div>
			<h4>
				useEffect with incorrect dependency(prevCount & no dependency array)
			</h4>
			<p>Count - {count}</p>
		</div>
	)
}

export default IntervalHookCounterTwo
