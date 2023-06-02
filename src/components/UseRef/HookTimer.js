import React, { useState, useEffect, useRef } from "react"

const HookTimer = () => {
	const [timer, setTimer] = useState(0)
	const interValRef = useRef()
	useEffect(() => {
		interValRef.current = setInterval(() => {
			setTimer(timer => timer + 1)
		}, 1000)
		return () => {
			clearInterval(interValRef.current)
		}
	}, [])
	return (
		<div>
			<h4>UseRef with Timer</h4>
			<p> HookTimer - {timer} </p>
			<button onClick={() => clearInterval(interValRef.current)}>
				Clear Timer
			</button>
		</div>
	)
}

export default HookTimer
