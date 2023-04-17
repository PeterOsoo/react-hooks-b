import { useState, useEffect } from "react"

const HookCounterOne = () => {
	const [count, setCount] = useState(0)
	const [name, setName] = useState("")

	useEffect(() => {
		console.log("Use Effect - Update document title")
		document.title = `Clicked ${count} times`
	}, [count])

	return (
		<div>
			<h4>useEffect after render & Conditionally run effects</h4>
			<input
				type="text"
				value={name}
				onChange={e => setName(e.target.value)}
			/>{" "}
			<br /> <br />
			<button onClick={() => setCount(count + 1)}>
				Clicked {count} times{" "}
			</button>
		</div>
	)
}

export default HookCounterOne
