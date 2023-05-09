import React from "react"
import HookCounter from "../components/UseState/HookCounter"
import HookCounterTwo from "../components/UseState/HookCounterTwo"
import HookCounterThree from "../components/UseState/HookCounterThree"
import HookCounterFour from "../components/UseState/HookCounterFour"

const UseState = () => {
	return (
		<div>
			<h3>Use State Hooks</h3>

			<HookCounter />
			<HookCounterTwo />
			<HookCounterThree />
			<HookCounterFour />
		</div>
	)
}

export default UseState
