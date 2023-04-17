import { useState, useEffect } from "react"

const HookCounterOne = () => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		document.title = `Clicked ${count} times`
	})

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>
				Clicked {count} times{" "}
			</button>
		</div>
	)
}

export default HookCounterOne
