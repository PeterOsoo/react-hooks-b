import React from "react"
import HookCounter from "../components/UseState/HookCounter"
import HookCounterTwo from "../components/UseState/HookCounterTwo"
import HookCounterThree from "../components/UseState/HookCounterThree"
import HookCounterFour from "../components/UseState/HookCounterFour"

const UseState = () => {
	return (
		<div>
			<HookCounter />
			<HookCounterTwo />
			<HookCounterThree />
			<HookCounterFour />
		</div>
	)
}

export default UseState
