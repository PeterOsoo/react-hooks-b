import { useState } from "react"

const HookCounter = () => {
	const [count, setCount] = useState(0)

	return (
		<div>
			<h4>Simple App that increases count by one on button click</h4>
			<button onClick={() => setCount(count + 1)}> Count - {count} </button>
		</div>
	)
}

export default HookCounter
