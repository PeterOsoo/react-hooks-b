import React, { useReducer } from "react"
import ComponentA from "./componentsAF/ComponentA"
import ComponentB from "./componentsAF/ComponentB"
import ComponentC from "./componentsAF/ComponentC"

const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case "increment":
			return state + 1
		case "decrement":
			return state - 1
		case "reset":
			return initialState
		default:
			return state
	}
}

export const CountContext = React.createContext()
const UseContext = () => {
	const [count, dispatch] = useReducer(reducer, initialState)
	return (
		<CountContext.Provider
			value={{ countState: count, countDispatch: dispatch }}
		>
			<br />
			<div>
				<p> {count} </p>
				<ComponentA /> <br />
				<ComponentB /> <br />
				<ComponentC />
			</div>
		</CountContext.Provider>
	)
}

export default UseContext
