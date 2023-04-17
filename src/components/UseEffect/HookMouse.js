import { useState, useEffect } from "react"

const HookMouse = () => {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
		console.log("Mouse move")
		setX(e.clientX)
		setY(e.clientY)
	}

	useEffect(() => {
		console.log("Use Effect - Mouse Move")
		window.addEventListener("mousemove", logMousePosition)
	}, [])

	return (
		<div>
			<h4>Run effects only once</h4>
			<p>
				{" "}
				X - {x} Y - {y}
			</p>
		</div>
	)
}

export default HookMouse
