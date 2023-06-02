import { useRef, useEffect } from "react"

const FocusInput = () => {
	const inputRef = useRef(null)

	useEffect(() => {
		inputRef.current.focus()
	}, [])

	return (
		<div>
			<h4>useRef Hook - Focus Input</h4>
			<input ref={inputRef} type="text" />
		</div>
	)
}

export default FocusInput
